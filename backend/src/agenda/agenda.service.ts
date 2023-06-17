import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAgendaDTO } from './dtos/create-agenda.dto';
import { UpdateAgendaDTO } from './dtos/update-agenda.dto';

@Injectable()
export class AgendaService {
  constructor(
    @InjectModel('CreateAgendaDTO')
    private readonly agendaModel: Model<CreateAgendaDTO>,
  ) {}

  async getAll() {
    return await this.agendaModel
      .find()
      .populate('cliente')
      .populate('imovel')
      .populate('corretor');
  }

  async getById(id: string) {
    return await this.agendaModel
      .findById(id)
      .populate('cliente')
      .populate('imovel')
      .populate('corretor');
  }

  async create(data: CreateAgendaDTO) {
    try {
      return await new this.agendaModel(data).save();
    } catch (error) {
      throw new NotAcceptableException(error);
    }
  }

  async update(id: string, data: UpdateAgendaDTO) {
    try {
      await this.exists(id);
      await this.agendaModel.updateOne({ _id: id }, data);
      return this.getById(id);
    } catch (error) {
      throw new NotAcceptableException(error);
    }
  }

  async delete(id: string) {
    await this.exists(id);
    return await this.agendaModel.deleteOne({ _id: id });
  }

  async exists(id: string) {
    if (!(await this.agendaModel.count({ _id: id }))) {
      throw new NotFoundException('Agenda não cadastrada.');
    }
  }
}

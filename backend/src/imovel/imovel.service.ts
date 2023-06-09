import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateImovelDTO } from './dtos/create-imovel.dto';
import { UpdateImovelDTO } from './dtos/update-imovel.dto';
import { QueryParamsDTO } from './dtos/search-query.dto';

@Injectable()
export class ImovelService {
  constructor(
    @InjectModel('CreateImovelDTO')
    private readonly imovelModel: Model<CreateImovelDTO>,
  ) {}

  async getByQuery(search?: QueryParamsDTO) {
    return await this.imovelModel.find({
      $or: [{ titulo: search.titulo }, { valor: search.valor }],
    });
  }

  async getAll() {
    return await this.imovelModel.find();
  }

  async getById(id: string) {
    return await this.imovelModel.findById(id);
  }

  async create(data: CreateImovelDTO) {
    try {
      const newImovel = new this.imovelModel(data);
      return newImovel.save();
    } catch (error) {
      throw new NotAcceptableException(error);
    }
  }

  async update(id: string, data: UpdateImovelDTO) {
    try {
      await this.exists(id);
      await this.imovelModel.updateOne({ _id: id }, data);
      return this.getById(id);
    } catch (error) {
      throw new NotAcceptableException(error);
    }
  }

  async delete(id: string) {
    await this.exists(id);
    return await this.imovelModel.deleteOne({ _id: id });
  }

  async exists(id: string) {
    if (!(await this.imovelModel.count({ _id: id }))) {
      throw new NotFoundException('Imovel não cadastrado.');
    }
  }
}

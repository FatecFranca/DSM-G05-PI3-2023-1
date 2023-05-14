import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCorretorDTO } from './dtos/create-corretor.dto';
import { UpdateCorretorDTO } from './dtos/update-corretor.dto';

@Injectable()
export class CorretorService {
    constructor(@InjectModel('CreateCorretorDTO') private readonly corretorModel: Model<CreateCorretorDTO>) {}

    async getAll() {
        return await this.corretorModel.find();
    }

    async getById(id: string) {
        return await this.corretorModel.findById(id);
    }

    async create(data: CreateCorretorDTO) {
        try {
            const createdNew = new this.corretorModel(data);
            return await createdNew.save()
        } catch (error) {
            if (error.code === 11000) {
                throw new NotAcceptableException('CPF já cadastrado.')
            }
            throw new NotAcceptableException(error)
        }
    }

    async update(id: string, data: UpdateCorretorDTO) {
        try {
            await this.exists(id)
            await this.corretorModel.updateOne({ _id: id }, data);
            return this.getById(id)
        } catch (error) {
            if (error.code === 11000) {
                throw new NotAcceptableException('CPF já cadastrado.')
            }
            throw new NotAcceptableException(error)
        }
    }

    async delete(id: string) {
        await this.exists(id)
        return await this.corretorModel.deleteOne({_id: id})
    }

    async exists(id: string) {
        if (!(await this.corretorModel.count({ _id: id }))) {
            throw new NotFoundException('O cliente não existe.');
        }
    }
}

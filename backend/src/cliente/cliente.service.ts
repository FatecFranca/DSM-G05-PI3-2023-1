import { Injectable, NotAcceptableException, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateClienteDTO } from "./dtos/create-cliente.dto";
import { UpdateClienteDTO } from "./dtos/update-cliente.dto";

@Injectable()
export class ClienteService {
    constructor(@InjectModel('CreateClienteDTO') private readonly clienteModel: Model<CreateClienteDTO>) { }

    async getAll() {
        return await this.clienteModel.find()
    }

    async getById(id: string) {
        return await this.clienteModel.findById(id)
    }

    async getByQuery(search: string) {
        return await this.clienteModel.find().or([
            {nome: search},
            {email: search},
        ])
    }

    async create(data: CreateClienteDTO) {
        try {
            const createdNew = new this.clienteModel(data);
            return await createdNew.save()
        } catch (error) {
            if (error.code === 11000) {
                throw new NotAcceptableException('CPF já cadastrado.')
            }
            throw new NotAcceptableException(error)
        }
    }

    async update(id: string, data: UpdateClienteDTO) {
        try {
            await this.exists(id)
            await this.clienteModel.updateOne({ _id: id }, data);
            return this.getById(id)
        } catch (error) {
            if (error.code === 11000) {
                throw new NotAcceptableException('CPF já cadastrado.')
            }
            throw new NotAcceptableException(error)
        }
    }

    async delete(id: string) {
        return await this.clienteModel.deleteOne({ _id: id })
    }

    async exists(id: string) {
        if (!(await this.clienteModel.count({ _id: id }))) {
            throw new NotFoundException('O cliente não existe.');
        }
    }
}
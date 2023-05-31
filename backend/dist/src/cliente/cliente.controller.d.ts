/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { ClienteService } from "./cliente.service";
import { CreateClienteDTO } from "./dtos/create-cliente.dto";
import { UpdateClienteDTO } from "./dtos/update-cliente.dto";
import { ReturnClienteDTO } from "./dtos/return-cliente.dto";
import { QueryParamsDTO } from "./dtos/search-query.dto";
export declare class ClienteController {
    private readonly clienteService;
    constructor(clienteService: ClienteService);
    getQuery(query: QueryParamsDTO): Promise<ReturnClienteDTO[]>;
    getAll(): Promise<ReturnClienteDTO[]>;
    getById(id: string): Promise<ReturnClienteDTO>;
    create(data: CreateClienteDTO): Promise<import("mongoose").Document<unknown, {}, CreateClienteDTO> & Omit<CreateClienteDTO & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    update(id: string, data: UpdateClienteDTO): Promise<ReturnClienteDTO>;
    delete(id: string): Promise<import("mongodb").DeleteResult>;
}

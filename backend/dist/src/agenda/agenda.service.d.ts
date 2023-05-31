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
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { CreateAgendaDTO } from './dtos/create-agenda.dto';
import { UpdateAgendaDTO } from './dtos/update-agenda.dto';
export declare class AgendaService {
    private readonly agendaModel;
    constructor(agendaModel: Model<CreateAgendaDTO>);
    getAll(): Promise<Omit<Omit<Omit<import("mongoose").Document<unknown, {}, CreateAgendaDTO> & Omit<CreateAgendaDTO & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, never>, never>, never>[]>;
    getById(id: string): Promise<import("mongoose").Document<unknown, {}, CreateAgendaDTO> & Omit<CreateAgendaDTO & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    create(data: CreateAgendaDTO): Promise<import("mongoose").Document<unknown, {}, CreateAgendaDTO> & Omit<CreateAgendaDTO & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    update(id: string, data: UpdateAgendaDTO): Promise<import("mongoose").Document<unknown, {}, CreateAgendaDTO> & Omit<CreateAgendaDTO & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    delete(id: string): Promise<import("mongodb").DeleteResult>;
    exists(id: string): Promise<void>;
}

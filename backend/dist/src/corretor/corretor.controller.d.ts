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
import { CorretorService } from './corretor.service';
import { CreateCorretorDTO } from './dtos/create-corretor.dto';
import { UpdateCorretorDTO } from './dtos/update-corretor.dto';
import { ReturnCorretorDTO } from './dtos/return-corretor.dto';
export declare class CorretorController {
    private readonly corretorService;
    constructor(corretorService: CorretorService);
    getAll(): Promise<ReturnCorretorDTO[]>;
    getById(id: string): Promise<ReturnCorretorDTO>;
    create(data: CreateCorretorDTO): Promise<import("mongoose").Document<unknown, {}, CreateCorretorDTO> & Omit<CreateCorretorDTO & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    update(id: string, data: UpdateCorretorDTO): Promise<ReturnCorretorDTO>;
    delete(id: string): Promise<import("mongodb").DeleteResult>;
}

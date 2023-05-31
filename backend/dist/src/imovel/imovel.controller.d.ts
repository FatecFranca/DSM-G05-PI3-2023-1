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
import { ImovelService } from './imovel.service';
import { CreateImovelDTO } from './dtos/create-imovel.dto';
import { UpdateImovelDTO } from './dtos/update-imovel.dto';
import { ReturnImovelDTO } from './dtos/return-imovol.dto';
export declare class ImovelController {
    private readonly imovelService;
    constructor(imovelService: ImovelService);
    getAll(): Promise<ReturnImovelDTO[]>;
    getById(id: string): Promise<ReturnImovelDTO>;
    create(data: CreateImovelDTO): Promise<import("mongoose").Document<unknown, {}, CreateImovelDTO> & Omit<CreateImovelDTO & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    update(id: string, data: UpdateImovelDTO): Promise<ReturnImovelDTO>;
    delete(id: string): Promise<import("mongodb").DeleteResult>;
}

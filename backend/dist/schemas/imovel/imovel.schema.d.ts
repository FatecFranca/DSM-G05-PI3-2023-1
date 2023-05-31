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
export declare class Imovel {
    proprietario: string;
    area: string;
    qtde_quartos: number;
    qtde_banheiros: number;
    valor: string;
    finalidade: string;
    endereco: {
        enderecoSchema: any;
    };
    createdAt: Date;
    updatedAt: Date;
}
export declare const ImovelSchema: import("mongoose").Schema<Imovel, import("mongoose").Model<Imovel, any, any, any, import("mongoose").Document<unknown, any, Imovel> & Omit<Imovel & {
    _id: import("mongoose").Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Imovel, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Imovel>> & Omit<import("mongoose").FlatRecord<Imovel> & {
    _id: import("mongoose").Types.ObjectId;
}, never>>;

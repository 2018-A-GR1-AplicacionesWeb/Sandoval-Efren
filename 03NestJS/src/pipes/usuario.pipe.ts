import {ArgumentMetadata, BadRequestException, Injectable, PipeTransform} from "@nestjs/common";
import {PeticionErroneaException} from "../exceptions/peticion-erronea-exception";

import * as Joi from 'joi';


@Injectable()
export class UsuarioPipe implements PipeTransform {

    constructor(private readonly _schema){

    }

    transform(jsonAValidar: any, metadata: ArgumentMetadata) {
        const {
            error
        } = Joi.validate(jsonAValidar, this._schema);

        if(error){
            throw new BadRequestException({
                error: error,
                mensaje: 'Json no valido'
            });
        }else{
            return jsonAValidar;
        }
    }


}
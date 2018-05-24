import {HttpException, HttpStatus} from "@nestjs/common";


export class PeticionErroneaException extends HttpException {
    constructor(private readonly _mensaje) {
        super({
            mensaje: 'Peticion Erronea',
            statusCode: HttpStatus.BAD_REQUEST,
            detalle: _mensaje
        }, HttpStatus.BAD_REQUEST);
    }
}


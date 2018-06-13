import {Injectable} from "@nestjs/common";

const jwtPaquete = require('jsonwebtoken'); //importat en javascript

@Injectable()
export class JwtService {

    private readonly secreto = 'El sol no esta calentando';

    private readonly jwt = jwtPaquete;

    private readonly tiempoVidaToken = '30s';

    emitirToken(payload: any){
        return this.jwt.sign(
            {

                payload: payload
            },
            this.secreto,
            {
                expiresIn: this.tiempoVidaToken
            });
    }

    veificarToken(token: string, callback){
        this.jwt.verify(
            token,
            this.secreto,
            callback);
    }

}
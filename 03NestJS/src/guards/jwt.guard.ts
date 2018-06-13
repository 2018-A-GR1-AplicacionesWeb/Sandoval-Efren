import {CanActivate, ExecutionContext, Injectable} from "@nestjs/common";
import {Reflector} from "@nestjs/core";
import {JwtService} from "../servicios/jwt.service";
import {Observable} from "rxjs/internal/Observable";

@Injectable()
export class JwtGuard implements CanActivate{

    constructor(
        private readonly reflector: Reflector,
        private readonly _jwtService: JwtService
    ){}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context
            .switchToHttp()
            .getRequest();
        const jwt = request.headers.authentication;

        if(jwt){
            this._jwtService
                .veificarToken()
        }
    }




}
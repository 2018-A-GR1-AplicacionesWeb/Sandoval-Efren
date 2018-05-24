import {CanActivate} from "@nestjs/common/interfaces/can-activate.interface";
import {ExecutionContext} from "@nestjs/common";
import {Observable} from "rxjs/internal/Observable";


export class CrearUsuarioGuard implements CanActivate{

    canActivate(
        context: ExecutionContext)
        : boolean |
        Promise <boolean> |
        Observable<boolean> {}
    )

}
import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { request } from "http";
import { Observable } from "rxjs";

@Injectable()
export class ApiKeyGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest()
        const apiKey = request.header('X-API-KEY');
        if(apiKey != process.env.PLACEHOLDER_API_KEY){
            return false
        }

        return true
    }
}
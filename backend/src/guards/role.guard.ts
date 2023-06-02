import {Injectable, CanActivate, ExecutionContext} from '@nestjs/common'
import {Reflector} from '@nestjs/core'
import { Role } from '../enums/role.enum'
import { ROLES_KEY } from '../decorators/role.decorator'

@Injectable()
export class RoleGuard implements CanActivate {
    constructor(private readonly refletor: Reflector) {}

    async canActivate(ctx:  ExecutionContext) {
        const requiredRoles = this.refletor .getAllAndOverride<Role[]>(ROLES_KEY, [
            ctx.getHandler(),
            ctx.getClass()
        ])

        if(!requiredRoles) return true;

        const {user} = ctx.switchToHttp().getRequest();
        const rolesFilted = requiredRoles.filter((role) => role === user.role);

        return rolesFilted.length > 0;
    }
}
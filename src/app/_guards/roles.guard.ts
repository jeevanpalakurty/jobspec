import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { User } from '../_models/index';
import { RoleService } from '../_services/index';

@Injectable()
export class RolesGuard implements CanActivate {
     private currentUser: User;
    constructor(private roleService:RoleService, private router: Router) {
         this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
       if(this.currentUser && this.currentUser.role === 'employer') {
            return true;
        }
        return false;
    }
}

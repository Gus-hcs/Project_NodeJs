import { UsersService } from '../users/users.service';
export declare class AuthService {
    private usersService;
    validateUser(payload: any): void;
    constructor(usersService: UsersService);
    signIn(username: string, pass: string): Promise<any>;
}

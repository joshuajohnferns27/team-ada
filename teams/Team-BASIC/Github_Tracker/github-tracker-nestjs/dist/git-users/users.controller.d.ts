import { Users } from './users.entity';
import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getAllUsers(): Promise<Array<Users>>;
    findByusername(username: string): Promise<Users>;
    create(createUsers: Users): Promise<"User could not be added" | "User created successfully">;
    remove(username: string): Promise<void>;
}

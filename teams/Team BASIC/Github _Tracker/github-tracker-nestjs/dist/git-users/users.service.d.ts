import { Repository } from 'typeorm';
import { Users } from './users.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<Users>);
    getAllUsers(): Promise<Array<Users>>;
    findByusername(username: string): Promise<Users>;
    create(users: Users): Promise<Users>;
    delete(username: string): Promise<any>;
}

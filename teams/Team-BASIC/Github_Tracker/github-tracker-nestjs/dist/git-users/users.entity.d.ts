export declare class SUsers {
    email: string;
    password: string;
}
export declare class Users {
    email: string;
    username: string;
    firstname: string;
    lastname: string;
}
export declare class GitHistory {
    userId: string;
    users: Users;
    datetime: Date;
    violations: number;
    public_gist: string;
    public_repo: number;
}

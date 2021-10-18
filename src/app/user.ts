export class User {
    constructor (
        public userName: string,
        public user_followers: number,
        public user_following: number,
        public repositories: number,
        public url: string,
        public avatar_url:string,
        public login: string,

    ) {}
}

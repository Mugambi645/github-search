export class Repository {
    constructor(
        public repo_name: string,
        public repo_language: string,
        public repo_url: string,
        public repo_info: string,
        public created_at: Date
    ) {}
}

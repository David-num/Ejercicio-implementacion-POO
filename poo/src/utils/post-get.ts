import Repository from "./postgres-post-repository"




export default class PostGet {
  private readonly repository: Repository;
  constructor (repository: Repository){
   this.repository = repository;
  }

  public async get() {
    return await this.repository.getAll();
  }
}
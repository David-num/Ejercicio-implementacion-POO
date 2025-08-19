import Post from "./valid-post";
import PostRepository from "./postgres-post-repository";




export default class PostRegister {
  private readonly repository: PostRepository;
  constructor(repository: PostRepository) {
    this.repository = repository;
  }

  public async dele(id: number):
  Promise<void> {
    await this.repository.delete(id);
  }
}

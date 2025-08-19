import Post from "./valid-post";
import PostRepository from "./postgres-post-repository";




export default class PostRegister {
  private readonly repository: PostRepository;
  constructor(repository: PostRepository) {
    this.repository = repository;
  }

  public async edit(id: number,title: string, description: string, author: string):
  Promise<void> {
    const post = Post.create(title, description, author);
    await this.repository.update(id, post);
  }
}

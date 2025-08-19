import Post from "./valid-post";
import PostRepository from "./post-repository";




export default class PostRegister {
  private readonly repository: PostRepository;
  constructor(repository: PostRepository) {
    this.repository = repository;
  }

  public async run(title: string, description: string, author: string):
  Promise<void> {
    const post = Post.create(title, description, author);
    await this.repository.save(post);
  }
}

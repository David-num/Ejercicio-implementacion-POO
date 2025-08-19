import PostRepository from "./post-repository";
import Post from "./valid-post";




export default class InMemoryPostsRepository implements PostRepository {
  private posts: Array<{
    title: string,
    description: string,
    author: string
  }> = [];

  constructor() {
    this.posts = [];
  }

  public async save(post: Post): Promise<void> {
    const title = post.title.value;
    const description = post.description.value;
    const author = post.author.value;

    this.posts.push({
      title,
      description,
      author
    });
  }

}

import Post from "./valid-post";
import postgres from "postgres";




export default class PostRegister {
  public newPost: Post;
  constructor(
    title: string,
    description: string,
    author: string
  ) {
    this.newPost = Post.create(title, description, author);
  }
  
  public async run(post: Post): Promise<void> {

    try {
      const connectionString = "postgresql://postgres.edxdrjgaiwftvtpcyeii:"+
      "laOSUDvlWF4l937H@aws-0-us-east-1.pooler.supabase.com:6543/postgres"
      const sql = postgres(connectionString);

      const title = post.title.value;
      const description = post.description.value; 
      const author = post.author.value;

      await sql`INSERT INTO public.posts (title, description, author) VALUES (${title}, ${description}, ${author})`;
    } catch (error) {
      throw new Error("Failed to save post");
    }
  }
}

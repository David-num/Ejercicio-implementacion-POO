import Post from "./valid-post";
import postgres, { Sql } from "postgres";
import PostRepository from "./post-repository";




export default class PostgresPostsRepository implements PostRepository {
  private sql: Sql;

  constructor() {
    const connectionString = "postgresql://postgres.edxdrjgaiwftvtpcyeii:"+
    "laOSUDvlWF4l937H@aws-0-us-east-1.pooler.supabase.com:6543/postgres"
    this.sql = postgres(connectionString);
  }

  public async save(post: Post): Promise<void> {
    try {
      const title = post.title.value;
      const description = post.description.value; 
      const author = post.author.value;

      await this.sql`INSERT INTO public.post(title, description, author) VALUES (${title}, ${description}, ${author})`;
    } catch (error) {
      throw new Error("Failed to save post");
    }
  }


}
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

  public async getAll(): Promise<{id: any,
          title: any,
          description: any,
          author: any}[]>{
      try {
      const result = await this.sql`SELECT * FROM public.post`;
      const posts = result.map((row: any) => {
        return {
          id: row.id,
          title: row.title,
          description: row.description,
          author: row.author
        };
      });
      return posts
    } catch (error) {
      throw new Error("Failed to get post");
    }
  }

  public async update(postId: number, post:Post): Promise<void> {
    try {
      const title = post.title.value;
      const description = post.description.value; 
      const author = post.author.value;
      await this.sql`
        UPDATE public.post
        SET title = ${title}, description = ${description}, author = ${author}
        WHERE id = ${postId};
      `;
    } catch (error) {
      throw new Error("Failed to update post");
    }
  }
}


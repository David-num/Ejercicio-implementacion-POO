import Post from "./valid-post";




export default interface PostRepository {
  save(post: Post): Promise<void>;
}
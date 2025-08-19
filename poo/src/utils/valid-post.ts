import ValidPostTitle from "./valid-post-title";
import ValidPostDescription from "./valid-post-description";
import ValidPostAuthor from "./valid-post-author"; 




export default class ValidPost {
    public title: ValidPostTitle;
    public description: ValidPostDescription;
    public author: ValidPostAuthor;

  constructor(
    title: ValidPostTitle,
    description: ValidPostDescription,
    author: ValidPostAuthor
  ) {
    this.title = title;
    this.description = description;
    this.author = author;
  }

  public static create(
    title: string,
    description: string,
    author: string 
  ) {
    const post = new ValidPost(
      new ValidPostTitle(title),
      new ValidPostDescription(description),
      new ValidPostAuthor(author)
    )
    return post;
  }
}

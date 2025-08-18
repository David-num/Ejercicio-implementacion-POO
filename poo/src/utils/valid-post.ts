export default class ValidPost {
  constructor(
    public title: string,
    public description: string,
    public author: string
  ) {
    this.validate(title, description, author);
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
      title,
      description,
      author
    )
    return post;
  }

  private validate(
    title: string,
    description: string,
    author: string
  ) {
    this.validTitle(title);
    this.validDescription(description);
    this.validAuthor(author);
  }

  private validTitle(title: string): void {
    if (typeof title !== "string") {
      throw new Error("Invalid title format");
    }

    if (!(title.length > 0 && title.length <= 50)) {
      throw new Error("Invalid title length");
    }
  }

  private validDescription(description: string): void {
    if (typeof description !== "string") {
      throw new Error("Invalid description format");
    }

    if (!(description.length > 0 && description.length <= 300)) {
      throw new Error("Invalid description length");
    }
  }

  private validAuthor(author: string): void {
    if (typeof author !== "string") {
      throw new Error("Invalid author format");
    }

    if (!(author.length > 0 && author.length <= 30)) {
      throw new Error("Invalid author length");
    }
  }
}

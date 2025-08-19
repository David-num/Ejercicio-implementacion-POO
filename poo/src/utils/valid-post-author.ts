export default class ValidPostAuthor {
  public value: string;

  constructor(value: string) {
    this.valid(value);
    this.value = value;
  }

  private valid(author: string) {
    if (typeof author !== "string") {
      throw new Error("Invalid author format");
    }

    if (!(author.length > 0 && author.length <= 50)) {
      throw new Error("Invalid author length");
    }
  }
}
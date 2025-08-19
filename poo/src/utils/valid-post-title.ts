export default class ValidPostTitle {
  public value: string;

  constructor(value: string) {
    this.valid(value);
    this.value = value;
  }

  private valid(title: string) {
    if (typeof title !== "string") {
      throw new Error("Invalid title format");
    }

    if (!(title.length > 0 && title.length <= 50)) {
      throw new Error("Invalid title length");
    }
  }
}
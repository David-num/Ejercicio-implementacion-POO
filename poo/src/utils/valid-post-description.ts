export default class ValidPostDescription {
  public value: string;

  constructor(value: string) {
    this.valid(value);
    this.value = value;
  }

  private valid(description: string) {
    if (typeof description !== "string") {
      throw new Error("Invalid description format");
    }

    if (!(description.length > 0 && description.length <= 300)) {
      throw new Error("Invalid description length");
    }
  }
}
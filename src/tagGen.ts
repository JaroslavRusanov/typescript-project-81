class TagGen {
  constructor(
    public name: string,
    public attributes: { [key: string]: string } = {},
    public content: string = '',
  ) {}

  toString() {
    const isSelfClosing: boolean = ['br', 'img', 'input'].includes(this.name);
    const attributes = Object.entries(this.attributes)
      .map(([key, value]) => ` ${key}="${value}"`)
      .join('');

    if (isSelfClosing) {
      return (
        `<${this.name}${attributes}>`
      );
    }
    return (
      `<${this.name}${attributes}>${this.content}</${this.name}>`
    );
  }
}

export default TagGen;

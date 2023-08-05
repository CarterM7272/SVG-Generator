// Base class for shapes
class Shape {
  constructor(shapeColor, fontColor, text) {
    this.svgTag = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
    this.bgColor = shapeColor;
    this.textColor = fontColor;
    this.text = this.makeTextComponent(text);
  }

  makeTextComponent(text) {
    return `<text x="150" y="115" font-size="55" text-anchor="middle" fill="${this.textColor}">${text}</text>`;
  }

  draw() {
    throw new Error('You have to implement the method draw!');
  }

  render() {
    return `${this.svgTag}
      ${this.draw()}
      ${this.text}
    </svg>`;
  }
}

class Circle extends Shape {
  draw() {
    return `<circle cx="150" cy="100" r="80" fill="${this.bgColor}" />`;
  }
}

class Triangle extends Shape {
  draw() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.bgColor}" />`;
  }
}

class Square extends Shape {
  draw() {
    return `<rect x="90" y="40" width="120" height="120" fill="${this.bgColor}" />`;
  }
}

module.exports = { Circle, Triangle, Square };
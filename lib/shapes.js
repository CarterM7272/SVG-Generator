// Base class for shapes
class Shape {
  constructor(width, height, length) {
    this.width = width
    this.height = height
    this.length = length
  }
}

class Circle extends Shape {

}

class Triangle extends Shape {

}

class Square extends Shape {

}

module.exports = { Circle, Triangle, Square };

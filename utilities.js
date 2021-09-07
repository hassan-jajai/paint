class Utilities {
  static swap(object, a, b) {
    var temp = object[a];
    object[a] = object[b];
    object[b] = temp;
  }

  static clamp(x, min, max) {
    return Math.max(min, Math.min(max, x));
  }

  static getMousePosition(event, element) {
    var boundingRect = element.getBoundingClientRect();
    return {
      x: event.clientX - boundingRect.left,
      y: event.clientY - boundingRect.top,
    };
  }
}

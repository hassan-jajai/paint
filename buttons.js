var Buttons = function () {
  "use strict";

  return function (element, buttonNames, initialActiveIndex, changeCallback) {
    var elements = [];
    var activeElement = elements[initialActiveIndex];
    var refresh = function () {
      for (var i = 0; i < elements.length; ++i) {
        if (elements[i] === activeElement) {
          elements[i].className = "button-selected";
        } else {
          elements[i].className = "button-unselected";
        }
      }
    };
    this.setIndex = function (index) {
      activeElement = elements[index];
      refresh();
    };
    for (var i = 0; i < buttonNames.length; ++i) {
      var button = document.createElement("div");
      button.innerHTML = buttonNames[i];
      element.appendChild(button);
      elements.push(button);
    }
    for (var i = 0; i < elements.length; ++i) {
      (function () {
        //create closure to store index
        var index = i;
        var clickedElement = elements[i];

        var onSelect = function (event) {
          event.preventDefault();

          if (activeElement !== clickedElement) {
            activeElement = clickedElement;

            changeCallback(index);

            refresh();
          }
        };
        elements[i].addEventListener("click", onSelect);
        elements[i].addEventListener("touchstart", onSelect);
      })();
    }
    refresh();
  };
};

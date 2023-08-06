function selectAllTypes(typeName) {
  const el = document.querySelectorAll(`[${typeName}]`);
  return el;
}
function scaleElement(el, size) {
  console.log("event started");
  test = el.children[0];
  test.style.transform = `scale(${size})`;
}

function scaleBackElement(el, size) {
  test = el.children[0];
  test.style.transform = "scale(1)";
}

function moveElement()

function hoverAction(dataAttribute, selectedElement, size) {
  const element = document.querySelectorAll(
    `[${dataAttribute}="${selectedElement}"]`
  );
  // console.log(element);
  element.forEach((e) => {
    console.log(e);

    e.addEventListener("mouseover", () => {
      scaleElement(e, size);
    });

    e.addEventListener("mouseout", () => {
      scaleBackElement(e);
    });
  });
}

function moveAction(dataAttribute, selectedElement, destinatedElement, value) {
  const element = document.querySelectorAll(
    `[${dataAttribute}="${selectedElement}"]`
  );
  element.forEach((e) => {
    e.addEventListener("click", () => {
      moveElement(e, destinatedElement, value)
    });
  });
}

getAllELementsPresentation(1.2);

function getTheOffsetOfElement(dataAttribute, selectedElement) {
  const element = document.querySelectorAll(
    `[${dataAttribute}="${selectedElement}"]`
  );
  console.log(element[0]);
  const offsetLeft = window.getComputedStyle(element[0]).transform;
  return offsetLeft;
}
function getAllELementsPresentation(sizeChangesForScaling) {
  const placeholder = "data-presentation";
  getData = selectAllTypes(placeholder);
  getData.forEach((element) => {
    const dataValue = element.getAttribute(placeholder);
    if (dataValue == "button-carrousel") {
      hoverAction(placeholder, dataValue, sizeChangesForScaling);
      moveAction(placeholder, dataValue, destinatedElement, value);
    }
    if (dataValue == "wrapper") {
      const testvalue = getTheOffsetOfElement(placeholder, dataValue);
      if (testvalue == "matrix(1, 0, 0, 1, 200, 0)") {
        console.log("true");
      } else {
        console.log("not true");
      }
    }
  });
}

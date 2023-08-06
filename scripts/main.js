let currentIndex = 1;
function selectAllTypes(typeName) {
  const el = document.querySelectorAll(`[${typeName}]`);
  return el;
}
function scaleElement(el, size) {
  test = el.children[0];
  test.style.transform = `scale(${size})`;
}

function scaleBackElement(el) {
  test = el.children[0];
  test.style.transform = "scale(1)";
}
function moveElement(clickedElement, destinatedElement) {
  // I need to continue here
  console.log(clickedElement);
  if (clickedElement.classList.contains("left-button")) {
    console.log(currentIndex);

    console.log(currentIndex);
    let convertString = currentIndex.toString();
    convertVar = "." + destinatedElement + convertString;
    let data = document.querySelector(convertVar);
    if (data.classList.contains("wrapper2")) {
      console.log("hello");
      data.style.transform = "translateX(100vw)";
      console.log(currentIndex);
      currentIndex--;
    }
    if (data.classList.contains("wrapper3")) {
      console.log("hello");
      data.style.transform = "translateX(100vw)";
      console.log(currentIndex);
      currentIndex--;
    }
  }

  if (clickedElement.classList.contains("right-button")) {
    if (currentIndex < 3) {
      currentIndex++;
    }
    let convertString = currentIndex.toString();
    convertVar = "." + destinatedElement + convertString;
    console.log(convertVar);
    let data = document.querySelector(convertVar);

    console.log(data);

    if (data.classList.contains("wrapper2")) {
      console.log("hello");
      data.style.transform = "translateX(0)";
      console.log(currentIndex);
    }
    if (data.classList.contains("wrapper3")) {
      console.log("hello");
      data.style.transform = "translateX(0)";
      console.log(currentIndex);
    }
  }
}

function hoverAction(dataAttribute, selectedElement, size) {
  const element = document.querySelectorAll(
    `[${dataAttribute}="${selectedElement}"]`
  );
  console.log(element);
  console.log("hoveraction");
  element.forEach((e) => {
    e.addEventListener("mouseover", () => {
      scaleElement(e, size);
    });

    e.addEventListener("mouseout", () => {
      scaleBackElement(e);
    });
  });
}

function moveAction(dataAttribute, selectedElement, destinatedElement) {
  const element = document.querySelectorAll(
    `[${dataAttribute}="${selectedElement}"]`
  );
  console.log(element);
  console.log("move-action");
  element.forEach((e) => {
    e.addEventListener("click", () => {
      // const frame1 = "1";
      // const frame2 = "2";
      // const result2 = "." + destinatedElement + frame2;
      const convertToElement = document.querySelector(`.${destinatedElement}`);
      moveElement(e, destinatedElement);
    });
  });
}

function getAllELementsPresentation(sizeChangesForScaling, destinatedElement) {
  const placeholder = "data-presentation";
  let dataValue = [];
  getData = selectAllTypes(placeholder);
  getData.forEach((element) => {
    dataValue.push(element.getAttribute(placeholder));
  });
  console.log(dataValue.find((item) => item === "button-carrousel"));
  const test2 = dataValue.find((item) => item === "button-carrousel");
  if (test2 == "button-carrousel") {
    hoverAction(placeholder, test2, sizeChangesForScaling);
    moveAction(placeholder, test2, destinatedElement);
  }
}

getAllELementsPresentation(1.2, "wrapper");

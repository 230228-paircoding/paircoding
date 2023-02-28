let root = document.getElementById("root");
    let firstDiv = document.createElement("div");
    root.appendChild(firstDiv);
    let secondDiv = document.createElement("div");
    root.appendChild(secondDiv);
    let thirdDiv = document.createElement("div");
    root.appendChild(thirdDiv);

    let titleDiv = document.createElement("div");
    firstDiv.appendChild(titleDiv);
    let barDiv = document.createElement("div");
    firstDiv.appendChild(barDiv);

    let articleDiv = document.createElement("div");
    secondDiv.appendChild(articleDiv);

    let circleDiv = document.createElement("div");
    thirdDiv.appendChild(circleDiv);

    function makeDiv(tagName) {

    }

    const trainingData = {
      titleText: "Lorem Ipsum",
      paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      color: ["#1E1E1E", "#FFFFFF"],
    }
    function title() {
      titleDiv.style.width = "147px";
      titleDiv.style.height = "29px";
      titleDiv.style.fontSize = "24px";
      titleDiv.style.color = trainingData.color[1];
      titleDiv.style.position = "absolute";
      titleDiv.style.left = "141px";
      titleDiv.style.top = "301px";
      titleDiv.innerText = trainingData.titleText;
    }

    function article() {
      articleDiv.style.width = "295px";
      articleDiv.style.height = "186px";
      articleDiv.style.fontSize = "12px";
      articleDiv.style.color = trainingData.color[1];
      articleDiv.style.position = "absolute";
      articleDiv.style.left = "67px";
      articleDiv.style.top = "364px";
      articleDiv.style.textAlign = "justify"
      articleDiv.innerText = trainingData.paragraph;
    }

    function circle() {
      circleDiv.style.width = "82px";
      circleDiv.style.height = "82px";
      circleDiv.style.position = "absolute";
      circleDiv.style.backgroundColor = trainingData.color[1];
      circleDiv.style.left = "174px";
      circleDiv.style.top = "673px";
      circleDiv.style.borderRadius = "41px";
    }

    function bar() {
      barDiv.style.width = "199px";
      barDiv.style.height = "2px";
      barDiv.style.position = "absolute";
      barDiv.style.left = "115px";
      barDiv.style.top = "340px";
      barDiv.style.backgroundColor = trainingData.color[1];

    }

    function rootCss() {
      root.style.width = "430px";
      root.style.height = "932px";
      root.style.display = "flex";
      root.style.flexDirection = "column";
      root.style.backgroundColor = trainingData.color[0];
    }

    function first() {
      firstDiv.style.width = "430px";
      firstDiv.style.height = "340px";
    }

    function second() {
      secondDiv.style.width = "430px";
      secondDiv.style.height = "210px";
    }

    function third() {
      thirdDiv.style.width = "430px";
      thirdDiv.style.height = "382px";
    }

    rootCss();
    first();
    title();
    bar();
    second();
    article();
    third();
    circle();

    let counter = 1;

    circleDiv.addEventListener("click", function() {
      counter++;
      if (counter % 2 === 1) {
        root.style.backgroundColor = trainingData.color[1];
        titleDiv.style.color = trainingData.color[0];
        barDiv.style.backgroundColor = trainingData.color[0];
        articleDiv.style.color = trainingData.color[0];
        circleDiv.style.backgroundColor = trainingData.color[0];
      }
      else {
        root.style.backgroundColor = trainingData.color[0];
        titleDiv.style.color = trainingData.color[1];
        barDiv.style.backgroundColor = trainingData.color[1];
        articleDiv.style.color = trainingData.color[1];
        circleDiv.style.backgroundColor = trainingData.color[1];
      }

    })
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const redText = document.createElement("p");
redText.textContent = "Hi, I'm red.";
redText.style.color = "red";

const blueText = document.createElement("h3");
blueText.textContent = "I'm a blue h3";
blueText.style.color = "blue";

const border = document.createElement("div");
border.style.cssText = `
padding: 5px; 
background-color: pink; 
border-color: black; 
border-style: solid;
`;

const borderHeader = document.createElement("h3");
borderHeader.textContent = "I'm in a div";


const borderText = document.createElement("p");
borderText.textContent = "ME TOO!";



container.appendChild(content);
container.appendChild(redText);
container.appendChild(blueText);
border.appendChild(borderHeader);
border.appendChild(borderText);
container.appendChild(border);


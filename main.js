console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
let node1 = document.getElementById("node1");
node1.textContent = "I used the getElementById(node1) method to access this";
// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
let node2 = document.getElementsByClassName("node2");
for (let node of node2) {
node.textContent = "I used the getElementByClassName(node2) method to access this"
}
// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
let h3s = document.getElementsByTagName("h3");
for (let h3 of h3s) {
h3.textContent = "I used the getElementByTagName(h3) method to access all of these";
}

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"
let pEle = document.createElement("p");
pEle.textContent = "This node was created using the createElement() method";

// TODO: Append the created node to the parent node using the element.appendChild() method
let parent = document.querySelector("#parent");
parent.appendChild(pEle);
// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
let aEle = document.createElement("a");
aEle.textContent = "I am a <a> tag";
// BONUS: Add a link href to the <a>
aEle.href = "https://google.com";
aEle.target = "_blank"
// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/
parent.insertBefore(aEle, pEle)
// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
let container = document.getElementById("exercise-container3");
let oldChild = document.getElementById("N1");
let newChild = document.createElement("p")
newChild.textContent = "New Child Node";
container.replaceChild(newChild, oldChild);
// TODO: Remove the "New Child Node"
oldChild.remove()

/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];


// TODO: Create an unordered list element
let ul = document.createElement("ul")
// TODO: Iterate over the array values, and create a list item element for each
list.forEach((item) => {
let li = document.createElement("li");
li.textContent = item;
ul.appendChild(li);
});
let container4 = document.getElementById("container");
// TODO: Append the new list items to the unordered list element

// TODO: Append the unordered list to the `div#container` under exercise 4 
container4.appendChild(ul);
/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
let btn = document.getElementById("btn");
let newDiv = document.createElement("div");
let screen = document.getElementById("root")
btn.addEventListener("click", show);
function show() {
newDiv.textContent = "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user";
root.appendChild(newDiv);
closeBtn.textContent = "close modal";
newDiv.appendChild(closeBtn);
}
let closeBtn = document.createElement("button");
function hide() {
newDiv.remove();
closeBtn.remove();
}
closeBtn.addEventListener("click", hide)
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality

// 1. define a global variable named "count" and assign 0 as a value
/*
 2.
 add an action to the "add" button which will add a <div class="element">
 to the bottom of the "elements" section,
 and then will put a number inside it (the 'count' variable);
 after that the 'count' variable should be increased by 1
 */
/*
 3.
 add an action to the "remove" button which will remove
 the very top <div class="element"> from the "elements" section;
 the 'count' variable should NOT change!
 */
/*
 4.
 go back to your functions that add/remove elements and extend them
 with a functionality of displaying a <div class="info"> in the "output" section;
 the div's text should say what just happened
 (e.g. "adding element 3", "removing element 0")
 */
/*
 5.
 go back to your functions that removes elements and extend it
 with a functionality of displaying a <div class="error"> in the "output" section;
 saying "There is nothing to remove!"
 */

var count = 0;
var deleted = 0;

var addButton = document.querySelector(".add");
var removeButton = document.querySelector(".remove");
var elementsDiv = document.querySelector(".elements");
var outputDiv = document.querySelector(".output");

var addElement = function() {
  elementsDiv.innerHTML += '<div class="element"></div>';
  elementsDiv.childNodes[elementsDiv.childNodes.length - 1].innerHTML = count;
  count++;
  outputDiv.insertAdjacentHTML('beforeend', '<div class="info">Add element number ' + count + '.</div>');
};

var removeElement = function() {
    if (elementsDiv.querySelector('.element') == null) {
        outputDiv.insertAdjacentHTML('beforeend', '<div class="error">There is nothing to remove!</div>');
    } else {
        elementsDiv.querySelector('.element').remove();
        outputDiv.insertAdjacentHTML('beforeend', '<div class="info">Remove element number ' + deleted + '.</div>');
        deleted++;
    }
}

addButton.addEventListener('click', addElement);
removeButton.addEventListener('click', removeElement);






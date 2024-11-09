var listItems = document.getElementsByTagName('li');                   // All <li> elements

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var heading = document.querySelector('h2');                        // h2 element
var headingText = heading.firstChild.nodeValue;                    // h2 text
var totalItems = listItems.length;                                 // No. of <li> elements
var newHeading =  headingText + '<span>' + totalItems + '</span>'; // Content


/* WRITE YOUR CODE BELOW */
var item1 = "fresh figs";
var item2 = "kale";
var item3 = "honey";

// Part1. Hint: Use the listItems object to iterate through the elements of the list
for (var i = 0; i < totalItems; i++) {
    if (listItems[i].textContent === item1 || listItems[i].textContent === item2 || listItems[i].textContent === item3) {
        listItems[i].className = 'bluwe'; 
    }
}

// Part2. Hint: Use the heading and newHeading to show the number of items in the shopping list
heading.innerHTML = newHeading;

var newInput = document.getElementById('new')
var addItemButton = document.getElementById('addItem')
var itemsToDoDiv = document.getElementById('itemsToDo')
var doneItemsDiv = document.getElementById('doneItems')

var itemsToDoHTML = localStorage.getItem('itemsToDo')
if (itemsToDoHTML) {
	itemsToDoDiv.innerHTML = itemsToDoHTML
}

addItemButton.onclick = addItem

function addItem() {
	var item = newInput.value

	if (item) {
		itemsToDoDiv.innerHTML = itemsToDoDiv.innerHTML + '<div>' + item + '<button onclick="markCompleted(event)">Mark completed</button></div>'
		newInput.value = ''
		localStorage.setItem('itemsToDo', itemsToDoDiv.innerHTML)
	}
}

function markCompleted(event) {
	doneItemsDiv.innerHTML = doneItemsDiv.innerHTML + '<div>' + event.target.previousSibling.textContent + '</div>'
	event.target.parentElement.remove()
	localStorage.setItem('itemsToDo', itemsToDoDiv.innerHTML)
}

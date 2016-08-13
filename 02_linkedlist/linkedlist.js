/* ------------- LINKED LIST CLASS ------------- */

function LinkedList() {
	this.head = null;
	this.tail = null;
}

LinkedList.prototype.addToHead = function(value) {
	// If the list is empty
	if( this.head === null ){
		this.head = new Node(value);
		this.tail = this.head;
	}
	else{
		this.head = new Node(value, null, this.head);
		this.head.next.previous = this.head;
	}
}

LinkedList.prototype.removeHead = function() {

	var nodeValue = this.head;

	if( this.head ){
		nodeValue = this.head.value;
		this.head = this.head.next;
		if( this.head )
			this.head.previous = null;
		else
			this.tail = null;
	}
	
	return nodeValue;
}

LinkedList.prototype.addToTail = function(value) {
	// If the list is empty
	if( this.tail === null ){
		this.addToHead(value);
	}
	else {
		this.tail.next = new Node(value, this.tail, null);
		this.tail = this.tail.next;
	}
}



LinkedList.prototype.removeTail = function() {

	var nodeValue = this.tail;

	if( this.tail ){
		nodeValue = this.tail.value;
		this.tail = this.tail.previous;
		if( this.tail )
			this.tail.next = null;
		else
			this.head = null;
	}
	
	return nodeValue;
}

LinkedList.prototype.search = function(searchParam) {

	var searchPtr = this.head;

	var searchFunc;

	if( typeof searchParam === 'function' )
		searchFunc = searchParam;
	else{
		searchFunc = function(currentVal){
			return currentVal === searchParam;
		}
	}

	while(searchPtr !== null){

		if( searchFunc(searchPtr.value) )
			return searchPtr.value;
		else
			searchPtr = searchPtr.next;
	}

	return null;
}



/* ------------- NODE CLASS ------------- */

function Node(value, prev, next) {
	this.value = value;
	this.previous = prev || null;
	this.next = next || null;
	
}
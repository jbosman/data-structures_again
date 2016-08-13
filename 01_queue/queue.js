function Queue(){
	this.queue = [];
	this.head = 0;
	this.tail = 0;
}

Queue.prototype.enqueue = function (val){
	this.queue[this.tail] = val;
	this.tail++;
}

Queue.prototype.dequeue = function (){
	var val;
	if( this.head !== this.tail ){
		val = this.queue[this.head];
		this.head++
		return val;
	}
}

Queue.prototype.size = function (){
	return this.tail - this.head;
}
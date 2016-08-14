function BinarySearchTree(value, left, right){
	this.value = value;
	this.left = left || null;
	this.right = right || null;
}

BinarySearchTree.prototype.insert = function(newValue) {
	
	if( newValue < this.value ){
		if( this.left )
			this.left.insert(newValue);
		else
			this.left = new BinarySearchTree(newValue);
	}
	else{
		if( this.right )
			this.right.insert(newValue)
		else
			this.right = new BinarySearchTree(newValue);
	}
	
} /* End of insert */

BinarySearchTree.prototype.contains = function() {

} /* End of contains */

BinarySearchTree.prototype.depthFirstForEach = function() {

} /* End of depthFirstForEach */

BinarySearchTree.prototype.breadthFirstForEach = function() {

} /* End of breadthFirstForEach */

BinarySearchTree.prototype.size = function() {

	
} /* End of size */


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

BinarySearchTree.prototype.contains = function(value) {


	if( this.value === value ) return true;
	else if( !this.left && !this.right )
		return false;
	else if( this.left && !this.right )
		return this.left.contains(value);
	else if( !this.left && this.right )
		return this.right.contains(value);
	else 
		return this.left.contains(value) || this.right.contains(value);


} /* End of contains */

BinarySearchTree.prototype.depthFirstForEach = function(func, methodArg) {

	var method = methodArg || "in-order";

	if( !this.left && !this.right ){
		func(this.value);
	}
	else if( this.left && !this.right ){
		if( method === "pre-order" ) func(this.value);
		this.left.depthFirstForEach(func, method);
		if( method !== "pre-order" ) func(this.value);
	}
	else if( !this.left && this.right ){
		if( method !== "post-order" ) func(this.value);
		this.right.depthFirstForEach(func, method);
		if( method === "post-order" ) func(this.value);
	}
	else{
		if( method === "pre-order" )  func(this.value);
		this.left.depthFirstForEach(func, method);
		if( method === "in-order" )   func(this.value);
		this.right.depthFirstForEach(func, method);
		if( method === "post-order" ) func(this.value);
	}


	
	// switch(method){
	// 	case "in-order":
	// 		if( !this.left && !this.right ){
	// 			func(this.value);
	// 		}
	// 		else if( this.left && !this.right ){
	// 			this.left.depthFirstForEach(func, method);
	// 			func(this.value);
	// 		}
	// 		else if( !this.left && this.right ){
	// 			func(this.value);
	// 			this.right.depthFirstForEach(func, method);
	// 		}
	// 		else{
	// 			this.left.depthFirstForEach(func, method);
	// 			func(this.value);
	// 			this.right.depthFirstForEach(func, method);
	// 		}
	// 		break;
	// 	case "pre-order":
	// 		if( !this.left && !this.right ){
	// 			func(this.value);
	// 		}
	// 		else if( this.left && !this.right ){
	// 			func(this.value);
	// 			this.left.depthFirstForEach(func, method);
	// 		}
	// 		else if( !this.left && this.right ){
	// 			func(this.value);
	// 			this.right.depthFirstForEach(func, method);
	// 		}
	// 		else{
	// 			func(this.value);
	// 			this.left.depthFirstForEach(func, method);
	// 			this.right.depthFirstForEach(func, method);
	// 		}
	// 		break;
	// 	case "post-order":
	// 		if( !this.left && !this.right ){
	// 			func(this.value);
	// 		}
	// 		else if( this.left && !this.right ){
	// 			this.left.depthFirstForEach(func, method);
	// 			func(this.value);
	// 		}
	// 		else if( !this.left && this.right ){
	// 			this.right.depthFirstForEach(func, method);
	// 			func(this.value);
	// 		}
	// 		else{
	// 			this.left.depthFirstForEach(func, method);
	// 			this.right.depthFirstForEach(func, method);
	// 			func(this.value);
	// 		}
	// 		break;
	// 	default :
	// 		return "No such depthFirst method";
	// }

} /* End of depthFirstForEach */

BinarySearchTree.prototype.breadthFirstForEach = function() {

} /* End of breadthFirstForEach */

BinarySearchTree.prototype.size = function() {
	
	// if( !this.left && !this.right )
	// 	return 1;
	// else if( this.left && !this.right )
	// 	return 1 + this.left.size();
	// else if( !this.left && this.right )
	// 	return 1 + this.right.size();
	// else
	// 	return 1 + this.left.size() + this.right.size();

	var count = 1;

	if( this.left )
		return count += this.left.size();
	if( this.right )
		return count += this.right.size();

	return count;



} /* End of size */


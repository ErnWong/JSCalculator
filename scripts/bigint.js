define( ["config"], function( config ) {

	function BigInt( value ) {
		if ( !(this instanceof BigInt) ) {
			
		}
	}

	var prototype = BigInt.prototype;
	prototype._digits = [];
	prototype._base = config.BigInt.base;
	prototype.valueOf = valOf;

	prototype.add = function ( x ) {
		x = BigInt( x );
		if ( x
	}

	function valOf() {
		
	}

} );

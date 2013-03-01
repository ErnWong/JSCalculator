define( ["config"], function( config ) {

	function BigInt( value ) {
		if ( !(this instanceof BigInt) ) {
			
		}
	}

	var prototype = BigInt.prototype;
	prototype._digits = [];
	prototype._base = config.BigInt.base;
	prototype.valueOf = valOf;

	function min(x, y, fn) {
		return x<y?(fn(),x) : y;
	};
	var push = Array.prototype.push,
		ZERO = BigInt(0);//or new BigInt([0])

	prototype.add = function add( x ) {

		x = BigInt( x );
		//if ( x //... do stuff like
		if ( x.isEqualTo( ZERO ) ) {
			return new BigInt( this._digits );
		}
		if ( this.isEqualTo( ZERO ) ) {
			return new BigInt( x._digits );
		}

		var a = this._digits,
			b = x._digits,
			s = [],
			carry = 0;
			i = 0,
			len = min( a.length, b.length, function() {
				var temp = a;
				b = a,
				a = temp;
			} ),
			base = prototype._base;
			sum = 0;

		for ( ; i < len; i++ ) {
			sum = a[i] + b[i] + carry;
			s[i] = sum % base;
			carry = (sum - s[i]) / base;
		}
		s[len] = carry + a[len] || 0;

		//if ( a.length>len+1 ) {
		push.apply(s,a.slice(len+1));
		//}

		return new BigInt( s );

	}

	prototype.subtract = function subtract( x ) {

		x = BigInt( x );

	}

	function valOf() {
		
	}

} );

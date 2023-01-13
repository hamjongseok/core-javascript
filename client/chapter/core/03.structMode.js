/* ---------------------------------------------------------------------- */
/* Strict Mode                                                            */
/* ---------------------------------------------------------------------- */

type = "zero";

let type1 = { type : "one"};

let type2 = { type : "two"};

function getType() {
	console.log(this.type);
}

getType();
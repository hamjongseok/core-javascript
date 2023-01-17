
const cache = {}


const memo = (key,value) => {
	cache[key] = value;
}

memo()
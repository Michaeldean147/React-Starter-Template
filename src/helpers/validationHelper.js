export default function(key, value){
	const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

	switch(key) {
		case 'userEmail':
			return value && emailRegex.test(value)
		case 'userName':
			return value && value.length <= 10
		default:
			return true
	}
}
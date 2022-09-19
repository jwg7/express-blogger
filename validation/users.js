
const validateUserData = (userData) => {
console.log(userData);
console.log(typeof(userData.email));

if (userData.email === undefined || typeof(userData.email) !== 'string') {
    return {
        isValid: false,
        message: 'Email is required and it must be a string.'
    }
} 

if (userData.firstName === undefined || typeof(userData.firstName) !== 'string') {
    return {
        isValid: false,
        message: 'First name is required and it must be a string.'
    }
} 

 if (userData.lastName === undefined || typeof(userData.lastName) !== 'string') {
    return {
        isValid: false,
        message: 'Last name is required and it must be a string.'

    }
} 

if (userData.age !== undefined && typeof(userData.age) !== "number") {
return {
    isValid: false,
    message: 'Age must be a number.'
}
} 

if (userData.favoriteFoods !== undefined && Array.isArray(userData.favoriteFoods) && userData.favoriteFoods.length > 0) {
// Array.isArray() will check to see if the variable is an array 

let isFavoriteFoodStrings = true;

for ( let i = 0; i < userData.favoriteFoods.length; i++) {
    if (typeof(userData.favoriteFoods[i]) !== 'string') {
        isFavoriteFoodStrings = false;
    }
}

console.log("favoriteFoods isValid: ", isFavoriteFoodStrings);

if(isFavoriteFoodStrings === false) {
    return {
        isValid: false
    }
}

return {
    isValid: isFavoriteFoodStrings
}
} 

return {
    isValid: true
}

}


module.exports = {
    validateUserData
}
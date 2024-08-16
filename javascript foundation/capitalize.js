//5. Capitalize
function capitalizeName(name) {
    return name && name[0] === name[0].toLowerCase()
        ? name[0].toUpperCase() + name.slice(1)
        : name;
}

// Example 
const userName = "Shaikh";  
console.log(capitalizeName(userName));

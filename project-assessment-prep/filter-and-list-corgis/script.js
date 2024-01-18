/* 
Using the given dogs array, create a variable named "corgis" whose value is an array containing only the dogs of breed Corgi - use the filter method to get this done. 
When a user clicks the button "Corgis!!",
Use the corgis variable to add only the dogs with the breed "Corgi" to the Corgi Container - List the dogs' names in the Corgi Container
*/

// Use these dogs:
const dogs = [
    { name: "Cheddar", breed: "Corgi" },
    { name: "Toto", breed: "Terrier" },
    { name: "Susan", breed: "Corgi" },
];

let corgis = dogs.filter((dog) => dog.breed === "Corgi");

let btn = document.getElementById("corgi-button");
btn.addEventListener('click', function() {
    corgis.forEach(function(corgi) {
    let li = document.createElement('li');
    li.textContent = corgi.name;
    let h3 = document.querySelector("h3");
    h3.appendChild(li);
    });
});

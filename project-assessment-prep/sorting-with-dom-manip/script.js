/* 
First create a function that will render the people array to the DOM. List each person - "{name} is {age} years old."
Check the HTML file to see what element you should be appending them to.
Then write the code that will allow the user to click the button and
sort the people by age in ascending order.
 */

const peopleArr = [
    { id: 1, name: 'Maria', age: 32 },
    { id: 2, name: 'Ryan', age: 37 },
    { id: 3, name: 'Zoe', age: 11 },
    { id: 5, name: 'Adette', age: 9 },
    { id: 6, name: 'Gio', age: 15 }
  ];

  function sortedByAge(array) {
    array.sort(function(a, b) {
      return a.age - b.age;
    });
    return array;
  };

  document.addEventListener('DOMContentLoaded', function() {
    renderPeople(peopleArr);
  });
  
  function renderPeople(array) {
    let ul = document.getElementById('list');
    ul.innerHTML = '';
    array.forEach(function(person) {
        let li = document.createElement('li');
        li.textContent = `${person.name} is ${person.age} years old.`;
        ul.appendChild(li);
    });
  };

  let sortBtn = document.getElementById('sortButton');
  sortBtn.addEventListener('click', function() {
    let newArray = sortedByAge(peopleArr);
    console.log(newArray);
    renderPeople(newArray);
  });
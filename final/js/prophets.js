const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  
const prophets = jsonObject['prophets'];

for (let i = 0; i < prophets.length; i++ ) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let birthdate = document.createElement('li')
    let image = document.createElement('img');
    let place = document.createElement('li');
    let list = document.createElement('ul');
    
    h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
    birthdate.textContent = 'Birthdate: ' + prophets[i].birthdate;
    place.textContent = 'Birthplace: ' + prophets[i].birthplace;
    image.setAttribute('src', prophets[i].imageurl);
    image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + '-' + prophets[i].order);
    card.appendChild(h2);
    card.appendChild(list);
    list.appendChild(birthdate);
    list.appendChild(place);
    list.appendChild(image);
    
    document.querySelector('div.cards').appendChild(card);
}

});
const requestURL = '../final/js/test.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject)
        const towns = jsonObject['towns'];

        createCard(0);
        createCard(1);
        createCard(2);
        createCard(3);
        createCard(4);
        createCard(5);
        createCard(6);


function createCard(index){
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let h5 = document.createElement('h5');

    h2.textContent = towns[index].name;
    h5.textContent = towns[index].motto;

    card.appendChild(h2);
    card.appendChild(h5);

    let portrait = document.createElement('img');

    portrait.setAttribute('src', towns[index].photo);
    portrait.setAttribute('alt', towns[index].name);
    portrait.setAttribute('class', 'img' + index);

    card.appendChild(portrait);

    let founded = document.createElement('p');
    let population = document.createElement('p');
    let rainFall = document.createElement('p');

    founded.textContent = "URL: " + towns[index].yearFounded;
    population.textContent = "Contact: " + towns[index].currentPopulation;
    

    founded.setAttribute('class', 'founded');
    population.setAttribute('class', 'pop');
    rainFall.setAttribute('class', 'rainFall')

    card.appendChild(founded);
    card.appendChild(population);
    card.appendChild(rainFall);

    card.setAttribute('class', 'section' + index)
    document.querySelector('div.cards').appendChild(card);
}

      
    });

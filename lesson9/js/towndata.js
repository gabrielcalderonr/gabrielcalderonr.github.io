const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject)
        const towns = jsonObject['towns'];

        createCard(6);
        createCard(0);
        createCard(2);


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

    founded.textContent = "Founded: " + towns[index].yearFounded;
    population.textContent = "Population: " + towns[index].currentPopulation;
    rainFall.textContent = "Average Rainfall: " + towns[index].averageRainfall;

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

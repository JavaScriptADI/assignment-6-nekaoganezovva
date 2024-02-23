// #1
const cities = getCities();
const citiesTable = document.getElementById('cities-table');

cities.forEach(({ name, population }) => {
    const tr = document.createElement('tr');
    tr.innerHTML = (`<td>${name}</td> <td>${population}</td>`)
    citiesTable.querySelector('tbody').appendChild(tr);
})

// #2
let sorted = false;
const header = citiesTable.querySelectorAll('th')[1];
const headerIndicator = header.querySelector('span');

header.onclick = () => {
    sorted = !sorted;
    if (sorted) {
        headerIndicator.innerText = '▼';
    } else {
        headerIndicator.innerText = '▲';
    }
    citiesTable.querySelector('tbody').innerHTML = '';
    cities.sort((c1, c2) => {
        if (sorted) return c2.population - c1.population; return c1.population - c2.population;
    })
        .forEach(({ name, population }) => {
            const tr = document.createElement('tr');
            tr.innerHTML = (`<td>${name}</td>
            <td>${population}</td>`)
            citiesTable.querySelector('tbody').appendChild(tr);
        })
}

// extra challenge - meh :)
let clickCount = 0;

function resetTable() {
    citiesTable.querySelector('tbody').innerHTML = '';
    cities.forEach(({ name, population }) => {
        const tr = document.createElement('tr');
        tr.innerHTML = (`<td>${name}</td> <td>${population}</td>`);
        citiesTable.querySelector('tbody').appendChild(tr);
    })
}

resetTable();

header.onclick = () => {
    clickCount++;

    if (clickCount === 3) {
        clickCount = 0;
        resetTable();
        headerIndicator.innerText = '';
        return;
    }

    const sorted = clickCount % 2 === 0;
    headerIndicator.innerText = sorted ? '▼' : '▲';

    cities.sort((c1, c2) =>
        (sorted ? c2.population - c1.population : c1.population - c2.population)
    )
        .forEach(({ name, population }) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${name}</td><td>${population}</td>`;
            citiesTable.querySelector('tbody').appendChild(tr);
        });
}








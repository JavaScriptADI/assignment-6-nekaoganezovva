
const cities = getCities(); 
const citiesTable = document.getElementById('cities-table'); 
let sorted = false;

cities.forEach(({ name, population }) => { 
    const tr = document.createElement('tr');

    tr.innerHTML = (`<td>${name}</td> 
    <td>${population}</td>`) 
    citiesTable.querySelector('tbody').appendChild(tr); 
})

const header = citiesTable.querySelectorAll('th')[1];
const headerIndicator = header.querySelector('span');

console.log(header);
header.onclick = () => {
    sorted = !sorted;
    if (sorted) {
        headerIndicator.innerText = '▼';
    } else {
        headerIndicator.innerText = '▲';
    }
    citiesTable.querySelector('tbody').innerHTML = '';
    cities.sort((c1, c2) => {
        if (sorted)
            return c2.population - c1.population;
        return c1.population - c2.population;
    })
        .forEach(({ name, population }) => {
            const tr = document.createElement('tr');

            tr.innerHTML = (`<td>${name}</td>
        <td>${population}</td>`)
            citiesTable.querySelector('tbody').appendChild(tr);
        })

}
const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1b735de2d9498d3d0675925bcbc1933f&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=1b735de2d9498d3d0675925bcbc1933f&query=";

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("search_bar");

returnMovies(APILINK);

async function returnMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  main.innerHTML = ''; // Clear the main content before adding new movies

  data.results.forEach(element => {
    const div_card = document.createElement('div');
    div_card.classList.add('card');

    const div_row = document.createElement('div');
    div_row.classList.add('row');

    const div_column = document.createElement('div');
    div_column.classList.add('column');

    const image = document.createElement('img');
    image.classList.add('thumbnail');

    const title = document.createElement('h3');

    title.textContent = element.title;
    image.src = `${IMG_PATH}${element.poster_path}`;

    div_card.appendChild(image);
    div_card.appendChild(title);
    div_column.appendChild(div_card);
    div_row.appendChild(div_column);

    main.appendChild(div_row);
  });
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const searchItem = search.value;
  if (searchItem) {
    await returnMovies(SEARCHAPI + searchItem);
    search.value = "";
  }
});
const postMovies = [
  {
    title: "Black Adam",
    imdb: 6.9,
    image: "img/black-adam.webp",
  },
  {
    title: "R.I.P.D 2: Rise of the Dammed",
    imdb: 6.9,
    image: "img/rise-of-the-damned.jfif",
  },
  {
    title: "Black Panther: Wakanda Forever",
    imdb: 6.8,
    image: "img/capa-filme-pantera-negra-wakanda-para-sempre-7484d-large.jpg",
  },
  {
    title: "Smile",
    imdb: 6.8,
    image: "img/capa-filme-sorria-b7680-large.jpg",
  },
  {
    title: "Sniper: The White Raven",
    imdb: 7.4,
    image:
      "img/MV5BNWMwOTgyNmMtYWNlYS00NGIyLTllOWYtZTVlNzU3N2ViZWQ5XkEyXkFqcGdeQX_3tNdh9j.webp",
  },
  {
    title: "Terrifier 2",
    imdb: 7,
    image: "img/2015334.jpg",
  },
  {
    title: "Paradise City",
    imdb: 5.9,
    image: "img/Screenshot_1.png",
  },
  {
    title: "Madieval",
    imdb: 7.2,
    image: "img/medieval-163788.webp",
  },
  {
    title: "Jeepers Creepets Reborn",
    imdb: 5.8,
    image: "img/Olhos-Famintos-Renascimento-2022-4.jpg",
  },
  {
    title: "Enola Holmes 2",
    imdb: 7.7,
    image: "img/4006947.jpg",
  },
  {
    title: "Emily the Criminal",
    imdb: 6.9,
    image: "img/3491292.jpg",
  },
  {
    title: "Tad the Lost Explorer and the Elemerald Tablet",
    imdb: 7.8,
    image: "img/TAD-THE-EXPLORER-poster.jpg",
  },
  {
    title: "Lost Bullet 2",
    imdb: 7,
    image: "img/bala-perdida-2-poster.jpg",
  },
  {
    title: "On the Line",
    imdb: 6.6,
    image: "img/3KxRYXBsKROhhQUjycKPOxktCAy.jpg",
  },
  {
    title: "Fall",
    imdb: 7.3,
    image: "img/68SX7S9lisehbuZLNX4CrVMxV1v.webp",
  },
  {
    title: "MexZombies",
    imdb: 7.2,
    image: "img/85zufUxhD97k2s5Bu2u101Qd8Sg.jpg",
  },
  {
    title: "The Lair",
    imdb: 5.9,
    image: "img/transferir.jfif",
  },
  {
    title: "Disenchanted",
    imdb: 7.6,
    image: "img/IMDB-4.webp",
  },
  {
    title: "All Quiet on the Western Front",
    imdb: 7.8,
    image:
      "img/MV5BNWMwOTgyNmMtYWNlYS00NGIyLTllOWYtZTVlNzU3N2ViZWQ5XkEyXkFqcGdeQX_3tNdh9j.webp",
  },
  {
    title: "Margaux",
    imdb: 6.8,
    image: "img/3P0QGQXQ7vN9Aj1O8thVJdFPirG.jpg",
  },
];
const mainContainer = document.getElementById("container-main");
const newDiv = document.createElement("div");
mainContainer.appendChild(newDiv);
const newSection = document.createElement("section");

newSection.classList.add("ms-5");
newSection.classList.add("mt-4");
newSection.classList.add("mb-4");
newSection.classList.add("d-flex");

newSection.innerHTML = postMovies.map((movies) => {
  return `
    <div class="card-movie">
    <img class="d-block mx-auto" src="${movies.image}" alt="">
    <div class="d-flex">
    <h3 class="ms-2 mt-4">${movies.title}</h3> 
    <span class="ms-5 text-warning mt-4" style="height: 33px; width: 38px;">${movies.imdb}</span>
</div>
</div>`;
});
newDiv.appendChild(newSection);


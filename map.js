const goats = [
  {
    src : 'assets/goat1.jpg',
    alt : 'A marvelous goat',
    class : 'goat'
  },
  {
    src : 'assets/goat2.jpeg',
    alt : 'A marvelous goat',
    class : 'goat'
  },
  {
    src : 'assets/goat3.jpg',
    alt : 'A marvelous goat',
    class : 'goat'
  },
  {
    src : 'assets/goat4.jpg',
    alt : 'A marvelous goat',
    class : 'goat'
  },
  {
    src : 'assets/goat5.jpg',
    alt : 'A marvelous goat',
    class : 'goat'
  },
  {
    src : 'assets/goat6.jpg',
    alt : 'A marvelous goat',
    class : 'goat'
  },
  {
    src : 'assets/goat7.jpg',
    alt : 'A marvelous goat',
    class : 'goat'
  },
  {
    src : 'assets/goat8.jpg',
    alt : 'A marvelous goat',
    class : 'goat'
  },
  {
    src : 'assets/goat9.jpg',
    alt : 'A marvelous goat',
    class : 'goatImgBis'
  },
  {
    src : 'assets/goat10.jpeg',
    alt : 'A marvelous goat',
    class : 'goat'
  },
  {
    src : 'assets/goat11.jpg',
    alt : 'A marvelous goat',
    class : 'goat'
  },
]

goats.map((goat) => {
  const displayGoat = document.getElementById('displayGoat')
  const newGoat = document.createElement('div')
  displayGoat.appendChild(newGoat).innerHTML=`<div class="goatContainer"> <img class=${goat.class} src=${goat.src} alt=${goat.alt}/> <p class="caption"> A marvelous goat </p> </div>`

})
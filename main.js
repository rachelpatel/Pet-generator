var pets = ['dog', 'cat', 'bunny', 'fish', 'hamster', 'bird', 'mouse', 'snake', 'turtle', 'hermit crab', 'lizard','horse', 'pony', 'chicken', 'rooster','duck', 'donkey', 'sheep', 'hedgehog', 'spider','frog', 'ferret', 'rat', 'snail', 'ant farm', 'plant', 'rock', 'pig']

var images = ['photos/dog.jpeg','photos/Cat.jpeg','photos/bunny.jpeg','photos/fish.jpeg', 'photos/hamster.jpeg', 'photos/bird.jpeg', 'photos/mouse.jpeg', 'photos/snake.jpeg','photos/turtle.jpeg','photos/hermit.jpeg','photos/lizard.jpeg','photos/horse.jpg','photos/pony.jpeg','photos/chicken.jpg','photos/rooster.jpeg','photos/duck.jpeg','photos/donkey.jpeg','photos/sheep.jpeg','photos/hedgehog.jpeg','photos/spider.jpeg','photos/frog.jpeg','photos/Ferret.jpg','photos/rat.jpeg',
'photos/Snail.jpeg','photos/ants.jpg','photos/cacti.jpeg','photos/Rock.jpg','photos/Pig.jpeg'];


function randomNumber() {
  var randomDecimal = Math.random();
  var random = randomDecimal * pets.length;
  var final = Math.floor(random);
  return final;
}

function randomPet(final){
  // var randomDecimal = Math.random();
  // var random = randomDecimal * pets.length;
  // var final = Math.floor(random);
  return pets[final];
}

function randomPic(final){
  // var randomDecimal = Math.random();
  // var random = randomDecimal * images.length;
  // var final = Math.floor(random);
  var petImage = images[final]
  return petImage;
}


var button = $('.button');
var selectedPet = $('.message');
var image = $('.image');

button.on("click", getPet);

function getPet(petImage){
  var final = randomNumber();
  var pet = randomPet(final);
  var pic = randomPic(final);


  // var pet = randomPet();
  selectedPet.text(`you got a ${pet}`);
  // var pic = randomPic();
  // image.html(`<img src ='photos/dog.jpeg'>`);
  image.html(`<img src =${pic}>`);
}

import './style.css'

const getSecImg = document.querySelector('#sec-img');
const getDog = document.querySelector('#random-dog');
const getCat = document.querySelector('#random-cat');
const getRandom = document.querySelector('#random');
const getImg = document.querySelector('#animal-random');

getDog.addEventListener('click', async () => {
  const response = await fetch('https://dog.ceo/api/breeds/image/random');
  const data = await response.json();
  getImg.style.display = 'inline-block';
  getImg.src = data.message;
})

getCat.addEventListener('click', async () => {
  const response = await fetch('https://aws.random.cat/meow');
  const data = await response.json();
  getImg.style.display = 'inline-block';
  getImg.src = data.file;
})

const numRandom = () => {
 return  Math.ceil(Math.random() * 2)
};
// console.log(numRandom());

getRandom.addEventListener('click', async () => {
  //essa foi a solução que pensei para alternar entre gatos e cães
  const response =  numRandom() === 1 ? await fetch('https://aws.random.cat/meow') : 
  await fetch('https://dog.ceo/api/breeds/image/random');
  // const response = await Promise.race([fetch('https://aws.random.cat/meow'), fetch('https://dog.ceo/api/breeds/image/random')]) // essa foi a solução proposta pelo exercício, entretanto como retorna apenas o primeiro, acaba retornando gato praticamente em todas as vezes;
  const data = await response.json();
  getImg.style.display = 'inline-block';
  getImg.src = data.file || data.message;
})
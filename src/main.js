import Swal from 'sweetalert2';
import './style.css'

const getBtn = document.querySelector('#btn-random');
const getImg = document.querySelector('img');
const getH2 = document.querySelector('h2');

// console.log(getImg);
// const algo = await fetch(`https://www.superheroapi.com/api.php/174995495207775/${randomNum}`);

const randomNum = () => Math.ceil(Math.random() * 731)

const getNewHero = async() => {
  try {
    const algo = await fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${randomNum()}.json`);
    const data= await algo.json();
    getImg.src = data.images.md
    getH2.innerHTML = data.name
    console.log(data)
  } catch (error) {
    Swal.fire({
      title: 'Erro! Super Herói em missão',
      text: 'Houve um problema para localizar o Super herói',
      icon: 'error',
      confirmButtonText: 'Entendi'
    })
  }
}

getBtn.addEventListener('click', getNewHero)

const sayHi=()=>{
    console.log('Я учу JavaScript!');
};
sayHi();

const img = document.querySelector('.images');
console.log(img)

const newFoto =()=>{
    img.src="../assets/images/img2.jpg";
}  
const oldFoto =()=>{
    img.src="../assets/images/img1.jpg"
}
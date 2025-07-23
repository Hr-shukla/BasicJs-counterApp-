const countValue = document.querySelector('.b2');
const increment = () =>{
    let value =parseInt(countValue.innerText);
    value +=1;
    countValue.innerText=value;
};

const decrement = () =>{
             let value =parseInt(countValue.innerText);
    value -=1;
    countValue.innerText=value;
};


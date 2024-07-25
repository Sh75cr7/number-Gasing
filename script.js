let p1input=document.querySelector('.p1input');
let p1Btn=document.querySelector('.p1Btn');
let box1=document.querySelector('.box1')
let error=document.querySelector('.error')
let p2input=document.querySelector('.p2input');
let p2Btn=document.querySelector('.p2Btn');
let box2=document.querySelector('.box2')
let result=document.querySelector('.result')
let attem=document.querySelector('.attem')
let attemp=5


p1Btn.addEventListener('click',function(){
   if(p1input.value==''){
    error.innerHTML='please valid input value is requerd'
   }
   else if(p1input.value >=10){
    error.innerHTML='plese write less then 10' 
}
else{
    error.innerHTML=''
    box1.style.display='none'
    box2.style.display='block'
}

})
p2Btn.addEventListener('click',function(){
    attemp--;
    attem.innerHTML= attemp;
   let p1Value=p1input.value;
   let p2Value=p2input.value;
   if(p1Value==p2Value){
    result.innerHTML='player two win '
   }
   else if(attemp==0){
      result.innerHTML='player one win '
   }
  p2input.value=''
})

let score={win:0,tie:0,lose:0};
scoreModify();
function playermove(parametre){
 const computermove=computermoves();
if(parametre==='rock'){
 if (computermove==='rock')
 score.tie++;
 else if (computermove==='paper')
 score.lose++;
 else
 score.win++;
}
if(parametre==='paper'){
 if (computermove==='rock')
 score.win++;
 else if (computermove==='paper')
 score.tie++;
 else
 score.lose++;
}
if(parametre==='scissors'){
 if (computermove==='rock')
 score.lose++;
 else if (computermove==='paper')
 score.win++;
 else
 score.tie++;
}
scoreModify();
const computerselect=Math.random();
}
 function computermoves(){
  const computerselect=Math.random();
  let computermove='';
  if(computerselect<=0&&computerselect<1/3)
  computermove='rock';
  else if(computerselect>=1/3&&computerselect<2/3)
  computermove='paper';
  else if (computerselect>=2/3&&computerselect<1)
  computermove='scissors';
return computermove;
}
function scoreModify(){
 document.querySelector('.js-score')
.innerHTML=`wins=${score.win} ties=${score.tie}; loses=${score.lose};`
}  
function graphique1(){
    const computermove=computermoves();
    let finalGraphe1=document.querySelector('.graphique-result1');   
    if(computermove==='rock')
    finalGraphe1.innerText="👊🏻";
    else if (computermove==='paper')
    finalGraphe1.innerText="🖐🏻";
    else
    finalGraphe1.innerText="✌🏻";
}
function graphique2(variable){
    let finalGraphe2=document.querySelector('.graphique-result2');   
    if (variable==='rock')
    finalGraphe2.innerText="👊🏻";
else if(variable==='paper')
    finalGraphe2.innerText="🖐🏻";
    else
    finalGraphe2.innerText="✌🏻";
}
let isAutoplaying=false;
let playing;
let A=0;
function autoPlay(){
    changeText();
if (!isAutoplaying){   
 playing=setInterval( function()
 {const computermove=computermoves();
    playermove(computermove);
    graphique2(computermove);
    graphique1();
     }, 1000);  
     isAutoplaying=true;
    }
     else {
        clearInterval(playing);
        isAutoplaying=false;
     }
     function changeText(){
        if (document.querySelector('.autoPlay').innerHTML==='Auto Play')
        document.querySelector('.autoPlay').innerHTML='stop it';
      else 
      document.querySelector('.autoPlay').innerHTML='Auto Play';
     }
}
const allphrs=["It's better to teach a person how to do something than to do that something for them.",
"Anything that's easy or has no difficulty; something that is a certainty.",
" It's useless to worry about things that  already happened and cannot be changed.",
"Typically said to indicate that any further investigation into a situation may lead to harm.",
" Something that occurs too early before preparations are ready. Starting too soon.",
"A boxing term. Also often used to refer to inappropriate words, or comments that are too personal.",
"A situation that has gotten way more serious or interesting due to recent complexities or developments.",
"It's useless to worry about things that  already happened and cannot be changed.",
"Don't judge someone or something only by the outward appearance.",
" Spending time with another to strengthen the relationship."]

let starttime;
let endtime;

const phrsdis=document.querySelector("#display");
const tarea=document.querySelector("textarea");
const btn=document.querySelector("button");
const mesdis=document.querySelector("#d2");

btn.addEventListener("click",function(){
let buttontext=this.innerText;
if(buttontext==="Start") {
tarea.disabled=false;
mesdis.style.display="none";
btn.innerText="Done";
tarea.value="";
playgame();
}
else if(buttontext==="Done")
{
  tarea.disabled=true;
  btn.innerText="Start";
 mesdis.style.display="block";
  endgame();
}
})

function playgame(){
let randomphrse=Math.floor(Math.random()*allphrs.length);
const newdate=new Date();
starttime=newdate.getTime();
phrsdis.textContent=allphrs[randomphrse];
phrsdis.style.cssText="background-color:#e9dcf5;color:black;font-size:120%;width:80%;border:1px grey solid;border-radius:5px;margin:2% auto;padding:2%;box-shadow:1px 1px grey;"
}

function endgame(){
const newdate2=new Date();
endtime=newdate2.getTime();
const finaltime=((endtime-starttime)/1000).toFixed(1);
const stng=tarea.value;
const word=totalword(stng);
const speed=Math.round((word/finaltime)*60);
let message= `You can type ${speed} words per minute`;
if (stng===phrsdis.textContent) {
  mesdis.textContent= `${message}.congratulation`;
  mesdis.style.cssText="background-color:#32CD32; color:white;font-size:120%;width:80%;border:1px grey solid;margin:2% auto;padding:2%;box-shadow:1px 1px grey;"
}
else if (stng!==phrsdis.textContent){
  mesdis.textContent= `The phrase was wrong`;
  mesdis.style.cssText="background-color:#DC143C;color:white;font-size:120%;width:80%;border:1px grey solid;margin:2% auto;padding:2%;box-shadow:1px 1px grey;"
}
}

function totalword(ele) {
const response=ele.split(" ").length;
return response;
}

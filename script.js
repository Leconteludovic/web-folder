// const title = document.querySelector('.changeType');
// const txt = ["Microscopy, Optique, Analyse image, Fablab"]

// function typewriter(word, index){

//     if(index < word.length) {
//         setTimeout(() => {
//             title.innerHTML += `<span>${word[index]}</span>`;
//             typewriter(txt, index + 1);
//         }, 50);
//     }
// }

// setTimeout(() => {
//     typewriter(txt, 0)
// }, 900);
// var index=0;
// var xiaBiao= 0;
// var huan = true;

// setInterval(function(){


   
//     if(huan){

   
//         text.innerHTML = txt[xiaBiao].slice(0,++index);
//         console.log(index);
//     }
//     else{


//         text.innerHTML = txt[xiaBiao].slice(0,index--);
//         console.log(index);
//     }

//     if(index==txt[xiaBiao].length+3)
//     {


//         huan = false;
//     }
//     else if(index<0)
//     {


//         index = 0;
//         huan = true;
//         xiaBiao++;
//         if(xiaBiao>=txt.length)
//         {


//             xiaBiao=0; 
//         }
//     }

// },200)
const text = document.querySelector('.changeType');
        const txt  =["Microscopy","Optique","Analyse d'image", "Fablab"]; 
        
        var index=0;
        var xiaBiao= 0;
        var huan = true;
     
        setInterval(function(){
            if(huan){
       
                text.innerHTML = txt[xiaBiao].slice(0,++index);    
            }
            else{
                text.innerHTML = txt[xiaBiao].slice(0,index--);               
            }
            if(index==txt[xiaBiao].length+1)
            {   
                huan = false;
            }
            else if(index<0)
            {
     
     
                index = 0;
                huan = true;
                xiaBiao++;
                if(xiaBiao>=txt.length)
                {
     
     
                    xiaBiao=0; 
                }
            }

        },200)


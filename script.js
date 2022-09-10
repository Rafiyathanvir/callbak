/*var res=fetch("https://restcountries.com/v2/all")
res.then((data)=>data.json())
.then((value)=>console.log(value));
value.then((name)=>console.log(name.value))*/
 
/*var counter=10;
const mainfunction=(counter)=>{
setTimeout( ()=>{

    setTimeout(()=>{
        counter--;
        if(counter>=0){
            var id=document.getElementById("count")
            id.innerHTML=counter;
 
    if(counter===0){
        id.innerHTML="Happy Independance Day";
    }
    
})

},1000)
}
mainfunction(counter);*/



var counter=10;


const main=(counter)=>{
    setTimeout(()=>{
        counter--;
            if(counter>=0){
                var id=document.getElementById("count");

                id.innerHTML=counter;
            }
                           
   

            setTimeout(()=>{
                counter--;
                if(counter>=0){
                var id=document.getElementById("count");

                id.innerHTML=counter;}

                setTimeout(()=>{
                    counter--;
                    if(counter>=0){
                    var id=document.getElementById("count");
    
                    id.innerHTML=counter;}


                    setTimeout(()=>{
                        counter--;
                        if(counter>=0){
                        var id=document.getElementById("count");
        
                        id.innerHTML=counter;}
    
                        setTimeout(()=>{
                            counter--;
                            if(counter>=0){
                            var id=document.getElementById("count");
            
                            id.innerHTML=counter;}
        
                            setTimeout(()=>{
                                counter--;
                                if(counter>=0){
                                var id=document.getElementById("count");
                
                                id.innerHTML=counter;}
            
                                setTimeout(()=>{
                                    counter--;
                                    if(counter>=0){
                                    var id=document.getElementById("count");
                    
                                    id.innerHTML=counter;}
                
                                    setTimeout(()=>{
                                        counter--;
                                        if(counter>=0){
                                        var id=document.getElementById("count");
                        
                                        id.innerHTML=counter;}
                    
                                        setTimeout(()=>{
                                            counter--;
                                            if(counter>=0){
                                            var id=document.getElementById("count");
                            
                                            id.innerHTML=counter;}
                        
                                            setTimeout(()=>{
                                                counter--;
                                                if(counter>=0){
                                                var id=document.getElementById("count");
                                
                                                id.innerHTML=counter;}
                                              

                                                if(counter===0){
                                                    id.innerHTML="Happy Independance Day";
                                                }
                                                
                                            
                                                },1000)
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
            },1000)
            
        },1000)

}
main(counter)
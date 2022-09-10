
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

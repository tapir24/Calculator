function load(){
    var button=document.querySelectorAll('#calculator span');
    console.log(button);
    var operator=['+','-','x','÷'];
    var screen=document.querySelector('#screen');
    var btnvalue;
    var input;

    for(var i=0; i<button.length;i++){
        var pointexist=false;
        button[i].addEventListener('click',function(){
            btnvalue=this.innerhtml;
            input=screen.innerHTML;
            switch(btnvalue){
                case 'C':
                    screen.innerHTML="";
                    pointexist=false;
                    console.log("button c click")
                    break;
                case '=':
                    var lastchar=input[input.length-1];
                    input=input.replace("x",'*').replace("÷",'/');
                    if(operators.includes(lastchar)||lastchar=='.'){
                        break;
                    }  
                    else{
                        screen.innerHTML=eval(input);
                    }
                    pointexist=false;
                    break;
            }
        });
    }
}
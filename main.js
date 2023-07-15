let adding  = document.getElementById('adding');
console.log(adding)
//adding.addEventListener('click',function add(){
    var act = 0 ,  b = 0;
    act = f.ddd.value;
    act = act + '/' ;
    
    b= act.charAt(act.length-1);
    if(b == '+' ){
        //f.ddd.value = act.substring(0,act.length-1);
        f.ddd.value +='+';
    }
//});
// function add(){
//     var act =0 ,  b = 0;
//     act = f.ddd.value;
//     b= act.charAt(act.length-1);
//     if(b== '+' || b == '-' || b== '/' || b == '*'){
//         f.ddd.value = act.substring(0,act.length-1);
//         f.ddd.value+='+';
//     }else{
//         f.add.value+='+';

//     }
// }

function sub(){
    var act =0;
    var b = 0;
    act = f.ddd.value ;
    b= act.charAt(act.length-1);
    if(b== '+' || b == '-' || b== '/' || b == '*'){
        f.ddd.value = act.substring(0,act.length-1);
        f.ddd.value+='-';
    }else{
        f.add.value+='-';
    }
}


function mul(){
    var act =0;
    var b = 0;
    act = f.ddd.value;
    b= act.charAt(act.length-1);
    if(b== '+' || b == '-' || b== '/' || b == '*'){
        f.ddd.value = act.substring(0,act.length-1);
        f.ddd.value+='*';
    }else{
        f.add.value+='*';
    }
}


function div(){
    var act =0;
    var b = 0;
    act = f.ddd.value;
    b= act.charAt(act.length-1);
    if(b== '+' || b == '-' || b== '/' || b == '*'){
        f.ddd.value = act.substring(0,act.length-1);
        f.ddd.value+='/';
    }else{
        f.add.value+='/';
    }
}
console.log(
)
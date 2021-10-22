let i = 1;

setTimeout(function(){
    for(i = 1; ;i++) {
        if(i%2==0) {
            console.log(i);
        }
    }

},2000);
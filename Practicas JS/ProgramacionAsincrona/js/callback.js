function cuadradoCallBack(value,callback){
    setTimeout(()=>{
        callback(value,value*value);
    },0|Math.random()*100);
}

cuadradoCallBack(0,(value,resultado)=>{
    console.log("inicia CallBack");
    console.log(`Callback: ${value}, ${resultado}`);
    cuadradoCallBack(1,(value,resultado)=>{
        console.log(`Callback: ${value}, ${resultado}`);
        cuadradoCallBack(2,(value,resultado)=>{
            console.log(`Callback: ${value}, ${resultado}`);
            cuadradoCallBack(3,(value,resultado)=>{
                console.log(`Callback: ${value}, ${resultado}`);
                cuadradoCallBack(4,(value,resultado)=>{
                    console.log(`Callback: ${value}, ${resultado}`);
                    cuadradoCallBack(5,(value,resultado)=>{
                        console.log(`Callback: ${value}, ${resultado}`);
                    });
                });
            });
        });
    });
});
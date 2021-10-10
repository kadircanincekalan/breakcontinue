console.log('>> app.js is running');
//[1--100]yazdir
//5 katlarını yazdir

for (let i = 0; i <=  100; i++){
    if (i===42)break;
    if(i % 5 == 0){
        continue
    }else{
        console.log(i);
    }
}
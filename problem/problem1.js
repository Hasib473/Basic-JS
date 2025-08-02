let seat=20;
for(let i=0; i<=seat; i+=1){

    if(i%3===0 || i%5===0){
        console.log('row'+i+'- premium Row');
    }

    else{
        console.log('row'+i+'- local Row');
    }
}
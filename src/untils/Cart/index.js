 const storeProduct=(pt,id)=>{
     console.log(id);
     const ct=[]
 const pf=localStorage.getItem('cart')
 if(pf){
    let a = JSON.parse(pf)
    a.forEach(element => {

        ct.push(element);
    });
console.log(a);
    const samePd=ct.find((item)=> {
        const pdID = Object.keys(item)
        console.log(pdID[0]);
       return (pdID);
    })
 }else{
     ct.push(pt)
     localStorage.setItem('cart',JSON.stringify(ct))
 }
 console.log(ct);
}

const setQnt=()=>{
    const allPd=localStorage.getItem('cart')
    if(allPd){
        // console.log(JSON.parse(allPd));
    }
}

export{
    storeProduct,
    setQnt
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
export const getApiByID = async ()=>{
  

    const response =await window.fetch(`https://www.superheroapi.com/api.php/5330015607041138/search/${getRandomInt(1,200)}`);
    if(!response.ok){
        throw new Error("Estamos teniendo problemas")}
    else{
        return response.json() 
        
    }
       
}

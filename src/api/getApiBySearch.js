export const searchHero = async (name)=>{
  

    const response =await window.fetch(`https://www.superheroapi.com/api.php/5330015607041138/search/${name}`);
    if(!response.ok){
        throw new Error("Estamos teniendo problemas")}
    else{
        return response.json() 
        
    }
       
}

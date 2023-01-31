// const getImagenPromesa = () => {
//   const promesa = new Promise( (res, rej ) => {
//     res("https://www.google.com.ar")
//   })
//   return promesa
// }

// getImagenPromesa().then(console.log)

const getImg = async() => {

    try{
      const apiKey = "CRyZGXAcVXF0bvaWi4Uc9xaxCD2ogLlN";
      const resp = await fetch (`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    
      const {data}= await resp.json();
    
      const { url } = data.images.original.url; 
    
      const img = document.createElement("img")
      img.src = url;
    
      document.body.append(img)
    
      console.log(data)
      
    }catch (error){
      // manejo del error 
      console.error(error)
    }
  
  }
  getImg();
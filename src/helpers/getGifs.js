export const getGifs = async(category)=>{
    const apiKey= "fp3oB1JW0hZPV6NyI4R21hiY8thPeKDW&q"
    const url=`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}=${encodeURI(category)}&limit=10`

    const resp=  await fetch(url);
   
    const {data} = await resp.json();

    

  


     const gifs= data.map(img => {
         return{
             id: img.id,
             title: img.title,
             url: img.images.downsized_medium.url
         }
     })

     return gifs;


}
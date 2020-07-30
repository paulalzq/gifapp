

export const getGifs = async( category ) => {

    // const urlR = 'https://api.giphy.com/v1/gifs/trending&api_key=vQ7cVmYpXEKP0FWzkuGqA7T3g4htHqVZ';
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=30&api_key=vQ7cVmYpXEKP0FWzkuGqA7T3g4htHqVZ`;
    const response = await fetch( url );
    const { data } = await response.json();
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    
    return gifs;
}
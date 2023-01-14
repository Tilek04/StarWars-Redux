const SWAPI__ROOT = 'https://swapi.dev/api/';
const SWAPI__PEAOPLE = 'people'


export const getApiResource = async(url) => {


    try {
        const res = await fetch(url);
        if(!res.ok) {
  console.error( 'ERRORRRR', res.status);
  return false;
        }
       return await res.json(); 
    } catch (error) {
        console.error('ERROR', error.massege)
        return false
    }

 

}
// getApiResource(SWAPI__ROOT+SWAPI__PEAOPLE)
//  .then(body => console.log(body))

// const body = getApiResource( SWAPI__ROOT+SWAPI__PEAOPLE+1)

(async() => {
    const body = await getApiResource( SWAPI__ROOT+SWAPI__PEAOPLE)
    console.log(body);
})()
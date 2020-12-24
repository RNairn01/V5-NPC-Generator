export function getRandomName() {
     const getResponse = async () => {      
        const url = "https://randomuser.me/api/?inc=name&noinfo&nat=us,ie,fr,gb,au,ca,de,fi"; 
         try {
             const response = await fetch(url);
             if(response.ok) {
                 const jsonResponse = await response.json();
                 return jsonResponse;
             }
             throw new Error('Request Failed!');
         } catch(error) {
             console.log(error);
         }
        

     };

     const getName = async () => {
        let nameData = await getResponse();
        document.getElementById('npc-name').value = `${nameData["results"][0]["name"]["first"]} ${nameData["results"][0]["name"]["last"]}`;
    }

    getName();
};
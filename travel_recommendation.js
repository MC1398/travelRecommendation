const search = document.getElementById('search');
const clear = document.getElementById('clear');
const reco = document.getElementById('reco');


function recoResults() {
    const destination = document.getElementById('destination').value.toLowerCase();
    console.log(destination)
    let finalDestination = ''
    
    if(destination == 'beach' || destination == 'beaches'){
        finalDestination = 'beaches'
    } else if(destination == 'temple' || destination == 'temples') {
        finalDestination = 'temples'
    } else {
        finalDestination = 'countries'
    };

    console.log(finalDestination)
    
    fetch('./travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {           
            console.log(data.beaches[0])
            console.log(finalDestination)
            console.log(data.finalDestination[0])
            // if(finalDestination == 'beaches' || finalDestination == 'temples'){
            //     reco.innerHTML = `${data.finalDestination[0].name}`


                
                
            // } else {

            // }
            
        })
        

}

search.addEventListener('click', recoResults)
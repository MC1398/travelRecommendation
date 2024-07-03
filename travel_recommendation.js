const search = document.getElementById('search');
const clear = document.getElementById('clear');
const reco = document.getElementById('reco');
const input = document.getElementById('destination');


function recoResults() {
    const destination = input.value.toLowerCase();
    
    let finalDestination = ''
    
    if(destination == 'beach' || destination == 'beaches'){
        finalDestination = 'beaches'
    } else if(destination == 'temple' || destination == 'temples') {
        finalDestination = 'temples'
    } else {
        finalDestination = 'countries'
    };

    
    fetch('./travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            
            if(finalDestination == 'beaches'){
                reco.innerHTML = `<figure><img src="${data.beaches[0].imageUrl}" width="600" height="270">
                <figcaption><b>${data.beaches[0].name}</b> <br> ${data.beaches[0].description}</figcaption></figure> <br>
                <figure><img src="${data.beaches[1].imageUrl}" width="600" height="270">
                <figcaption><b>${data.beaches[1].name}</b> <br> ${data.beaches[1].description}</figcaption></figure>`
                                
            } else  if(finalDestination == 'temples'){ 
                reco.innerHTML = `<figure><img src="${data.temples[0].imageUrl}" width="600" height="270">
                <figcaption><b>${data.temples[0].name}</b> <br> ${data.temples[0].description}</figcaption></figure> <br>
                <figure><img src="${data.temples[1].imageUrl}" width="600" height="270">
                <figcaption><b>${data.temples[1].name}</b> <br> ${data.temples[1].description}</figcaption></figure>`

            } else {
                reco.innerHTML = `<figure><img src="${data.countries[0].cities[0].imageUrl}" width="600" height="270">
                <figcaption><b>${data.countries[0].cities[0].name}</b> <br> ${data.countries[0].cities[0].description}</figcaption></figure> <br>
                <figure><img src="${data.countries[0].cities[1].imageUrl}" width="600" height="270">
                <figcaption><b>${data.countries[0].cities[1].name}</b> <br> ${data.countries[0].cities[1].description}</figcaption></figure>`
            }            
        })        
};

function clearResult() {
    reco.innerHTML = '';
    input.value = '';
}

search.addEventListener('click', recoResults);
clear.addEventListener('click', clearResult)
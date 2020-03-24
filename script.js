function main(){
    getRandomPics();
}

function getRandomPics(){
    $('#breed-form').submit(e =>{
        e.preventDefault();
        $('.results').removeClass('hidden');

        let breed = e.target.breed.value;
        
        fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(response => response.json())
        .then(responseJSON => checkResponse(responseJSON))
        
    })
}

function checkResponse(input){
    if (input.status != 'success'){
        alert(`Sorry, we don't have any pictures of that one. Try a different breed!`);
    } else {
        displayResults(input);
    }
}

function displayResults(input){
    const html = input.message;

    $('.results').html(`<img src="${html}" class="picture">`);
}

$(main);
const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    displayPhone(phones);
}

const displayPhone = phones => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent='';

    // condition for show all button
    const seeAllPhnContainer= document.getElementById('see-all-phn-container');

    if(phones.length > 12){
        seeAllPhnContainer.classList.remove('hidden');
    }
    else{
        seeAllPhnContainer.classList.add('hidden');
    }

    phones= phones.slice(0, 12); //only show 12 phones
    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.classList = 'card p-4 bg-base-100 shadow-xl';
        phoneDiv.innerHTML = `
        <figure class="px-10 pt-10">
            <img src="${phone.image}" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title">${phone.phone_name}</h2>
            <div class="card-actions">
                <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
    `;
    phoneContainer.appendChild(phoneDiv);
    });
    toggleLoadingSpinner(false);
}

const searchBtn= ()=>{
    toggleLoadingSpinner(true);
    const searchField= document.getElementById('search-field');
    const searchText= searchField.value;
    loadPhone(searchText); 
   
}

const toggleLoadingSpinner= (isLoading) =>{
    const loadingSpinner= document.getElementById('loading-spinner');
    if(isLoading){
        loadingSpinner.classList.remove('hidden');
    }
    else{
        loadingSpinner.classList.add('hidden');
    }

}

loadPhone();

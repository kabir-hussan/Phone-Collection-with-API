const loadPhone = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await res.json();
    const phones = data.data;
    displayPhone(phones);

}

const displayPhone = phones => {

    const phoneContainer = document.getElementById('phone-container');
    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.classList = 'card w-96 bg-base-100 shadow-xl';
        phoneDiv.innerHTML = `
        <figure class="px-10 pt-10">
            <img src="${phone.image}" alt="Shoes"class="rounded-xl" />
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


}

loadPhone();
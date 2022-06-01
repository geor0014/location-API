require("./bootstrap");

const countriesContainer = document.getElementById("container");

const renderCountry = function (data) {
    const template = `
                    <div class="w-full md:w-1/2 xl:w-1/3 px-4 ">
                <div class="bg-white rounded-lg overflow-hidden mb-10">
                    <img src="${data.flag}" alt="image"
                        class="w-full" />
                    <h2 class="px-10 py-3 text-gray-700 font-bold text-3xl">${
                        data.name
                    }</h2>
                    <h2 class="px-10 text-gray-500 font-bold text-xl">${
                        data.region
                    }</h2>

                    <div class="p-8 sm:p-9 md:p-7 xl:p-5 text-center">
                        <div class="flex items-center justify-between mt-2 mx-6">
                            <h3 class="text-gray-700 font-bold text-lg -ml-3 ">Native Name</h3>
                            <h3 class="flex text-gray-700 font-bold">
                                ${data.nativeName}
                            </h3>
                        </div>
                        <div class="flex items-center justify-between mt-2 mx-6">
                            <h3 class="text-gray-700 font-bold text-lg -ml-3 ">Language</h3>
                            <h3 class="flex text-gray-700 font-bold">
                                ${data.languages[0].name}
                            </h3>
                        </div>
                        <div class="flex items-center justify-between mt-2 mx-6">
                            <h3 class="text-gray-700 font-bold text-lg -ml-3 ">Population:</h3>
                            <h3 class="flex text-gray-700 font-bold">
                                ${data.population / 1000000} m
                            </h3>
                        </div>
                        <div class="flex items-center justify-between mt-2 mx-6">
                            <h3 class="text-gray-700 font-bold text-lg -ml-3 ">Currency:</h3>
                            <h3 class="flex text-gray-700 font-bold">
                                ${data.currencies[0].name}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        `;

    countriesContainer.insertAdjacentHTML("beforeend", template);
};

const getPosition = function () {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};

const whereAmI = async function () {
    //Geolocation
    const position = await getPosition();
    const { latitude: lat, longitude: lng } = position.coords;

    //Reverse Geocoding
    const reverseGeo = await fetch(
        `https://geocode.xyz/${lat},${lng}?geoit=json`
    );
    const dataGeo = await reverseGeo.json();

    //Country
    const res = await fetch(
        `https://restcountries.com/v2/name/${dataGeo.country}`
    );
    const [data] = await res.json();

    renderCountry(data);
};
whereAmI();

// const asyncCall = async function (country) {
//     try {
//         const res = await fetch(`https://restcountries.com/v2/name/${country}`);

//         if (!res.ok) throw new Error("Problem getting country");

//         const [data] = await res.json();

//         renderCountry(data);

//         console.log(data);
//     } catch (err) {
//         console.log(`${err}`);
//         // Reject promise returned from async function
//         throw err;
//     }
// };

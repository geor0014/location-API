require("./bootstrap");

const countriesContainer = document.getElementById("container");
const btn = document.getElementById("btn");

const renderCountry = function (data, neihgbour = false) {
    const template = `
                    <div class="w-full md:w-1/2 ${
                        neihgbour ? "xl:w-1/4 xl:h-11" : "xl:w-1/3"
                    } px-4 ">
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
    try {
        //Geolocation
        const position = await getPosition();
        const { latitude: lat, longitude: lng } = position.coords;

        //Reverse Geocoding
        const reverseGeo = await fetch(
            `https://geocode.xyz/${lat},${lng}?geoit=json`
        );

        if (!reverseGeo.ok)
            throw new Error("Something went wrong, could not get location");

        const dataGeo = await reverseGeo.json();

        //Country
        const res = await fetch(
            `https://restcountries.com/v2/name/${dataGeo.country}`
        );
        if (!res.ok)
            throw new Error("Something went wrong, could not get country");

        const [data] = await res.json();

        renderCountry(data);

        //Neighbours
        const neighbour = data.borders[0].toLowerCase();

        if (!neighbour) return;

        const resNeighbour = await fetch(
            `https://restcountries.com/v2/alpha/${neighbour}`
        );

        const dataNeighbour = await resNeighbour.json();
        renderCountry(dataNeighbour, true);
    } catch (err) {
        console.error(err);
    }
};

btn.addEventListener("click", whereAmI);

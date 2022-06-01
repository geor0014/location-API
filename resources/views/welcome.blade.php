<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body>
    <!-- ====== Cards Section Start -->
    <section class="h-screen w-screen p-20 bg-gray-300">
        <div class="flex flex-wrap mx-4 justify-center" id="container">

            {{-- ONE CARD --}}
            {{-- <div class="w-full md:w-1/2 xl:w-1/3 px-4 ">
                <div class="bg-white rounded-lg overflow-hidden mb-10">
                    <img src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-01.jpg" alt="image"
                        class="w-full" />
                    <h2 class="px-10 py-3 text-gray-700 font-bold text-3xl">Germany</h2>
                    <h2 class="px-10 text-gray-500 font-bold text-xl">Europe</h2>

                    <div class="p-8 sm:p-9 md:p-7 xl:p-5 text-center">
                        <div class="flex items-center justify-between mt-2 mx-6">
                            <h3 class="text-gray-700 font-bold text-lg -ml-3 ">Native Name</h3>
                            <h3 class="flex text-gray-700 font-bold">
                                Name
                            </h3>
                        </div>
                        <div class="flex items-center justify-between mt-2 mx-6">
                            <h3 class="text-gray-700 font-bold text-lg -ml-3 ">Language</h3>
                            <h3 class="flex text-gray-700 font-bold">
                                Name
                            </h3>
                        </div>
                        <div class="flex items-center justify-between mt-2 mx-6">
                            <h3 class="text-gray-700 font-bold text-lg -ml-3 ">Population:</h3>
                            <h3 class="flex text-gray-700 font-bold">
                                Currency
                            </h3>
                        </div>
                        <div class="flex items-center justify-between mt-2 mx-6">
                            <h3 class="text-gray-700 font-bold text-lg -ml-3 ">Currency:</h3>
                            <h3 class="flex text-gray-700 font-bold">
                                Currency
                            </h3>
                        </div>
                    </div>
                </div>
            </div> --}}
            {{-- END ONE CARD --}}
        </div>
        {{-- BUTTON --}}
        <div class="flex justify-center">

            <button
                class="bg-transparent hover:bg-blue-700 text-blue-700 font-bold hover:text-white py-2 px-4 border border-blue-700 hover:border-transparent rounded"
                id="btn">
                Get My Location
            </button>
        </div>
        {{-- END BUTTON --}}
        </div>
    </section>
    <!-- ====== Cards Section End -->

    <script src="/js/app.js"></script>
</body>

</html>
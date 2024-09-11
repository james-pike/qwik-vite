import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section class="bg-gray-50 pb-8 antialiased dark:bg-gray-900 md:pb-16">
  <div class="bg-[url('https://flowbite.s3.amazonaws.com/blocks/e-commerce/hero-ecommcerce-image-light.jpg')] bg-cover bg-center bg-no-repeat dark:bg-[url('https://flowbite.s3.amazonaws.com/blocks/e-commerce/hero-ecommcerce-image-dark.jpg')]">
    <div class="relative z-10 mx-auto max-w-2xl px-4 pb-32 pt-8 text-center text-white lg:pt-16 xl:px-0">
    <a href="#" class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
            <span class="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span class="text-sm font-medium">Flowbite is out! See what's new</span> 
            <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        </a>
      <h1 class="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-primary-900 dark:text-white lg:text-6xl">Don’t miss out on exclusive deals.</h1>
      <p class="mb-6 font-light text-primary-800 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">Don't Miss Out - Limited Stock at Rock-Bottom Prices!</p>
      <div class="max-w-xs sm:max-w-md m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4 lg:justify-center lg:m-0 lg:max-w-7xl">
                <div class="flex w-full sm:w-auto">
                  <a
                    class="btn btn-primary sm:mb-0 w-full"
                    href="https://github.com/onwidget/qwind"
                    target="_blank"
                    rel="noopener"
                  >
                    Get template
                  </a>
                </div>
                <div class="flex w-full sm:w-auto">
                  <button class="btn w-full bg-gray-50 dark:bg-transparent">Learn more</button>
                </div>
              </div>
    </div>
  </div>
  <div class="-mt-20 px-4">
    <div class="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 gap-y-8 rounded-lg border border-gray-200 bg-white py-8 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:grid-cols-3 md:grid-cols-4 md:p-8 lg:grid-cols-8">
      {/* <div class="text-center">
        <a href="#" class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-lg border border-gray-200 bg-white hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600">
          <svg class="h-5 w-5 text-gray-900 dark:text-white lg:h-8 lg:w-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1M5 12h14M5 12a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1m-2 3h.01M14 15h.01M17 9h.01M14 9h.01" />
          </svg>
        </a>
        <a href="#" class="mb-2 text-lg font-semibold text-gray-900 hover:underline dark:text-white">Servers</a>
      </div>
      <div class="text-center">
        <a href="#" class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-lg border border-gray-200 bg-white hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600">
          <svg class="h-5 w-5 text-gray-900 dark:text-white lg:h-8 lg:w-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z" />
          </svg>
        </a>
        <a href="#" class="mb-2 text-lg font-semibold text-gray-900 hover:underline dark:text-white">Fashion</a>
      </div>
      <div class="text-center">
        <a href="#" class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-lg border border-gray-200 bg-white hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600">
          <svg class="h-5 w-5 text-gray-900 dark:text-white lg:h-8 lg:w-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 16H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1M9 12H4m8 8V9h8v11h-8Zm0 0H9m8-4a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z" />
          </svg>
        </a>
        <a href="#" class="mb-2 text-lg font-semibold text-gray-900 hover:underline dark:text-white">Electronics</a>
      </div>
      <div class="text-center">
        <a href="#" class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-lg border border-gray-200 bg-white hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600">
          <svg class="h-5 w-5 text-gray-900 dark:text-white lg:h-8 lg:w-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.079 6.839a3 3 0 0 0-4.255.1M13 20h1.083A3.916 3.916 0 0 0 18 16.083V9A6 6 0 1 0 6 9v7m7 4v-1a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1Zm-7-4v-6H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1Zm12-6h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1v-6Z" />
          </svg>
        </a>
        <a href="#" class="mb-2 text-lg font-semibold text-gray-900 hover:underline dark:text-white">Gaming</a>
      </div>
      <div class="text-center">
        <a href="#" class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-lg border border-gray-200 bg-white hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600">
          <svg class="h-5 w-5 text-gray-900 dark:text-white lg:h-8 lg:w-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z" />
          </svg>
        </a>
        <a href="#" class="mb-2 text-lg font-semibold text-gray-900 hover:underline dark:text-white">TV/Projectors</a>
      </div>
      <div class="text-center">
        <a href="#" class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-lg border border-gray-200 bg-white hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600">
          <svg class="h-5 w-5 text-gray-900 dark:text-white lg:h-8 lg:w-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.872 9.687 20 6.56 17.44 4 4 17.44 6.56 20 16.873 9.687Zm0 0-2.56-2.56M6 7v2m0 0v2m0-2H4m2 0h2m7 7v2m0 0v2m0-2h-2m2 0h2M8 4h.01v.01H8V4Zm2 2h.01v.01H10V6Zm2-2h.01v.01H12V4Zm8 8h.01v.01H20V12Zm-2 2h.01v.01H18V14Zm2 2h.01v.01H20V16Z" />
          </svg>
        </a>
        <a href="#" class="mb-2 text-lg font-semibold text-gray-900 hover:underline dark:text-white">Toys</a>
      </div>
      <div class="text-center">
        <a href="#" class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-lg border border-gray-200 bg-white hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600">
          <svg class="h-5 w-5 text-gray-900 dark:text-white lg:h-8 lg:w-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.99 9H15M8.99 9H9m12 3a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM7 13c0 1 .507 2.397 1.494 3.216a5.5 5.5 0 0 0 7.022 0C16.503 15.397 17 14 17 13c0 0-1.99 1-4.995 1S7 13 7 13Z" />
          </svg>
        </a>
        <a href="#" class="mb-2 text-lg font-semibold text-gray-900 hover:underline dark:text-white">Sport</a>
      </div>
      <div class="text-center">
        <a href="#" class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-lg border border-gray-200 bg-white hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600">
          <svg class="h-5 w-5 text-gray-900 dark:text-white lg:h-8 lg:w-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 12c.263 0 .524-.06.767-.175a2 2 0 0 0 .65-.491c.186-.21.333-.46.433-.734.1-.274.15-.568.15-.864a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 12 9.736a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 16 9.736c0 .295.052.588.152.861s.248.521.434.73a2 2 0 0 0 .649.488 1.809 1.809 0 0 0 1.53 0 2.03 2.03 0 0 0 .65-.488c.185-.209.332-.457.433-.73.1-.273.152-.566.152-.861 0-.974-1.108-3.85-1.618-5.121A.983.983 0 0 0 17.466 4H6.456a.986.986 0 0 0-.93.645C5.045 5.962 4 8.905 4 9.736c.023.59.241 1.148.611 1.567.37.418.865.667 1.389.697Zm0 0c.328 0 .651-.091.94-.266A2.1 2.1 0 0 0 7.66 11h.681a2.1 2.1 0 0 0 .718.734c.29.175.613.266.942.266.328 0 .651-.091.94-.266.29-.174.537-.427.719-.734h.681a2.1 2.1 0 0 0 .719.734c.289.175.612.266.94.266.329 0 .652-.091.942-.266.29-.174.536-.427.718-.734h.681c.183.307.43.56.719.734.29.174.613.266.941.266a1.819 1.819 0 0 0 1.06-.351M6 12a1.766 1.766 0 0 1-1.163-.476M5 12v7a1 1 0 0 0 1 1h2v-5h3v5h7a1 1 0 0 0 1-1v-7m-5 3v2h2v-2h-2Z"
            />
          </svg>
        </a>
        <a href="#" class="mb-2 text-lg font-semibold text-gray-900 hover:underline dark:text-white">Grocery</a>
      </div> */}
    </div>
  </div>
</section>
  );
});

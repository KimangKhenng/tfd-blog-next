<template>
  <header class="bg-gray-100 sticky top-0">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-24 items-center justify-between">
        <div class="md:flex md:items-center md:gap-12">
          <NuxtLink class="block text-teal-600" to="/">
            <span class="sr-only">Home</span>
            <img class="h-12" src="~/assets/tfd_logo.jpeg" alt="home" />
          </NuxtLink>
        </div>

        <div class="hidden md:block">
          <nav aria-label="Global">
            <ul class="flex items-center gap-8 text-lg font-semibold">
              <li>
                <a
                  class="text-gray-500 transition hover:text-gray-500/75"
                  href="#"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  class="text-gray-500 transition hover:text-gray-500/75"
                  href="#"
                >
                  Courses
                </a>
              </li>

              <li>
                <a
                  class="text-gray-500 transition hover:text-gray-500/75"
                  href="#"
                >
                  Bootcamp
                </a>
              </li>

              <li>
                <a
                  class="text-gray-500 transition hover:text-gray-500/75"
                  href="#"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  class="text-gray-500 transition hover:text-gray-500/75"
                  href="#"
                >
                  Blog
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="flex items-center gap-4">
          <div class="sm:flex sm:gap-4">
            <ButtonsShadowButton text="Login" />
          </div>

          <div class="block md:hidden">
            <button
              class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<!DOCTYPE html>
<html>

<head>


<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width" />
		<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
		<meta name="generator" content={Astro.generator} />


  <meta charset="<?php bloginfo("charset"); ?>">
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta content="width=device-width, initial-scale=1" name="viewport" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;700&family=Rubik:wght@300;400;500;700&display=swap"
    rel="stylesheet" />
  <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/focus@3.x.x/dist/cdn.min.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <meta name="theme-color" content="#24086F" />
  <title><?php the_title(); ?></title>
</head>

<body <?php body_class('bg-gradient-to-br from-[#12041F] to-[#030206]'); ?>>

  <style>
   .bg-triangles {
    background: url("<?= get_template_directory_uri(); ?>/images/triangles.svg") center center / contain no-repeat,
      linear-gradient(rgb(23, 23, 23), rgb(9, 9, 9) 90%);
  }
  </style>

  <div class="mb-5 bg-[#171717]">
    <div class="container max-w-7xl mx-auto px-5 py-2 md:px-12">
      <div class="flex items-center justify-center md:justify-between">
        <div class="space-x-3">
          <span class="text-[#b6c8dd]">FREE MSP Marketing Kit</span><a href="https://lp.zorustech.com/sales-flyers" target="_blank"><button
              class="font-monospace border-2 border-[#00f0ff] px-2 py-1 font-semibold uppercase text-[#00f0ff]">
              Download Here
            </button></a>
        </div>
        <div class="space-x-6 hidden md:block">
          <span class="text-[#b6c8dd]">(888) 428-2343</span><a href="https://portal.zorustech.com/" target="_blank"><button
          class="font-monospace font-semibold uppercase text-[#7e89ad] hover:text-[#00f0ff] transition ease-out duration-300">
              Sign In
            </button></a>
        </div>
      </div>
    </div>
  </div>

  <header x-data="{ openMobileMenu: false }" class="sticky top-5 z-50 container max-w-7xl mx-auto px-4 md:px-6">
    <nav
      class=" relative flex items-center justify-between rounded-md border border-white/5 bg-white/5 py-2 ring-1 ring-slate-950/25 backdrop-blur-2xl z-10 px-5"
      aria-label="Global">
      <div class="absolute left-1.5 top-1.5 size-[3px] rounded-full bg-white/25"></div>
      <div class="absolute bottom-1.5 left-1.5 size-[3px] rounded-full bg-white/25"></div>
      <div class="absolute right-1.5 top-1.5 size-[3px] rounded-full bg-white/25"></div>
      <div class="absolute bottom-1.5 right-1.5 size-[3px] rounded-full bg-white/25"></div>

      <div class="flex lg:flex-1">
        <a href="<?php echo site_url("/") ?>" class="-m-1.5 p-1.5">
          <span class="sr-only">Zorus</span>
          <img class="h-10 w-auto" src="<?php echo get_theme_file_uri('/images/logo--zorus.svg') ?>"
            alt="" />
        </a>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700"
          @click="openMobileMenu = true">
          <span class="sr-only">Open main menu</span>
          <svg class="size-6 text-[#00f0ff]" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            aria-hidden="true" data-slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      <!---------------- Desktop menu ---------------->
      <ul class="hidden items-center space-x-6 text-sm font-medium uppercase text-white lg:flex lg:flex-wrap">
        <li class="relative flex items-center gap-x-1.5 cursor-pointer" x-data="{ open: false }" @mouseenter="open = true"
          @mouseleave="open = false">
          <p class="font-monospace text-base font-semibold text-white transition delay-150 ease-in-out hover:text-[#00f0ff]" :aria-expanded="open">Compare</p>
          <button class="shrink-0" :aria-expanded="open" @click.prevent="open = !open">
            <span class="sr-only">Show submenu for "Compare products"</span>
            <svg class="h-3 w-3 fill-[#00f0ff]" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
              <path d="M10 2.586 11.414 4 6 9.414.586 4 2 2.586l4 4z" />
            </svg>
          </button>
          <!-- 2nd level menu -->
          <ul
            class="absolute left-1/2 top-8 min-w-[240px] origin-top-right -translate-x-1/2 rounded-lg bg-gradient-to-b from-[#05B4F4] to-[#660DAB] p-px shadow-xl [&[x-cloak]]:hidden"
            x-show="open" x-transition:enter="transition ease-out duration-200 transform"
            x-transition:enter-start="opacity-0 -translate-y-2" x-transition:enter-end="opacity-100 translate-y-0"
            x-transition:leave="transition ease-out duration-200" x-transition:leave-start="opacity-100"
            x-transition:leave-end="opacity-0" x-cloak
            @focusout="await $nextTick();!$el.contains($focus.focused()) && (open = false)">
            <div class="bg-triangles space-y-6 rounded-lg bg-gradient-to-b from-[#171717] to-[#090909] p-8">
              <li>
                <a href="<?php echo site_url("/zorus-vs-cisco-umbrella") ?>"
                  class="font-monospace text-base font-semibold uppercase text-white transition delay-150 ease-in-out hover:text-[#00f0ff]">
                  Cisco Umbrella
                </a>
              </li>
              <li>
                <a href="<?php echo site_url("/zorus-vs-dnsfilter") ?>"
                  class="font-monospace text-base font-semibold uppercase text-white transition delay-150 ease-in-out hover:text-[#00f0ff]">DNSFilter</a>
              </li>
              <li>
                <a href="<?php echo site_url("/zorus-vs-webroot") ?>"
                  class="font-monospace text-base font-semibold uppercase text-white transition delay-150 ease-in-out hover:text-[#00f0ff]">WebRoot
                  DNS</a>
              </li>
              <li>
                <a href="<?php echo site_url("/zorus-vs-webtitan") ?>"
                  class="font-monospace text-base font-semibold uppercase text-white transition delay-150 ease-in-out hover:text-[#00f0ff]">WebTitan</a>
              </li>
              <li>
                <a href="<?php echo site_url("/zorus-vs-competitors") ?>"
                  class="font-monospace text-base font-semibold uppercase text-white transition delay-150 ease-in-out hover:text-[#00f0ff]">Compare
                  All</a>
              </li>
            </div>
          </ul>
        </li>
        <li>
          <a href="<?php echo site_url("/about") ?>"
            class="font-monospace text-base font-semibold uppercase text-white transition delay-150 ease-in-out hover:text-[#00f0ff]">About</a>
        </li>
        <li>
          <a href="<?php echo site_url("/referrals") ?>"
            class="font-monospace text-base font-semibold uppercase text-white transition delay-150 ease-in-out hover:text-[#00f0ff]">Referrals</a>
        </li>
        <li class="relative flex items-center gap-x-1.5 cursor-pointer" x-data="{ open: false }" @mouseenter="open = true"
          @mouseleave="open = false">
          <p class="font-monospace text-base font-semibold uppercase text-white transition delay-150 ease-in-out hover:text-[#00f0ff]"
            :aria-expanded="open">Resources</p>
          <button class="shrink-0" :aria-expanded="open" @click.prevent="open = !open">
            <span class="sr-only">Show submenu for "Compare products"</span>
            <svg class="h-3 w-3 fill-[#00f0ff]" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
              <path d="M10 2.586 11.414 4 6 9.414.586 4 2 2.586l4 4z" />
            </svg>
          </button>
          <!------------- 2nd level menu ------------->
          <ul
            class="absolute left-1/2 top-8 min-w-[240px] origin-top-right -translate-x-1/2 rounded-lg bg-gradient-to-b from-[#05B4F4] to-[#660DAB] p-px shadow-xl [&[x-cloak]]:hidden"
            x-show="open" x-transition:enter="transition ease-out duration-200 transform"
            x-transition:enter-start="opacity-0 -translate-y-2" x-transition:enter-end="opacity-100 translate-y-0"
            x-transition:leave="transition ease-out duration-200" x-transition:leave-start="opacity-100"
            x-transition:leave-end="opacity-0" x-cloak
            @focusout="await $nextTick();!$el.contains($focus.focused()) && (open = false)">
            <div class="bg-triangles space-y-6 rounded-lg bg-gradient-to-b from-[#171717] to-[#090909] p-8">
              <li>
                <a href="<?php echo site_url("/blog") ?>"
                  class="font-monospace text-base font-semibold uppercase text-white transition delay-150 ease-in-out hover:text-[#00f0ff]">Blog</a>
              </li>
              <li>
                <a href="<?php echo site_url("/webinars") ?>"
                  class="font-monospace text-base font-semibold uppercase text-white transition delay-150 ease-in-out hover:text-[#00f0ff]">Webinars</a>
              </li>
              <li>
                <a href="<?php echo site_url("/events") ?>"
                  class="font-monospace text-base font-semibold uppercase text-white transition delay-150 ease-in-out hover:text-[#00f0ff]">Events</a>
              </li>
              <li>
                <a href="<?php echo site_url("/between-two-keyboards") ?>"
                  class="font-monospace text-base font-semibold uppercase text-white transition delay-150 ease-in-out hover:text-[#00f0ff]">Between
                  Two Keyboards</a>
              </li>
              <li>
                <a href="<?php echo site_url("/resources") ?>"
                  class="font-monospace text-base font-semibold uppercase text-white transition delay-150 ease-in-out hover:text-[#00f0ff]">All
                  Resources</a>
              </li>
            </div>
          </ul>
        </li>
      </ul>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="<?php echo site_url("/book-a-live-demo") ?>" class="text-sm/6 font-semibold text-[#00f0ff]"><button
            class="font-monospace border-2 border-[#00f0ff] px-6 py-2.5 font-semibold shadow-[0_0_10px_#00f0ff] btn glitch">
            BOOK A DEMO
          </button></a>
      </div>
    </nav>

    <!----------------- Mobile component ----------------->
    <div class="lg:hidden [&[x-cloak]]:hidden" role="dialog" aria-modal="true" x-show="openMobileMenu"
      x-transition:enter="transition ease-in-out duration-300" x-transition:leave="transition ease-in-out duration-300"
      x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0" x-cloak>
      <!----------------- Background backdrop, show/hide based on slide-over state. --------------->
      <div class="fixed inset-0 z-20 bg-white/15 backdrop-blur-sm" @click="openMobileMenu = false"></div>

      <!----------------- Mobile menu --------------->
      <div class="fixed inset-y-0 right-0 z-20 w-full overflow-y-auto bg-gradient-to-br from-[#0a022d] via-[#150423] to-[#030207] px-6 py-6 text-white sm:max-w-sm">
        <div class="flex items-center justify-between">
          <a href="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Zorus</span>
            <img class="h-8 w-auto" src="<?php echo get_theme_file_uri('/images/logo--zorus.svg') ?>"
              alt="logo" />
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-[#B5C7DD]" @click="openMobileMenu = false">
            <span class="sr-only">Close menu</span>
            <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
              aria-hidden="true" data-slot="icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div>
            <ul class="text-sm font-medium">
              <li class="relative flex flex-col" x-data="{ open: false }" @mouseenter="open = true"
                @mouseleave="open = false">
                <div class="flex items-center space-x-2.5 cursor-pointer">
                  <p class="font-monospace block rounded-lg py-2.5 text-base font-semibold uppercase text-white transition delay-150 ease-in-out hover:text-[#00f0ff]"
                     :aria-expanded="open">Compare</p>
                  <button class="shrink-0 p-1" :aria-expanded="open" @click.prevent="open = !open">
                    <span class="sr-only">Show submenu for "Compare products"</span>
                    <svg class="h-3 w-3 fill-[#00f0ff]" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
                      <path d="M10 2.586 11.414 4 6 9.414.586 4 2 2.586l4 4z" />
                    </svg>
                  </button>
                </div>
                <!----------- Drodown menu ----------->
                <ul class="rounded-lg bg-gradient-to-b from-[#05B4F4] to-[#660DAB] p-px shadow-xl [&[x-cloak]]:hidden"
                  x-show="open" x-transition:enter="transition ease-out duration-200 transform"
                  x-transition:enter-start="opacity-0 -translate-y-2" x-transition:enter-end="opacity-100 translate-y-0"
                  x-transition:leave="transition ease-out duration-200" x-transition:leave-start="opacity-100"
                  x-transition:leave-end="opacity-0" x-cloak
                  @focusout="await $nextTick();!$el.contains($focus.focused()) && (open = false)">
                  <div class="bg-triangles space-y-6 rounded-lg bg-gradient-to-b from-[#171717] to-[#090909] p-8">
                    <li>
                      <a href="<?php echo site_url("/zorus-vs-cisco-umbrella") ?>"
                        class="font-monospace text-base font-semibold uppercase text-white transition delay-150 ease-in-out hover:text-[#00f0ff]">
                        Cisco Umbrella
                      </a>
                    </li>
                    <li>
                      <a href="<?php echo site_url("/zorus-vs-dnsfilter") ?>"
                        class="font-monospace text-base font-semibold uppercase text-white transition delay-150 ease-in-out hover:text-[#00f0ff]">DNSFilter</a>
                    </li>
                    <li>
                      <a href="<?php echo site_url("/zorus-vs-webroot") ?>"
                        class="font-monospace text-base font-semibold uppercase text-white transition delay-150 ease-in-out hover:text-[#00f0ff]">WebRoot
                        DNS</a>
                    </li>
                    <li>
                      <a href="<?php echo site_url("/zorus-vs-webtitan") ?>"
                        class="font-monospace text-base font-semibold uppercase text-white transition delay-150 ease-in-out hover:text-[#00f0ff]">WebTitan</a>
                    </li>
                    <li>
                      <a href="<?php echo site_url("/zorus-vs-competitors") ?>"
                        class="font-monospace text-base font-semibold uppercase text-white transition delay-150 ease-in-out hover:text-[#00f0ff]">Compare
                        All</a>
                    </li>
                  </div>
                </ul>
              </li>
              <li>
                <a class="font-monospace block rounded-lg py-2.5 font-semibold uppercase text-white"
                href="<?php echo site_url("/about") ?>">About</a>
              </li>
              <li>
                <a class="font-monospace block rounded-lg py-2.5 font-semibold uppercase text-white"
                href="<?php echo site_url("/referrals") ?>">Referrals</a>
              </li>
              <li class="relative flex flex-col cursor-pointer" x-data="{ open: false }" @mouseenter="open = true"
                @mouseleave="open = false">
                <div class="flex items-center space-x-2.5">
                  <p class="font-monospace block rounded-lg py-2.5 text-base font-semibold uppercase text-white transition delay-150 ease-in-out hover:text-[#00f0ff]"
                   :aria-expanded="open">Resources</p>
                  <button class="shrink-0 p-1" :aria-expanded="open" @click.prevent="open = !open">
                    <span class="sr-only">Show submenu for "Compare products"</span>
                    <svg class="h-3 w-3 fill-[#00f0ff]" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
                      <path d="M10 2.586 11.414 4 6 9.414.586 4 2 2.586l4 4z" />
                    </svg>
                  </button>
                </div>
                <!----------- Drodown menu ----------->
                <ul class="rounded-lg bg-gradient-to-b from-[#05B4F4] to-[#660DAB] p-px shadow-xl [&[x-cloak]]:hidden"
                  x-show="open" x-transition:enter="transition ease-out duration-200 transform"
                  x-transition:enter-start="opacity-0 -translate-y-2" x-transition:enter-end="opacity-100 translate-y-0"
                  x-transition:leave="transition ease-out duration-200" x-transition:leave-start="opacity-100"
                  x-transition:leave-end="opacity-0" x-cloak
                  @focusout="await $nextTick();!$el.contains($focus.focused()) && (open = false)">
                  <div class="bg-triangles space-y-6 rounded-lg bg-gradient-to-b from-[#171717] to-[#090909] p-8">
                    <li>
                      <a href="<?php echo site_url("/blog") ?>"
                        class="font-monospace text-base font-semibold uppercase text-white transition delay-150 ease-in-out hover:text-[#00f0ff]">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="<?php echo site_url("/webinars") ?>"
                        class="font-monospace text-base font-semibold uppercase text-white transition delay-150 ease-in-out hover:text-[#00f0ff]">Webinars</a>
                    </li>
                    <li>
                      <a href="<?php echo site_url("/events") ?>"
                        class="font-monospace text-base font-semibold uppercase text-white transition delay-150 ease-in-out hover:text-[#00f0ff]">Events</a>
                    </li>
                    <li>
                      <a href="<?php echo site_url("/between-two-keyboards") ?>"
                        class="font-monospace text-base font-semibold uppercase text-white transition delay-150 ease-in-out hover:text-[#00f0ff]">Between
                        Two Keyboards</a>
                    </li>
                    <li>
                      <a href="<?php echo site_url("/resources") ?>"
                        class="font-monospace text-base font-semibold uppercase text-white transition delay-150 ease-in-out hover:text-[#00f0ff]">All
                        Resources</a>
                    </li>
                  </div>
                </ul>
              </li>
            </ul>
            <div class="mt-3 border-t border-white/10 pt-7">
              <a href="<?php echo site_url("/book-a-live-demo") ?>" class="text-sm/6 font-semibold text-[#00f0ff]"><button
                  class="w-full border-2 border-[#00f0ff] px-6 py-2.5 shadow-[0_0_10px_#00f0ff] btn glitch">
                  BOOK A DEMO
                </button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
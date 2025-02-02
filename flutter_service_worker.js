'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ce9031d1eb60ed7f5de0e0bea3f3952e",
"assets/AssetManifest.bin.json": "008d1f1702a72f63a0463b14d055fae1",
"assets/AssetManifest.json": "e48b46411eb72f0fe438aa9b5c9b3eab",
"assets/assets/aerial-bg.jpg": "2d2af73a4d012dddde526bf437ea5dc5",
"assets/assets/aerial-bg2.jpg": "37dfe8d21d3f9812c0d11eaf3ab41ce7",
"assets/assets/anim_location.json": "8b3e7de2632792287826148c03d79ebf",
"assets/assets/ic_facebook.png": "ba803196d3b7644ffb2576efd1500b6b",
"assets/assets/ic_form.jpg": "6ffd10385faa8a4bbc28dd660b11d074",
"assets/assets/ic_instagram.png": "5c570427ee23f69853d28aec805eee79",
"assets/assets/ic_next_city.png": "a9c1ffecc8ee5b345e3dd6489a91842a",
"assets/assets/ic_whatsapp.png": "774352deeaa60ebe04164a1e28489771",
"assets/assets/ic_youtube.png": "ca6d67e60f758d352745329b283e8f32",
"assets/assets/images/logo.png": "a9c1ffecc8ee5b345e3dd6489a91842a",
"assets/assets/location.png": "ff0811e13c403f3ffd781296682ae182",
"assets/assets/phone.png": "512d593c2807579f3815247fc1aca160",
"assets/assets/real_estate_01.png": "c26137ec28583dcd0b6619ded0962c72",
"assets/assets/satisfaction.png": "c6f9a525f24cf6373272475c082771ae",
"assets/assets/user.png": "42c665c2531c24b205652e305c1f1b08",
"assets/assets/whatsapp.png": "983e9b8bd20f9ee3a91195e705068776",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "ad6cb5601a6ffac093e672ec45c4de39",
"assets/NOTICES": "e408d488eba26f0feee3bbd83b082770",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "416fbd43af735fe497423f57e2e76f28",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "c3b31ecb6e26d20068399350ec52cd3d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "463b1d03c3ae22c698601a1e633e2f43",
"/": "463b1d03c3ae22c698601a1e633e2f43",
"logo.png": "feda39e439b82adaf1579db67899c5e8",
"main.dart.js": "710df30304ded8ee038780012359af63",
"manifest.json": "6dcceb06abed02ff259573c01290616a",
"manifest.zip": "e2dff4c9b3c17e1835da2c0794d9724f",
"NextCity/.git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
"NextCity/.git/config": "0e19510775874057bcbe8bbe907870de",
"NextCity/.git/description": "c504fbde0cb848422ef155844522762c",
"NextCity/.git/FETCH_HEAD": "66ba035a26e497412e697d9ffbcd1531",
"NextCity/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"NextCity/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"NextCity/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"NextCity/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"NextCity/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"NextCity/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"NextCity/.git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
"NextCity/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"NextCity/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"NextCity/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"NextCity/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"NextCity/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"NextCity/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"NextCity/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"NextCity/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"NextCity/.git/index": "b5bf9d8712e84ac39466844f7b83ccf7",
"NextCity/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"NextCity/.git/logs/HEAD": "bc5a1e048c9a180cefc935f1b72a2866",
"NextCity/.git/logs/refs/heads/main": "bc5a1e048c9a180cefc935f1b72a2866",
"NextCity/.git/logs/refs/remotes/origin/HEAD": "e532a421fe1b04351142806300c62ae0",
"NextCity/.git/logs/refs/remotes/origin/main": "3d4329424ff78401f110a003a9c963b0",
"NextCity/.git/objects/6f/9509c88bed7080d496fc5e1d87a9315e30549d": "c3ed1be52deaa5a5334678c624ecf031",
"NextCity/.git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "c394bb349d5f6a6517986a0734827215",
"NextCity/.git/objects/eb/82017ab23c0d3ee5b2334e0c9ad273bb63d41a": "3363b2e433b9efa6b80d50db7813f8b1",
"NextCity/.git/refs/heads/main": "2aa49b3237d4622d2225362cb9f19610",
"NextCity/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"NextCity/.git/refs/remotes/origin/main": "2aa49b3237d4622d2225362cb9f19610",
"version.json": "2b04f4dd17f41ab45ea8ed44bfea692a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

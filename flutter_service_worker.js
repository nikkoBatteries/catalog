'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "fa1beb2102d5de88d92decc5b46ffbad",
"index.html": "cab6b370aba50a8d58365e985f079b8d",
"/": "cab6b370aba50a8d58365e985f079b8d",
"main.dart.js": "b183445838f451bc5a822806e7e2818b",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4b0b0eb8ec1d69546be0208d8c63efe7",
"assets/AssetManifest.json": "3525853d5d0bdaef2726e43d51e88094",
"assets/NOTICES": "cb57e5b58553d286a50253ff45f84bdb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "6d162fc5ebc2b951d51b81bb976d3e7a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ada572aea7ff9b7c0867d249d8a9e376",
"assets/fonts/MaterialIcons-Regular.otf": "432c0bc52b3c2a513628f2cabfd74d5a",
"assets/assets/resume.svg": "46677fc92c26b05ef05f6f57ee6cbf2f",
"assets/assets/swirls1.svg": "7b2b0976d9656ce4badcb72c1d1eb9a2",
"assets/assets/app-logo.svg": "b0ce2ba920596a3a8e506d5a27b63cb7",
"assets/assets/swirls3.svg": "0691e7353e1767ce6b2f8ca43a80fec9",
"assets/assets/swirls2.svg": "5b91d6eef2a3c06a44b2ffe870538535",
"assets/assets/document.svg": "c0d272e3925fb4d1e2fa5828863da184",
"assets/assets/medail.svg": "bb392b5d8b6f0881891c5fcb1efd56db",
"assets/assets/garland.svg": "6e75c8b61d9ab548483d72a5a4a0560a",
"assets/assets/catalogs/CSC%252012-12_page-0027.jpg": "c0876dc6a01f95b8922678e3e082b0c2",
"assets/assets/catalogs/CSC%252012-12_page-0026.jpg": "e5164644de0dbae172da22cded06fca6",
"assets/assets/catalogs/CSC%252012-12_page-0018.jpg": "dd7132da2872803c869c08aa759579f4",
"assets/assets/catalogs/CSC%252012-12_page-0030.jpg": "3ea8a121d903cbda5ba3236890e26b62",
"assets/assets/catalogs/CSC%252012-12_page-0024.jpg": "e0d9b85c386679bc3b401bbf6d8f00b8",
"assets/assets/catalogs/CSC%252012-12_page-0025.jpg": "4e58977e1ed9e7c8f50fc816d49938a2",
"assets/assets/catalogs/CSC%252012-12_page-0019.jpg": "2dbbd7ec679aa63c760064960bc34be8",
"assets/assets/catalogs/CSC%252012-12_page-0021.jpg": "2090a8bc8856a574fb11d15285276d57",
"assets/assets/catalogs/CSC%252012-12_page-0009.jpg": "da8f2d8557030d5aefc869190de170d8",
"assets/assets/catalogs/CSC%252012-12_page-0008.jpg": "86bb28f28e76aaf7190c1ad505d07210",
"assets/assets/catalogs/CSC%252012-12_page-0020.jpg": "8a6bd0a17381ea70dd3b59978afb50fb",
"assets/assets/catalogs/CSC%252012-12_page-0022.jpg": "eadfe8fdec7a4249cf62515c46ac9e96",
"assets/assets/catalogs/CSC%252012-12_page-0023.jpg": "656ef4d861b4f23527233ac5a3e64f8e",
"assets/assets/catalogs/CSC%252012-12_page-0006.jpg": "51482484a8d4f9f152fd56b6d6ddcfa1",
"assets/assets/catalogs/CSC%252012-12_page-0012.jpg": "a2ac42c670b78c8c56f83224c6f727bb",
"assets/assets/catalogs/CSC%252012-12_page-0013.jpg": "ffba22fba6a9030cee1293eb03ab2db1",
"assets/assets/catalogs/CSC%252012-12_page-0007.jpg": "9029ac9ab325600ea66b8f67f5b296a4",
"assets/assets/catalogs/CSC%252012-12_page-0011.jpg": "d342cf1c778137fc8d559b34c3f558d9",
"assets/assets/catalogs/CSC%252012-12_page-0005.jpg": "7504201017c404b34d6607cebc87a14e",
"assets/assets/catalogs/CSC%252012-12_page-0004.jpg": "a266ea78296b8ee789fc2edd707c3e5b",
"assets/assets/catalogs/CSC%252012-12_page-0010.jpg": "ca62393a7a84a8ba05bc5c8b9bef78fa",
"assets/assets/catalogs/CSC%252012-12_page-0014.jpg": "554f745a23e4f616e3b731c93d6eeb1c",
"assets/assets/catalogs/CSC%252012-12_page-0028.jpg": "f169ede016a6955151eddeede9ace977",
"assets/assets/catalogs/CSC%252012-12_page-0029.jpg": "4983c5d1a667c65d0b70ba2a1155a7c3",
"assets/assets/catalogs/CSC%252012-12_page-0001.jpg": "f749e1dd9b6a127a1fce3ba534ab5d70",
"assets/assets/catalogs/CSC%252012-12_page-0015.jpg": "252ddbce41f472877d68d7dbcd0e10c8",
"assets/assets/catalogs/CSC%252012-12_page-0003.jpg": "1f4b8bf52d149814f47c39dfdc81f296",
"assets/assets/catalogs/CSC%252012-12_page-0017.jpg": "0a8e5a677553a83f4438caa7975f37f6",
"assets/assets/catalogs/CSC%252012-12_page-0016.jpg": "5edbea1ae6ad422022bb6f84c81816b2",
"assets/assets/catalogs/CSC%252012-12_page-0002.jpg": "4c8d7d09d4c3e76c7b5d1e80618469c5",
"assets/assets/profile.jpg": "1e4cf308782c44346db361e95c003a6c",
"assets/assets/calendar.svg": "44dc5e7c4290b9312b91f0cb3377bd2d",
"assets/assets/invoice.svg": "ed6bd474d30a8d750aa924a78918b1ac",
"assets/assets/swirls.svg": "ebd60d6baf67414628147028ea5382d0",
"assets/assets/logo.svg": "50ac89287e374ce31bacbc5baede9bb3",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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

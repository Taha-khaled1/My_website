'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "1a64b23b60fc0e169c39b3b44c492557",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/images/back.png": "c27cd62d443ff5981417f788e8f296dd",
"assets/images/backend.png": "fe8798eb8902f0dced018bb89cc42100",
"assets/images/background.png": "0614a717659df3fd409c60ff04fac983",
"assets/images/bg_img_2.png": "8257ef89b2dfeab767578260965a7e2d",
"assets/images/contact_icon.png": "856b95eb03d60fa2576140e4c3d034b9",
"assets/images/cute-abstract-modern-background-free-vector.webp": "e9c0fb3426a321afe6c25feeb2569932",
"assets/images/desktop.png": "d4794e3ddcb4fce9a2c12246e3b4d8a7",
"assets/images/download.png": "d9317d736e7b69f20f57f6ab13f34d3c",
"assets/images/email.png": "f59e8ec158ec05d21c8b251d7b0017ca",
"assets/images/graphic.png": "d7aaa5a5615483382572b5d5c24c5e5b",
"assets/images/ground.jpg": "cc5791e0f6a8248364d54f352e869e8d",
"assets/images/hand.png": "d7c6f40ec1244a86fb4610cd515fee55",
"assets/images/Hover.png": "f0a2318c40269d84384f56f54d25ad69",
"assets/images/Hover_flip.png": "57d317fc22080b316188ebe73407065b",
"assets/images/icons8-gmail-logo-144.png": "0810bd2e686e69d3c2a60f9777b9a013",
"assets/images/icons8-phone-40.png": "3c34bdf042d1a47dbd670f5554f489c8",
"assets/images/Intreaction_design.png": "98e873648b7c2d3062556f2f8c09d4c3",
"assets/images/LinkedIn_icon_circle.svg.png": "2ce9c7e98b56ca81315c5d130d540c82",
"assets/images/Logo.png": "f76fc5deb917710b053e34eb147af750",
"assets/images/messanger.png": "beacdbb3a93df25674af2f5302f5633a",
"assets/images/people.png": "f6561cf54d239a098a72225cd21bdc80",
"assets/images/person.png": "6ede1e25d66c72b4e0ca2e5459cfd8b1",
"assets/images/pngtree-modern-double-color-futuristic-neon-background-picture-image_1181573.jpg": "ebadfb2040426c3dcb7b9ead3d969c29",
"assets/images/recent_work_bg.png": "531a8461fd1ec42f03f4cfb891790635",
"assets/images/sign.png": "09ce9472b81f95dc3193a4ce58872bfb",
"assets/images/skill/api.png": "a6c64fd344be5f1c737454f6207bfbe8",
"assets/images/skill/bloc.png": "0ee3e42fc9500f4e71e4b59aedd12b26",
"assets/images/skill/block.png": "f28e89298e38eb569e0d2e6a7c29f5e8",
"assets/images/skill/c-.png": "e4f46516b8d0d4b45f958b7e404f2d55",
"assets/images/skill/codeforce.png": "f44419b9dafc9699fc92c00371550bdd",
"assets/images/skill/dart.png": "bee2948ed9e9c7121c900ffc340d0c21",
"assets/images/skill/diagram.png": "637d1e015b1336aa1e3d445ff6c6debb",
"assets/images/skill/dictionary.png": "3e1c8a69d9388faa8c6792d59a209e20",
"assets/images/skill/firebase.png": "871a1a35847549f71c7d6d34078a8778",
"assets/images/skill/Getx.png": "36d127f8d65cce1517a2a405e2ebd1e3",
"assets/images/skill/github-logo.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/images/skill/icons8-flutter-144.png": "d165760a12f332e7485ef1bcced4161c",
"assets/images/skill/laptop.png": "3508d752ca63ef3729bef19e7779b9f4",
"assets/images/skill/map.png": "819d8881858a9c889482fdd847f86ee7",
"assets/images/skill/mysql.png": "efd22267efa1c9589fe5611454dfe821",
"assets/images/skill/neural.png": "a2ab93ec6973fbc059e8e0246234b2e4",
"assets/images/skill/oop.png": "c703555b99e04e7b4a1c62665d4e362f",
"assets/images/skill/provider.png": "929b4d5cc506dc95af3c7daeb12afb99",
"assets/images/skill/restapi.jpeg": "4ab6044d099c6d96d8e44df5dfac2722",
"assets/images/skill/sql.png": "effcef97b1f6527cd0b8634407ae64f4",
"assets/images/skill/SQLite_Vector_logo.png": "863fb8380d7c2edbc9f08cab22323696",
"assets/images/skill/t.png": "d95bc71c0577314a4ca9f12a04912c63",
"assets/images/skill/trminal.png": "9a5b1153760e4c8adbfaf99f6a11d703",
"assets/images/skype.png": "955d4329bf55cd47008c2edd6c08ad99",
"assets/images/telegram.png": "9d5e464888b512d718c28ab74948e32e",
"assets/images/ui.png": "6ca82a6c70f80fd75c56b1fe66caa180",
"assets/images/whatsapp.png": "e33ef8b852729cd9dd7c6af3837f9b23",
"assets/images/work_1.png": "ff8242cdad37e4c83136a90a325810a8",
"assets/images/work_2.png": "e1d3843d3e6d8752cfe40f655caab6d5",
"assets/images/work_3.png": "035401cff7e0fc62875bb280c53523c5",
"assets/images/work_4.png": "74e5fc2d50c04cdd638cfa878bd2ef66",
"assets/images/x.jpg": "cc5791e0f6a8248364d54f352e869e8d",
"assets/NOTICES": "50667cd2a61d52b6d70a3adb4ebdd477",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "d2f148b19afe8612181599ca9f68d989",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8a1201c6065d1ee098bd5a43d1cf8a65",
"/": "8a1201c6065d1ee098bd5a43d1cf8a65",
"main.dart.js": "1036286f2e95995664b5b73315d32bcd",
"manifest.json": "b2cb4279747af4e5efa25383f9dec4f6",
"version.json": "31e906bfef19127d9521f0d913edfba1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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

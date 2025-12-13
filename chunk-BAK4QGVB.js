// node_modules/ionicons/dist/esm-es5/utils-2c56d1c8.js
var CACHED_MAP;
var getIconMap = function() {
  if (typeof window === "undefined") {
    return /* @__PURE__ */ new Map();
  } else {
    if (!CACHED_MAP) {
      var t = window;
      t.Ionicons = t.Ionicons || {};
      CACHED_MAP = t.Ionicons.map = t.Ionicons.map || /* @__PURE__ */ new Map();
    }
    return CACHED_MAP;
  }
};
var addIcons = function(t) {
  Object.keys(t).forEach((function(e) {
    addToIconMap(e, t[e]);
    var r = e.replace(/([a-z0-9]|(?=[A-Z]))([A-Z0-9])/g, "$1-$2").toLowerCase();
    if (e !== r) {
      addToIconMap(r, t[e]);
    }
  }));
};
var addToIconMap = function(t, e) {
  var r = getIconMap();
  var n = r.get(t);
  if (n === void 0) {
    r.set(t, e);
  } else if (n !== e) {
    console.warn('[Ionicons Warning]: Multiple icons were mapped to name "'.concat(t, '". Ensure that multiple icons are not mapped to the same icon name.'));
  }
};

// node_modules/ionicons/icons/index.mjs
var add = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M256 112v288M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var alarmOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M416.07 272a160 160 0 10-160 160 160 160 0 00160-160zM142.12 91.21A46.67 46.67 0 00112 80l-2.79.08C83.66 81.62 64 104 64.07 131c0 13.21 4.66 19.37 10.88 27.23a4.55 4.55 0 003.24 1.77h.88a3.23 3.23 0 002.54-1.31L142.38 99a5.38 5.38 0 001.55-4 5.26 5.26 0 00-1.81-3.79zM369.88 91.21A46.67 46.67 0 01400 80l2.79.08C428.34 81.62 448 104 447.93 131c0 13.21-4.66 19.37-10.88 27.23a4.55 4.55 0 01-3.24 1.76h-.88a3.23 3.23 0 01-2.54-1.31L369.62 99a5.38 5.38 0 01-1.55-4 5.26 5.26 0 011.81-3.79z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-linejoin='round' d='M256.07 160v112h-80M416.07 432l-40-40M96.07 432l40-40' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var alertCircleOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path d='M250.26 166.05L256 288l5.73-121.95a5.74 5.74 0 00-5.79-6h0a5.74 5.74 0 00-5.68 6z' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path d='M256 367.91a20 20 0 1120-20 20 20 0 01-20 20z'/></svg>";
var appsOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><rect x='64' y='64' width='80' height='80' rx='40' ry='40' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><rect x='216' y='64' width='80' height='80' rx='40' ry='40' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><rect x='368' y='64' width='80' height='80' rx='40' ry='40' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><rect x='64' y='216' width='80' height='80' rx='40' ry='40' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><rect x='216' y='216' width='80' height='80' rx='40' ry='40' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><rect x='368' y='216' width='80' height='80' rx='40' ry='40' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><rect x='64' y='368' width='80' height='80' rx='40' ry='40' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><rect x='216' y='368' width='80' height='80' rx='40' ry='40' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><rect x='368' y='368' width='80' height='80' rx='40' ry='40' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var calendarNumberOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><rect x='48' y='80' width='416' height='384' rx='48' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-linejoin='round' d='M128 48v32M384 48v32M464 160H48M304 260l43.42-32H352v168M191.87 306.63c9.11 0 25.79-4.28 36.72-15.47a37.9 37.9 0 0011.13-27.26c0-26.12-22.59-39.9-47.89-39.9-21.4 0-33.52 11.61-37.85 18.93M149 374.16c4.88 8.27 19.71 25.84 43.88 25.84 28.59 0 52.12-15.94 52.12-43.82 0-12.62-3.66-24-11.58-32.07-12.36-12.64-31.25-17.48-41.55-17.48' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var calendarOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><rect stroke-linejoin='round' x='48' y='80' width='416' height='384' rx='48' class='ionicon-fill-none ionicon-stroke-width'/><circle cx='296' cy='232' r='24'/><circle cx='376' cy='232' r='24'/><circle cx='296' cy='312' r='24'/><circle cx='376' cy='312' r='24'/><circle cx='136' cy='312' r='24'/><circle cx='216' cy='312' r='24'/><circle cx='136' cy='392' r='24'/><circle cx='216' cy='392' r='24'/><circle cx='296' cy='392' r='24'/><path stroke-linejoin='round' stroke-linecap='round' d='M128 48v32M384 48v32' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linejoin='round' d='M464 160H48' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var callOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M451 374c-15.88-16-54.34-39.35-73-48.76-24.3-12.24-26.3-13.24-45.4.95-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48 5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160.15 160.15 0 0083 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64 54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159.09 159.09 0 0013.8-25.8C465 391.17 468 391.17 451 374z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var cardOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><rect x='48' y='96' width='416' height='320' rx='56' ry='56' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linejoin='round' stroke-width='60' d='M48 192h416M128 300h48v20h-48z' class='ionicon-fill-none'/></svg>";
var checkmarkCircleOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-linejoin='round' d='M352 176L217.6 336 160 272' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var colorPaletteOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M430.11 347.9c-6.6-6.1-16.3-7.6-24.6-9-11.5-1.9-15.9-4-22.6-10-14.3-12.7-14.3-31.1 0-43.8l30.3-26.9c46.4-41 46.4-108.2 0-149.2-34.2-30.1-80.1-45-127.8-45-55.7 0-113.9 20.3-158.8 60.1-83.5 73.8-83.5 194.7 0 268.5 41.5 36.7 97.5 55 152.9 55.4h1.7c55.4 0 110-17.9 148.8-52.4 14.4-12.7 11.99-36.6.1-47.7z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><circle cx='144' cy='208' r='32'/><circle cx='152' cy='311' r='32'/><circle cx='224' cy='144' r='32'/><circle cx='256' cy='367' r='48'/><circle cx='328' cy='144' r='32'/></svg>";
var createOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path d='M459.94 53.25a16.06 16.06 0 00-23.22-.56L424.35 65a8 8 0 000 11.31l11.34 11.32a8 8 0 0011.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38zM399.34 90L218.82 270.2a9 9 0 00-2.31 3.93L208.16 299a3.91 3.91 0 004.86 4.86l24.85-8.35a9 9 0 003.93-2.31L422 112.66a9 9 0 000-12.66l-9.95-10a9 9 0 00-12.71 0z'/></svg>";
var documentAttachOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M208 64h66.75a32 32 0 0122.62 9.37l141.26 141.26a32 32 0 019.37 22.62V432a48 48 0 01-48 48H192a48 48 0 01-48-48V304' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path d='M288 72v120a32 32 0 0032 32h120' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path d='M160 80v152a23.69 23.69 0 01-24 24c-12 0-24-9.1-24-24V88c0-30.59 16.57-56 48-56s48 24.8 48 55.38v138.75c0 43-27.82 77.87-72 77.87s-72-34.86-72-77.87V144' stroke-linecap='round' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var documentTextOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M416 221.25V416a48 48 0 01-48 48H144a48 48 0 01-48-48V96a48 48 0 0148-48h98.75a32 32 0 0122.62 9.37l141.26 141.26a32 32 0 019.37 22.62z' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path d='M256 56v120a32 32 0 0032 32h120M176 288h160M176 368h160' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var downloadOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M336 176h40a40 40 0 0140 40v208a40 40 0 01-40 40H136a40 40 0 01-40-40V216a40 40 0 0140-40h40' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-linejoin='round' d='M176 272l80 80 80-80M256 48v288' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var ellipse = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208-93.31 208-208 208z'/></svg>";
var eyeOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><circle cx='256' cy='256' r='80' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var flame = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M394.23 197.56a300.43 300.43 0 00-53.37-90C301.2 61.65 249.05 32 208 32a16 16 0 00-15.48 20c13.87 53-14.88 97.07-45.31 143.72C122 234.36 96 274.27 96 320c0 88.22 71.78 160 160 160s160-71.78 160-160c0-43.3-7.32-84.49-21.77-122.44zm-105.9 221.13C278 429.69 265.05 432 256 432s-22-2.31-32.33-13.31S208 390.24 208 368c0-25.14 8.82-44.28 17.34-62.78 4.95-10.74 10-21.67 13-33.37a8 8 0 0112.49-4.51A126.48 126.48 0 01275 292c18.17 24 29 52.42 29 76 0 22.24-5.42 39.77-15.67 50.69z'/></svg>";
var happyOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='184' cy='232' r='24'/><path d='M256.05 384c-45.42 0-83.62-29.53-95.71-69.83a8 8 0 017.82-10.17h175.69a8 8 0 017.82 10.17c-11.99 40.3-50.2 69.83-95.62 69.83z'/><circle cx='328' cy='232' r='24'/><circle cx='256' cy='256' r='208' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var heartCircle = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm74.69 252.82c-9.38 11.44-26.4 29.73-65.7 56.41a15.93 15.93 0 01-18 0c-39.3-26.68-56.32-45-65.7-56.41-20-24.37-29.58-49.4-29.3-76.5.31-31.06 25.22-56.33 55.53-56.33 20.4 0 35 10.63 44.1 20.41a6 6 0 008.72 0c9.11-9.78 23.7-20.41 44.1-20.41 30.31 0 55.22 25.27 55.53 56.33.3 27.1-9.29 52.13-29.28 76.5z'/></svg>";
var heartCircleOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path d='M256 360a16 16 0 01-9-2.78c-39.3-26.68-56.32-45-65.7-56.41-20-24.37-29.58-49.4-29.3-76.5.31-31.06 25.22-56.33 55.53-56.33 20.4 0 35 10.63 44.1 20.41a6 6 0 008.72 0c9.11-9.78 23.7-20.41 44.1-20.41 30.31 0 55.22 25.27 55.53 56.33.28 27.1-9.31 52.13-29.3 76.5-9.38 11.44-26.4 29.73-65.7 56.41A16 16 0 01256 360z'/></svg>";
var heartOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var homeOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path d='M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var locationOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><circle cx='256' cy='192' r='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var lockClosedOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M336 208v-95a80 80 0 00-160 0v95' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><rect x='96' y='208' width='320' height='272' rx='48' ry='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var logOutOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M304 336v40a40 40 0 01-40 40H104a40 40 0 01-40-40V136a40 40 0 0140-40h152c22.09 0 48 17.91 48 40v40M368 336l80-80-80-80M176 256h256' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var logoApple = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M349.13 136.86c-40.32 0-57.36 19.24-85.44 19.24-28.79 0-50.75-19.1-85.69-19.1-34.2 0-70.67 20.88-93.83 56.45-32.52 50.16-27 144.63 25.67 225.11 18.84 28.81 44 61.12 77 61.47h.6c28.68 0 37.2-18.78 76.67-19h.6c38.88 0 46.68 18.89 75.24 18.89h.6c33-.35 59.51-36.15 78.35-64.85 13.56-20.64 18.6-31 29-54.35-76.19-28.92-88.43-136.93-13.08-178.34-23-28.8-55.32-45.48-85.79-45.48z'/><path d='M340.25 32c-24 1.63-52 16.91-68.4 36.86-14.88 18.08-27.12 44.9-22.32 70.91h1.92c25.56 0 51.72-15.39 67-35.11 14.72-18.77 25.88-45.37 21.8-72.66z'/></svg>";
var logoGoogle = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M473.16 221.48l-2.26-9.59H262.46v88.22H387c-12.93 61.4-72.93 93.72-121.94 93.72-35.66 0-73.25-15-98.13-39.11a140.08 140.08 0 01-41.8-98.88c0-37.16 16.7-74.33 41-98.78s61-38.13 97.49-38.13c41.79 0 71.74 22.19 82.94 32.31l62.69-62.36C390.86 72.72 340.34 32 261.6 32c-60.75 0-119 23.27-161.58 65.71C58 139.5 36.25 199.93 36.25 256s20.58 113.48 61.3 155.6c43.51 44.92 105.13 68.4 168.58 68.4 57.73 0 112.45-22.62 151.45-63.66 38.34-40.4 58.17-96.3 58.17-154.9 0-24.67-2.48-39.32-2.59-39.96z'/></svg>";
var mailOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><rect x='48' y='96' width='416' height='320' rx='40' ry='40' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-linejoin='round' d='M112 160l144 112 144-112' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var map = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M48.17 113.34A32 32 0 0032 141.24V438a32 32 0 0047 28.37c.43-.23.85-.47 1.26-.74l84.14-55.05a8 8 0 003.63-6.72V46.45a8 8 0 00-12.51-6.63zM212.36 39.31A8 8 0 00200 46v357.56a8 8 0 003.63 6.72l96 62.42A8 8 0 00312 466V108.67a8 8 0 00-3.64-6.73zM464.53 46.47a31.64 31.64 0 00-31.5-.88 12.07 12.07 0 00-1.25.74l-84.15 55a8 8 0 00-3.63 6.72v357.46a8 8 0 0012.52 6.63l107.07-73.46a32 32 0 0016.41-28v-296a32.76 32.76 0 00-15.47-28.21z'/></svg>";
var mapOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M313.27 124.64L198.73 51.36a32 32 0 00-29.28.35L56.51 127.49A16 16 0 0048 141.63v295.8a16 16 0 0023.49 14.14l97.82-63.79a32 32 0 0129.5-.24l111.86 73a32 32 0 0029.27-.11l115.43-75.94a16 16 0 008.63-14.2V74.57a16 16 0 00-23.49-14.14l-98 63.86a32 32 0 01-29.24.35zM328 128v336M184 48v336' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var medkit = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M336 64H176a16 16 0 00-16 16v16h192V80a16 16 0 00-16-16z' class='ionicon-fill-none'/><path d='M432 96h-48V80a48.05 48.05 0 00-48-48H176a48.05 48.05 0 00-48 48v16H80a64.07 64.07 0 00-64 64v256a64 64 0 0064 64h352a64 64 0 0064-64V160a64.07 64.07 0 00-64-64zm-96 208h-64v64a16 16 0 01-32 0v-64h-64a16 16 0 010-32h64v-64a16 16 0 0132 0v64h64a16 16 0 010 32zm16-208H160V80a16 16 0 0116-16h160a16 16 0 0116 16z'/></svg>";
var medkitOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><rect x='32' y='112' width='448' height='352' rx='48' ry='48' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path d='M144 112V80a32 32 0 0132-32h160a32 32 0 0132 32v32M256 208v160M336 288H176' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var navigateCircleOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M336.76 161l-186.53 82.35c-10.47 4.8-6.95 20.67 4.57 20.67H244a4 4 0 014 4v89.18c0 11.52 16 15 20.78 4.56L351 175.24A10.73 10.73 0 00336.76 161z'/><path d='M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var notificationsOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M427.68 351.43C402 320 383.87 304 383.87 217.35 383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43 73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57zM320 384v16a64 64 0 01-128 0v-16' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var personOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path d='M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var pulseOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M48 320h64l64-256 64 384 64-224 32 96h64' class='ionicon-fill-none ionicon-stroke-width'/><circle cx='432' cy='320' r='32' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var removeCircleOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-linejoin='round' d='M336 256H176' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var sadOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='184' cy='232' r='24'/><path d='M256 288c45.42 0 83.62 29.53 95.71 69.83a8 8 0 01-7.87 10.17H168.15a8 8 0 01-7.82-10.17C172.32 317.53 210.53 288 256 288z'/><circle cx='328' cy='232' r='24'/><circle cx='256' cy='256' r='208' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var saveOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M380.93 57.37A32 32 0 00358.3 48H94.22A46.21 46.21 0 0048 94.22v323.56A46.21 46.21 0 0094.22 464h323.56A46.36 46.36 0 00464 417.78V153.7a32 32 0 00-9.37-22.63zM256 416a64 64 0 1164-64 63.92 63.92 0 01-64 64zm48-224H112a16 16 0 01-16-16v-64a16 16 0 0116-16h192a16 16 0 0116 16v64a16 16 0 01-16 16z' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var square = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M416 464H96a48.05 48.05 0 01-48-48V96a48.05 48.05 0 0148-48h320a48.05 48.05 0 0148 48v320a48.05 48.05 0 01-48 48z'/></svg>";
var star = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z'/></svg>";
var starOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var timeOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-linejoin='round' d='M256 128v144h96' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var trashOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M80 112h352' class='ionicon-stroke-width'/><path d='M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var waterOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 320c0 88.37-55.63 144-144 144s-144-55.63-144-144c0-94.83 103.23-222.85 134.89-259.88a12 12 0 0118.23 0C296.77 97.15 400 225.17 400 320z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path d='M344 328a72 72 0 01-72 72' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";

export {
  addIcons,
  add,
  alarmOutline,
  alertCircleOutline,
  appsOutline,
  calendarNumberOutline,
  calendarOutline,
  callOutline,
  cardOutline,
  checkmarkCircleOutline,
  colorPaletteOutline,
  createOutline,
  documentAttachOutline,
  documentTextOutline,
  downloadOutline,
  ellipse,
  eyeOutline,
  flame,
  happyOutline,
  heartCircle,
  heartCircleOutline,
  heartOutline,
  homeOutline,
  locationOutline,
  lockClosedOutline,
  logOutOutline,
  logoApple,
  logoGoogle,
  mailOutline,
  map,
  mapOutline,
  medkit,
  medkitOutline,
  navigateCircleOutline,
  notificationsOutline,
  personOutline,
  pulseOutline,
  removeCircleOutline,
  sadOutline,
  saveOutline,
  square,
  star,
  starOutline,
  timeOutline,
  trashOutline,
  waterOutline
};
//# sourceMappingURL=chunk-BAK4QGVB.js.map

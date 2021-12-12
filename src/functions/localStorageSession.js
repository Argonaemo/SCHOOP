// ! DI SET LOCAL STORAGE SESSION NANTI TAMBAHIN KODE BUAT CEK APAKAH NOW NYA ITU JAM MISALNYA 23, NAH KARENA
// ! kalo misalnya 23 + 3 itu 26, jadi dia ke login selamanya, kalo mau kita ubah jadi (24-23) = 1, (3-1), = 2, jadi ini yang nilai si expirynya.

export const getLocalStorageSession = (key) => {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) {
    return false;
  }
  const item = JSON.parse(itemStr);
  const now = new Date().getHours();

  if (now > item.expiry || now < item.timeFirst) {
    localStorage.removeItem(key);
    return false;
  }

  return item.value;
};

export const setLocalStorageSession = (key, value, jam) => {
  let now = new Date();
  let hoursNow = now.getHours();

  const items = {
    value: value,
    timeFirst: hoursNow,
    expiry: hoursNow + jam,
  };
  localStorage.setItem(key, JSON.stringify(items));
};

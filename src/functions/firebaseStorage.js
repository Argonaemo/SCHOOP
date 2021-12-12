import { storage } from "../firebase";
import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
  deleteObject,
} from "@firebase/storage";

export const setFirestoreStorage = async (item, path) => {
  const storageRef = ref(storage, `${path}` + `${item.name}`);
  const uploadTask = await uploadBytesResumable(storageRef, item);
  const url = await getDownloadURL(uploadTask.ref);
  return url;
};

export const deleteFirestoreStorage = async (url, path) => {
  // Create a reference to the file to delete
  let reg = /(?<=%2F).*(?=\?alt)/g
  let fileName = url.match(reg)
  const fileRef = ref(storage, `${path}` + `${fileName[0]}`);

  // Delete the file
  deleteObject(fileRef)
    .then(() => {
      // File deleted successfully
    })
    .catch((error) => {
      // Uh-oh, an error occurred!
      console.log(error);
    });
};

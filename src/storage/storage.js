import localforage from "localforage";

localforage.config({
  name: "localstorage",
  storeName: "storage",
  version: 1,
});

export const store = localforage.createInstance({ name: "localstorage" });

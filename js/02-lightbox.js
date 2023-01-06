import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
console.log(galleryItems);

//Create galery by inserting images and links
galleryItems.forEach((el) => {
  const link = document.createElement("a");
  link.classList.add("gallery__item");
  link.href = el.original;

  const img = document.createElement("img");
  img.classList.add("gallery__image");
  img.src = el.preview;
  img.alt = el.description;

  link.insertAdjacentElement("beforeend", img);
  gallery.insertAdjacentElement("beforeend", link);
});

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

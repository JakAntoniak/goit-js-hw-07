import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

galleryItems.forEach((el) => {
  const div = document.createElement("div");
  div.classList.add("gallery__item");

  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.href = el.original;

  const img = document.createElement("img");
  img.classList.add("gallery__image");
  img.src = el.preview;
  img.alt = el.description;
  img.dataset.source = el.original;

  div.insertAdjacentElement("beforeend", link);
  link.insertAdjacentElement("beforeend", img);
  gallery.insertAdjacentElement("beforeend", div);
});

gallery.addEventListener("click", maximize);
//Handling clicking on picture
function maximize(e) {
  const targetClasses = e.target.classList;
  if (targetClasses.contains("gallery__image")) {
    e.preventDefault();

    const source = e.target.dataset.source;

    const instance = basicLightbox.create(
      `<img width="1400" height="900" src="${source}">`
    );

    instance.show();
    document.addEventListener("keydown", closeLightboxOnEscape);

    function closeLightboxOnEscape(e) {
      if (e.keyCode === 27) {
        instance.close();
        // Remove the event listener once the lightbox is closed:
        document.removeEventListener("keydown", closeLightboxOnEscape);
      }
    }
  }
}

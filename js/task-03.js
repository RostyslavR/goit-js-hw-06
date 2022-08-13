const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

document.head.insertAdjacentHTML(
  "beforeend",
  `<style>
  .gallery
  {
    display: flex;
    flex-wrap: 
    wrap;gap: 10px;
    justify-content: center;
    align-items: baseline;
  }
  </style>`
);
const refGallery = document.querySelector(".gallery");
const makeImageString = ({ url, alt }) => {
  return `<img
   src = ${url}
   alt = ${alt}
   width = 400
   />
   `;
};

const makeImages = images.map(makeImageString).join("");
refGallery.insertAdjacentHTML("afterbegin", makeImages);

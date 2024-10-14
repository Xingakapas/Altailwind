// Mendapatkan elemen container
const imageContainer = document.getElementById("imageContainer");

// Membuat elemen img baru
const newImage = document.createElement("img");

// Mengatur atribut src dan gaya
newImage.src = "https://picsum.photos/200/300";
newImage.style.borderRadius = "50%";

// Menambahkan gambar ke dalam container
imageContainer.appendChild(newImage);
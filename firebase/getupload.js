const authorSong = document.getElementById('author');
const nameSong = document.getElementById('name');
const imgSong = document.getElementById('photo');
const newSong = document.getElementById('song');
const submit = document.getElementById('submit-btn');

const addProduct = async () => {
  const newProductRequest = {
    title: nameSong.value,
    user: authorSong.value,
    image: imgSong.value,
    audio: newSong.value,
  };
  await fetch(
    "https://65225f4af43b179384146e0d.mockapi.io/products",
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newProductRequest),
    }
  );
  alert("COMPLETE!")
};

submit.addEventListener("click", addProduct);
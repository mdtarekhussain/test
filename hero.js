const butApi = async () => {
  const res = await fetch(
    " https://openapi.programming-hero.com/api/videos/categories"
  );
  const data = await res.json();
  console.log(data.data);
};
const lodePhone = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/videos/category/1000"
  );
  const data = await res.json();
  //   console.log(data);

  displayPhone(data.data);
};
const displayPhone = (phones) => {
  console.log(phones);
  const phoneContainer = document.getElementById("phone-container");
  phones.forEach((phone) => {
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card bg-base-100 p-4 px-[13px] shadow-xl h-[400px]`;
    phoneCard.innerHTML = ` <figure>
  <img
    src="${phone?.thumbnail}"
    alt="Shoes"
  />
</figure>
<div class="card-body">
  <h2 class="card-title">${phone?.title}</h2>
 <div class="flex gap-2">
  <img class="w-[40px] h-[40px] rounded-full" src=${phone?.authors[0]?.profile_picture} alt="">
  <p>${phone?.authors[0]?.profile_name}</p>
 </div>
  <div class="flex gap-2">
    <p>${phone?.authors[0]?.profile_name}</p>
    <h1>${phone?.authors[0]?.verified}</h1>
  </div>
  <h1 class="mt-1">${phone?.others?.views}</h1>
</div>
`;
    phoneContainer.appendChild(phoneCard);
  });
};

lodePhone();

const allCardContainer = document.getElementById("all-card-container");
const readBtn = document.getElementById("read-count");
let count = 0;

const loadData = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/posts"
  );
  const data = await res.json();

  data.posts.forEach((item) => {
    console.log(item);
    const newCard = document.createElement("div");

    if (item.isActive == "false") {
      let indicator = document.getElementById("indicator");
      indicator.style.backgroundColor = "red";
    }
    newCard.innerHTML = `<div
              class="w-full flex gap-4 p-6 bg-gray-100 border border-gray-300 rounded-2xl shadow"
            >
              <div class="">
                <div class="indicator">
                  <span id="indicator" class="indicator-item badge bg-green-600"></span>
                  <div
                    class="grid w-12 h-12 bg-white place-items-center"
                  ><img src="${item.image}" class="rounded-lg" alt="" /></div>
                </div>
              </div>
              <div class="w-11/12">
                <div class="flex gap-4">
                  <p>#${item.category}</p>
                  <p>author: <span>${item.author.name}</span></p>
                </div>
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight">
                    ${item.title}
                  </h5>
                </a>
                <p
                  class="mb-3 py-2 font-normal text-gray-600 border-b-2 border-gray-300 border-dotted"
                >
                  ${item.description}
                </p>

                <div class="flex flex-1 justify-between">
                  <div class="flex gap-4 text-gray-500 items-center">
                    <div class="">
                      <i class="fa-regular fa-message"></i><span> ${item.comment_count}</span>
                    </div>
                    <div class="">
                      <i class="fa-regular fa-eye"></i><span> ${item.view_count}</span>
                    </div>
                    <div class="">
                      <i class="fa-regular fa-clock"></i><span> ${item.posted_time}</span>min
                    </div>
                  </div>
                  <a
                    class="bg-green-600 text-white px-4 py-2 m-2 rounded-full"
                    ><i class="fa-solid fa-envelope-open"></i
                  ></a>
                </div>
              </div>
            </div>`;
    allCardContainer.appendChild(newCard);
  });
};

loadData();

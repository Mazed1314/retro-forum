const allCardContainer = document.getElementById("all-card-container");
const readBtn = document.getElementById("read-count");
let count = 0;

// ----------------------------------------------discuss section function-----------------------------
const loadData = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/posts"
  );
  const data = await res.json();

  data.posts.forEach((item) => {
    // console.log(item);
    const newCard = document.createElement("div");
    let indicator = `<span class="indicator-item badge bg-red-500"></span>`;
    if (item.isActive === true) {
      indicator = `<span class="indicator-item badge bg-green-600"></span>`;
    }

    newCard.innerHTML = `<div
              class="w-full flex gap-4 p-6 bg-gray-100 border border-gray-300 rounded-2xl shadow"
            >
              <div class="">
                <div class="indicator">
                    ${indicator}
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

                    onclick="readCount()"
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
function readCount() {
  const addCount = document.getElementById("add-read-count");
  const div = document.createElement("div");
  div.innerHTML = `
    <div class="flex flex-col gap-3 my-4">
        <div class="bg-white rounded-lg flex justify-between p-2">
            <h4>title</h4>
            <p><i class="fa-regular fa-eye"></i><span>453</span></p>
        </div>
    </div>`;

  addCount.appendChild(div);
}

// -----------------------------------------------latestData function-------------------------------------------------------

const latestData = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/latest-posts"
  );
  const data = await res.json();
  console.log(data);

  data.forEach((item) => {
    console.log(item);
    const latestCategoryContainer = document.getElementById(
      "latest-category-container"
    );
    const newCard = document.createElement("div");
    let postedDate = ` ${item.author.posted_date}`;
    if (!item.author.posted_date) {
      postedDate = `No Publish Date`;
    }

    let designation = ` ${item.author.designation}`;
    if (!item.author.designation) {
      designation = `Unknown`;
    }
    newCard.innerHTML = `<div
            class="max-w-sm bg-white border border-slate-300 rounded-xl shadow p-4"
          >
            <a href="#" class="w-40 h-40">
              <img
                class="rounded-t-lg w-full"
                src="${item.cover_image}"
                alt=""
              />
            </a>
            <div class="p-5">
              <div class="text-gray-500">
                <i class="fa-regular fa-calendar-minus"></i
                ><span> ${postedDate}</span>
              </div>
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight">
                  ${item.title}
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-600">
                ${item.description}
              </p>
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <img
                    class="w-8 h-8 rounded-full"
                    src="${item.profile_image}"
                    alt="Thomas image"
                  />
                </div>
                <div class="flex-1 min-w-0 ms-4">
                  <p class="text-sm font-extrabold truncate">${item.author.name}</p>
                  <p class="text-sm truncate text-gray-700">
                    ${designation}
                  </p>
                </div>
              </div>
            </div>
          </div>`;
    latestCategoryContainer.appendChild(newCard);
  });
};

latestData();

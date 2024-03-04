// ----------------------------------searchbar function -------------------------------------------

const loadDataByCat = async (catId) => {
  console.log(catId);
  const res = await fetch(
    ` https://openapi.programming-hero.com/api/retro-forum/posts?category=${catId}`
  );
  const data = await res.json();
  //   console.log(allData);
  const allCardContainer = document.getElementById("all-card-container");
  allCardContainer.innerHTML = " ";

  data.posts.forEach((item) => {
    // console.log(item);
    const newCard = document.createElement("div");
    let indicator = `<span class="indicator-item badge bg-red-500"></span>`;
    if (item.isActive === true) {
      indicator = `<span class="indicator-item badge bg-green-600"></span>`;
    }

    newCard.innerHTML = `<div
                            class="w-full flex gap-4 py-4 md:p-6 bg-gray-100 border border-gray-300 rounded-2xl shadow-lg"
                          >
                            <div class="">
                              <div class="indicator hidden md:block">
                                ${indicator}
                              <div
                                class="grid w-12 h-12 bg-white place-items-center"
                              ><img src="${item.image}" class="rounded-lg" alt="" /></div>
                            </div>
                            </div>
                            <div class="w-11/12">
                              <div class="flex gap-4">
                              <div class="indicator md:hidden ">
                                ${indicator}
                              <div
                                class="grid w-12 h-12 bg-white place-items-center"
                              ><img src="${item.image}" class="rounded-lg" alt="" /></div>
                            </div>
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
                                  class="read-btn bg-green-600 text-white px-4 py-2 m-2 rounded-full"
                                  ><i class="fa-solid fa-envelope-open"></i
                                ></a>
                              </div>
                            </div>
                          </div>`;
    allCardContainer.appendChild(newCard);
  });
  const readBtn = document.querySelectorAll(".read-btn");
  for (const btn of readBtn) {
    btn.addEventListener("click", function (e) {
      let title =
        e.target.parentNode.parentNode.parentNode.children[1].children[0]
          .innerText;
      let view =
        e.target.parentNode.parentNode.children[0].children[1].children[1]
          .innerText;

      const addCount = document.getElementById("add-read-count");
      const read = document.getElementById("count").innerText;
      const srtRead = document.getElementById("count");
      count = parseInt(read);
      const div = document.createElement("div");
      data.posts.forEach((item) => {
        div.innerHTML = `<div class="flex flex-col gap-3 my-4 shadow-md">
            <div class="bg-white rounded-lg flex justify-between p-2">
              <h4 class=" font-bold ">${title}</h4>
              <p><i class="fa-regular fa-eye"></i><span> ${view}</span></p>
            </div>
          </div>`;
      });
      count = count + 1;
      srtRead.innerText = count;
      addCount.appendChild(div);
    });
  }
};

function searchByCat() {
  const value = document.getElementById("search-value").value;
  if (value) {
    showSpinner();
    setTimeout(function () {
      hideSpinner();
      loadDataByCat(value);
    }, 2000);
  } else {
    alert("Please enter a valid category name");
  }
}
function showSpinner() {
  document.getElementById("spinner").style.display = "block";
}
function hideSpinner() {
  document.getElementById("spinner").style.display = "none";
}

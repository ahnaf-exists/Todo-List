const asideTitle = document.querySelector(".aside-title");
const asideTextarea = document.querySelector(".aside-textarea");
const asideDeadline = document.querySelector(".aside-deadline");
const addBtn = document.querySelector(".add-btn");
const resetBtn = document.querySelector(".reset-btn");
const itemEl = document.querySelector(".main");
let itemsArray = [];
if (localStorage.getItem("itemsArray")) {
    itemsArray = JSON.parse(localStorage.getItem("itemsArray"));
}
renderArray();
const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

function renderArray() {
    if (!itemsArray.length) {
        itemEl.innerHTML = `<div class="empty">[Nothing to see here]</div>`;
    } else {
        itemEl.innerHTML = "";
        itemsArray.forEach((val, index) => {
            const hiddenDesc = val.isDescHidden ? "hidden" : "";
            const completedClass = val.isDone ? "done" : "";
            const markBtn =
                completedClass == "done" ? "incomplete" : "completed";
            const descBtn = hiddenDesc == "hidden" ? "Show" : "Hide";

            itemEl.innerHTML += `<div class="item">
                <div class="item-title">
                    <div class="${completedClass} item-title-name">${
                index + 1
            }. ${val.title}</div>
                    <div class="item-title-deadline">
                        Deadline: ${val.deadline.day} ${val.deadline.month}, ${
                val.deadline.year
            }
                    </div>
                </div>
                <div ${hiddenDesc} class="item-desc">${val.desc}</div>
                <div class="item-options">
                    <div class="right-side">
                        <button class="done-btn marked-${completedClass}">Mark as ${markBtn}</button>
                        <button class="desc-btn">${descBtn} Description</button>
                    </div>
                    <button class="dlt-btn">Delete</button>
                </div>
            </div>`;
        });

        localStorage.setItem("itemsArray", JSON.stringify(itemsArray));

        document.querySelectorAll(".done-btn").forEach((val, idx) => {
            val.addEventListener("click", () => {
                itemsArray[idx].isDone = itemsArray[idx].isDone ? false : true;
                itemsArray[idx].isDescHidden = true;
                renderArray();
            });
        });

        document.querySelectorAll(".desc-btn").forEach((val, idx) => {
            val.addEventListener("click", () => {
                itemsArray[idx].isDescHidden = itemsArray[idx].isDescHidden
                    ? false
                    : true;
                renderArray();
            });
        });

        document.querySelectorAll(".dlt-btn").forEach((val, idx) => {
            val.addEventListener("click", () => {
                itemsArray.splice(idx, 1);
                if (!itemsArray.length) {
                    localStorage.removeItem("itemsArray");
                }
                renderArray();
            });
        });
    }
}

function addItem() {
    if (asideTitle.value && asideTextarea.value && asideDeadline.value) {
        itemsArray.push({
            title: asideTitle.value,
            desc: asideTextarea.value,
            deadline: {
                day: Number(asideDeadline.value.split("-")[2]),
                month: month[Number(asideDeadline.value.split("-")[1]) - 1],
                year: Number(asideDeadline.value.split("-")[0]),
            },
            isDone: false,
            isDescHidden: false,
            dltItem: (index) => {
                itemsArray.splice(index, 1);
            },
            progress: (index) => {
                itemsArray[index].isDone = itemsArray[index].isDone
                    ? false
                    : true;
            },
            descAppearence: (index) => {
                itemsArray[index].isDescHidden = itemsArray[index].isDescHidden
                    ? false
                    : true;
            },
        });

        renderArray();
    }
}

addBtn.addEventListener("click", () => {
    addItem();
    asideTitle.value = "";
    asideTextarea.value = "";
    asideDeadline.value = "";
});

resetBtn.addEventListener("click", () => {
    itemsArray = [];
    localStorage.removeItem("itemsArray");
    renderArray();
    asideTitle.value = "";
    asideTextarea.value = "";
    asideDeadline.value = "";
});

asideTitle.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        addItem();
    }
});

asideDeadline.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        addItem();
    }
});

// show more button

const showMoreBtn = document.querySelector(".show-more");

showMoreBtn.addEventListener("click", () => {
    document.querySelector("main").style.maxWidth = "100%";
    document.querySelectorAll(".ads-wrap")[0].style.display = "none";
    document.querySelector(".show-more").style.display = "none";
    document.querySelector(".show-all-ads").style.display = "block";
    document.querySelectorAll(".ads-wrap")[1].style.marginTop = "0";
});

// location popup

const ChooseLocation = document.querySelector(".location");
const locationPopup = document.querySelector(".location-popup-wrap");

ChooseLocation.addEventListener("click", () => {
    locationPopup.style.display = "block";
    document.querySelector("html").style.overflow = "clip";
});

const closeLocationPopup = document.querySelectorAll(".close-location-popup");

closeLocationPopup.forEach((closeBtn) => {
    closeBtn.addEventListener("click", () => {
        locationPopup.style.display = "none";
        document.querySelector("html").style.overflow = "visible";
        checkbox.forEach(box => {
            box.checked = false;
        });
        document.querySelector(".city-name-show").style.display = "inline-block";
        document.querySelector(".chosen-cities").style.display = "none";
        checkedCount = 0;
    });
});

const confirmLocationPopup = document.querySelectorAll(".confirm");

confirmLocationPopup.forEach(btn => {
    btn.addEventListener("click", () => {
        locationPopup.style.display = "none";
        document.querySelector("html").style.overflow = "visible";
    });
});

const cancelLocationPopup = document.querySelectorAll(".cancel");

cancelLocationPopup.forEach((cancelBtn) => {
    cancelBtn.addEventListener("click", () => {
        locationPopup.style.display = "none";
        document.querySelector("html").style.overflow = "visible";
        checkbox.forEach(box => {
            box.checked = false;
        });
        document.querySelector(".city-name-show").style.display = "inline-block";
        document.querySelector(".chosen-cities").style.display = "none";
        checkedCount = 0;
    });
});

const provinceName = document.querySelectorAll(".provinces-names-list li");

provinceName.forEach((element) => {
    element.addEventListener("click", () => {
        document.querySelector(".choose-province").style.display = "none";
        document.querySelector(".choose-city").style.display = "block";
        let provinceNameValue = element.querySelector("span").innerText;
        document.querySelector("#city-input").placeholder = "جستجو در استان " + provinceNameValue;

        let allCities = document.querySelectorAll(".cities-names");
        allCities.forEach((cityName) => {
            cityName.style.display = "none";
        });

        provinceNameValue = provinceNameValue.replace(/\s/g, '-');
        let clickedProvince = document.querySelector("#" + provinceNameValue);
        if (clickedProvince) {
            clickedProvince.style.display = "block";
        }
    });
});

const backBtn = document.querySelectorAll(".back-btn");

backBtn[1].addEventListener("click", () => {
    document.querySelector(".choose-city").style.display = "none";
    document.querySelector(".choose-province").style.display = "block";
});

const mobileBackBtn = document.querySelectorAll(".mobile-back-btn");

mobileBackBtn[0].addEventListener("click", () => {
    locationPopup.style.display = "none";
});

mobileBackBtn[1].addEventListener("click", () => {
    document.querySelector(".choose-province").style.display = "block";
    document.querySelector(".choose-city").style.display = "none";
});

const checkbox = document.querySelectorAll(".checkbox");
let checkedCount = 0;

checkbox.forEach((icon) => {
    icon.addEventListener("click", () => {
        if (icon.checked) {
            checkedCount++;
            let cityContainer = document.querySelector(".chosen-cities");
            cityContainer.style.display = "inline-block";
            let cityName = '<span class="city-name-here" data-name="' + icon.value + '">' + "<span>" + icon.value + "</span>" + '<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 2.5c-4.136 0-7.5 3.364-7.5 7.5s3.364 7.5 7.5 7.5 7.5-3.364 7.5-7.5-3.364-7.5-7.5-7.5zm0 14.286A6.794 6.794 0 013.214 10 6.794 6.794 0 0110 3.214 6.794 6.794 0 0116.786 10 6.794 6.794 0 0110 16.786zm2.396-8.676L10.505 10l1.89 1.89a.357.357 0 01-.506.505L10 10.505l-1.89 1.89a.356.356 0 01-.506 0 .357.357 0 010-.505L9.494 10l-1.89-1.89a.357.357 0 01.505-.505L10 9.495l1.89-1.89a.357.357 0 01.507.505z" fill="currentColor" stroke="currentColor" stroke-width="0.5"></path></svg>' + '</span>';
            cityContainer.innerHTML += cityName;
            //unselecet using the cross icon
            cityContainer.addEventListener("click", (event) => {
                if (event.target.matches(".city-name-here svg")) {
                    event.target.parentElement.remove();
                    if (event.target.parentElement.dataset.name === icon.value) {
                        checkedCount--;
                        icon.checked = false;
                        console.log(checkedCount);
                    }
                    if (event.target.parentElement.dataset.name.includes("همه‌ی")) {
                        checkbox.forEach(box => {
                            checkedCount = 0;
                            box.checked = false;
                        });
                    }
                    if (checkedCount === 0) {
                        document.querySelector(".city-name-show").style.display = "inline-block";
                        document.querySelector(".chosen-cities").style.display = "none";
                        confirmLocationPopup.forEach((btn) => {
                            btn.disabled = true;
                        });
                    }
                }
            });
        } else {
            checkedCount--;
            let cityNames = document.querySelectorAll(".city-name-here");
            cityNames.forEach((city) => {
                if (city.dataset.name === icon.value) {
                    city.remove();
                }
            });
        }
        if (checkedCount === 0) {
            document.querySelector(".city-name-show").style.display = "inline-block";
            document.querySelector(".chosen-cities").style.display = "none";
            confirmLocationPopup.forEach((btn) => {
                btn.disabled = true;
            });
        } else {
            document.querySelector(".city-name-show").style.display = "none";
            confirmLocationPopup.forEach((btn) => {
                btn.disabled = false;
            });
        }
    });
});

const selectAll = document.querySelectorAll(".select-all");

selectAll.forEach(element => {
    element.addEventListener("click", () => {
        let checkboxParent = element.closest("ul");
        let groupCheckboxes = checkboxParent.querySelectorAll('input[type="checkbox"]');
        groupCheckboxes.forEach(box => {
            if (element.checked) {
                if (!box.checked) {
                    box.checked = true;
                    checkedCount++;
                }
            } else if (box.checked) {
                box.checked = false;
                checkedCount = 0;
                document.querySelector(".city-name-show").style.display = "inline-block";
                document.querySelector(".chosen-cities").style.display = "none";
                confirmLocationPopup.forEach((btn) => {
                    btn.disabled = true;
                });
            }
        });
    });
});

// footer

const footerList1 = document.querySelector(".first-list");

footerList1.addEventListener("click", () => {
    if (footerList1.classList.contains("show")) {
        footerList1.classList.remove("show");
        document.querySelectorAll(".list-title svg")[0].style.rotate = "360deg";
        document.querySelectorAll(".list-items")[0].style.display = "none";
    } else {
        footerList1.classList.add("show");
        document.querySelectorAll(".list-title svg")[0].style.rotate = "180deg";
        document.querySelectorAll(".list-items")[0].style.display = "inline-block";
    }
});

const footerList2 = document.querySelector(".second-list");

footerList2.addEventListener("click", () => {
    if (footerList2.classList.contains("show")) {
        footerList2.classList.remove("show");
        document.querySelectorAll(".list-title svg")[1].style.rotate = "360deg";
        document.querySelectorAll(".list-items")[1].style.display = "none";
    } else {
        footerList2.classList.add("show");
        document.querySelectorAll(".list-title svg")[1].style.rotate = "180deg";
        document.querySelectorAll(".list-items")[1].style.display = "inline-block";
    }
});

// suggestion

const closeSuggestion = document.querySelector(".download-app-suggestion svg");

closeSuggestion.addEventListener("click", () => {
    document.querySelector(".download-app-suggestion").style.display = "none";
});
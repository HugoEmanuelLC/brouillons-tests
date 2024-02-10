const searchForm = document.querySelector("#search-form");
const searchTerm = searchForm.querySelector("input");
const mealList = document.querySelector(".meal-list");
const mealTemplate = document.querySelector(".meal-template");
const modalTemplate = document.querySelector(".modal-template");
const modal = document.querySelector(".modal");

const fetchAllMeals = async (e) => {
  e.preventDefault();

  if (searchTerm.value.trim().length) {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm.value}`
      );
      const { meals } = await res.json();
      displayMeals(meals);
    } catch (err) {
      console.log(err);
    }
  }
};

const displayMeals = (meals) => {
  mealList.innerHTML = "";

  meals.forEach((meal) => {
    const newMealItem = document.createElement("div");
    newMealItem.classList.add("meal");
    newMealItem.innerHTML = mealTemplate.innerHTML;

    newMealItem.querySelector("img").src = meal.strMealThumb;
    newMealItem.querySelector("b").innerText = meal.strMeal;

    newMealItem.addEventListener("click", () => openModal(meal));

    mealList.appendChild(newMealItem);
  });
};

const openModal = (meal) => {
  modal.classList.remove("hidden");

  modal.innerHTML = modalTemplate.innerHTML;
  modal.querySelector("img").src = meal.strMealThumb;
  modal.querySelector(".meal-title").innerText = meal.strMeal;
  modal.querySelector(".country").innerText = meal.strArea;
  modal.querySelector(".descr").innerText = meal.strInstructions;

  const ingredients = [];

  const mealEntries = Object.entries(meal);

  const amounrOfIngr = mealEntries.filter((el) => {
    return el[0].includes("strIngredient");
  }).length;

  for (let i = 1; i < amounrOfIngr; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
      );
    } else {
      break;
    }
  }

  ingredients.forEach((ingr) => {
    const newIngr = document.createElement("li");
    newIngr.innerText = ingr;
    modal.querySelector(".ingr-list").appendChild(newIngr);
  });

  modal.querySelector("button").addEventListener("click", () => {
    modal.classList.add("hidden");
  });
};

searchForm.addEventListener("submit", fetchAllMeals);

// Write your code here
//breakfast
// breakfast: creates a new breakfast with the correct parameters:
class Breakfast {
  constructor(food, drink) {
    this.food = food;
    this.drink = drink;
  }
}
// Has a class of lunch and creates a new lunch with the correct parameters:
class Lunch {
  constructor(salad, soup, drink) {
    this.salad = salad;
    this.soup = soup;
    this.drink = drink;
  }
}
// Has a class of dineer and creates a new dinner with the correct parameters:
class Dinner {
  #dessert;
  constructor(salad, soup, entree, dessert) {
    this.salad = salad;
    this.soup = soup;
    this.entree = entree;
    this.#dessert = dessert;
  }
}

const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set appetizers(appet) {
    this._courses.appetizers = appet;
  },
  set mains(ms) {
    this._courses.mains = ms
  },
  set desserts(dsrt) {
    this._courses.desserts = dsrt;
  },
  get courses() {
    return _courses
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName, 
      price: dishPrice
      };
return this._courses[courseName].push(dish);
  },
getRandomDishFromCourse(courseName) {
  const dishes = this._courses[courseName];
  const randomIndex = Math.floor(Math.random()* dishes.length);
   return dishes[randomIndex]  
},
generateRandomMeal() {
  const appetizer = 
  this.getRandomDishFromCourse('appetizers')
  const main = this.getRandomDishFromCourse('mains');
  const dessert = 
  this.getRandomDishFromCourse('desserts'); 
  const totalPrice = 
  appetizer.price + main.price + dessert.price;
  return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}: The price is $${totalPrice}.`;
}
};
menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Spring Rolls', 5.25);
menu.addDishToCourse('appetizers', 'Chef Salad', 3.75);
menu.addDishToCourse('mains', 'Fried Chicken and Poutine', 14.25);
menu.addDishToCourse('mains', 'Prawn Pasta', 13.75);
menu.addDishToCourse('mains', 'Pork Ramen', 11.50);
menu.addDishToCourse('desserts', 'Chocolate Torte', 3.75);
menu.addDishToCourse('desserts', 'Frozen Yogurt', 3.75);
menu.addDishToCourse('desserts', 'Berry Sorbet', 3.75);

let meal = menu.generateRandomMeal();
console.log(meal);
  
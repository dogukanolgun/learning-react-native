var person = {
    // const person = {
    name: "Olgun",
    age: 20,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"]
};
var favoriteActivities;
favoriteActivities = ["Sports"];
person.role[1] = 10;
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !!! ERROR !!!
}

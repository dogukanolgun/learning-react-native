const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  // const person = {
  name: "Olgun",
  age: 20,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"]
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

person.role[1] = 10;

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !!! ERROR !!!
}

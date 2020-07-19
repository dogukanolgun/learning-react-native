enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR
}

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
const person = {
  name: "Olgun",
  age: 20,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !!! ERROR !!!
}

if (person.role === Role.AUTHOR) {
  console.log("Author");
}

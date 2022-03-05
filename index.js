const json = [
  {
    name: "Kaylane",
    age: 18,
    on_work: true,
    details_of_the_profession: {
      profission: "programmer",
      businnes: "Company S.A",
    },
    hobby: ["program", "eat", "sleep all day", "run"],
  },
  {
    name: "Fernando",
    age: 21,
    on_work: false,
    details_of_the_profession: {
      profission: "cooker",
      businnes: "Company S.A",
    },
    hobby: ["eat", "sleep all day", "to cook"],
  },
];
//converter objeto pra json
const jsonData = JSON.stringify(json);
console.log(`de objeto pra json: ${jsonData}\n`);

// converter json para objeto
const objectData = JSON.parse(jsonData);
console.log(`de json para objeto:\n ${objectData}`);

objectData.map((person) =>{
    console.log(person.name)
});
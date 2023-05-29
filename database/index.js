 const books=[{
    ISBN:"12345ONE",
    title:"geting started with mern",
    authors:[1,2,3],
    language:"en",
    pubDate:"20211-07-07",
    numOfPage:225,
    categeory:["fiction","programming","tech","web dev"],

 },
];

 const authors=[
   {
      id:1,
      name:"pavan",
      books:["12345ONE"]
   
 }
];

 const publications=[
   {
    id:1,
    name:"chakra",
    books:["123245ONE"]
 }
];

module.exports=[{books,authors,publications}];
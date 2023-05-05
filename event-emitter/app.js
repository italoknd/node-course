const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (data, person) => {
  console.log(`response was executed with value: ${data}`);
  console.log(`User: ${person.name}. Age: ${person.age}`);
});

customEmitter.emit("response", 25, { name: "Italo", age: 23 });

//be aware of: we always emit an event after listening to it

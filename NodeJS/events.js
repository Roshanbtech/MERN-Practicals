// _______________________Event Emitter____________________________ => used to emit named events and listen for them.
const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('Pizza-Order',(size,topping)=>{
    console.log(`Your order is a ${size} sized ${topping} topped pizza.`);
})
emitter.emit('Pizza-Order','large','pepperoni');

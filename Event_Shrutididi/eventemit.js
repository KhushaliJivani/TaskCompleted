
// var emitter = require('events').EventEmitter;

// function LoopProcessor(num) {
//     var e = new emitter();
    
//     setTimeout(function () {
        
//         for (var i = 1; i <= num; i++) {
//             e.emit('BeforeProcess', i);
            
//             console.log('Processing number:' + i);
            
//             e.emit('AfterProcess', i);
//         }
//     }
//     , 2000)
    
//     return e;
// }
// var lp = LoopProcessor(3);

// lp.on('BeforeProcess', function (data) {
//     console.log('About to start the process for ' + data);
// });

// lp.on('AfterProcess', function (data) {
//     console.log('Completed processing ' + data);
// });




const EventEmitter = require('events'); 
class MyEmitter extends EventEmitter {} 
const myEmitter = new MyEmitter(); // Only do this once so we don't loop forever 
myEmitter.once('newListener', (event, listener) => {
     if (event === 'event') {
          // Insert a new listener in front 
          myEmitter.on('event', () => { console.log('B'); 
        }); 
    } 
});
 myEmitter.on('event', () => { 
     console.log('A'); 
    }); 
    myEmitter.emit('event'); //A
    myEmitter.emit('event'); //A
    myEmitter.emit('newListener');
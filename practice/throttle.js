// Check if callback can be called ( Whether the WAIT timer hasn't expired)
//     If callback can be called
//         Call it,
//         Set a timer for WAIT milliseconds
//             When timer expires,
//                 If there is a queue, execute callback, empty the queue, and restart timer
//                 If there is nothing, set flag back to open
//     If callback cannot be called,
//         if queue is full, don't call callback, ignore
//         If queue is empty, add callback to the queue

var _ = {};

_.throttle = function(func, wait) {
  var isReady = true;
  var queuedFunc = null;
  var queuedArgs;

  var startTimer = function() {
    isReady = false;

    setTimeout(function() {
      isReady = true;
      if (queuedFunc !== null) {
        queuedFunc.apply(this, queuedArgs);
        console.log('Queued Func Called');
        queuedFunc = null;
        queuedArgs = null;
        startTimer();
      }
    }, wait);
  };

  var throttledFunc = function() {
    if (isReady) {
      func.apply(this, arguments);
      console.log('Func Called');
      startTimer();
    } else {
      if (queuedFunc !== null) { // If there is a func in queue
        // Ignore
      } else {
        queuedFunc = func;
        queuedArgs = arguments;
      }
    }
  };

  return throttledFunc;
};

function callback(num1, num2) {
  console.log('Callback called : ' + num1 + ' ' + num2);
}

var throttled = _.throttle(callback, 2000);

throttled(123, 234); // 0
throttled(345, 456); // Queued
throttled(567, 678); // Rejected
setTimeout(function() { throttled(1900, 1900); },1900); // Rejected
setTimeout(function() { throttled(2100, 2100); },2100); // Queued
setTimeout(function() { throttled(2200, 2200); },2200); // Rej
setTimeout(function() { throttled(2300, 2300); },2300); // rej





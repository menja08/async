// using onSuccess or onFailure callbacks instead of then() and catc()

promise.then(function(val) {// success callback, val represent the success value
    console.log(val);
},function(val) {// rejection callback
    console.log(val);
});

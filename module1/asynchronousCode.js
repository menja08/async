// demonstrates asynchronous code, slow tasks not blocking javascript's single thread

function slowTask() {
    console.log("slow task finished");
}

function asyncSlowTask() {
    setTimeout(slowTask, 5000); // finishes in 5 seconds but is processed on a separate thread
}

function fastTask() {
    console.log("fast task finished");
}

fastTask();
asyncSlowTask();
fastTask();
asyncSlowTask();
fastTask();
fastTask();

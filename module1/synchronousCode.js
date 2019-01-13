// demonstrates slow code blocking a single thread

function slowTask() {
    /* takes 2 seconds to process */
    console.log("working on slow task");
    var now = new Date().getTime();
    while(new Date().getTime() < now + 5000){/* processing */}

    console.log("slow task finished");
}

function fastTask() {
    console.log("fast task finished");
}

fastTask();
slowTask();
fastTask();
fastTask();
fastTask();

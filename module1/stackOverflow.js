// demostratets a stack overflow

function funcA() {
    funcA();
}

funcA();

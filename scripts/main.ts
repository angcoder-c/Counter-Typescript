document.addEventListener('DOMContentLoaded', () => {
    const add = document.getElementById('add');
    const sub = document.getElementById('sub');
    const reset = document.getElementById('reset');
    const counter = document.getElementById('counter');

    function colorTextControler (value:number) {
        // if the value is less than zero, the color will be red, else the color will be green
        if (value<0){
            counter.style.color = 'rgb(133, 8, 8)';
        } else if (value === 0){
            counter.style.color = 'rgb(157 116 0)';
        } else {
            counter.style.color = 'rgb(8, 133, 8)';
        }
    }

    function add2Counter () {
        // add a number to the counter, insert it and check the color
        var newValue = Number(counter.innerHTML) + 1;
        counter.innerHTML = String(newValue);
        colorTextControler(newValue);
    }
    function sub2Counter () {
        // subtracts a number from the counter, inserts and checks the color
        var newValue = Number(counter.innerHTML) - 1;
        counter.innerHTML = String(newValue);
        colorTextControler(newValue);
    }

    function resetCounter () {
        // reset the counter
        counter.innerHTML = '0';
        colorTextControler(0);
    }

    add.onclick = add2Counter;
    sub.onclick = sub2Counter;
    reset.onclick = resetCounter;
});
function form() {
    var item = document.getElementById('form');
    item.style.left = "30%";
}

function removeform() {
    var item = document.getElementById('form');
    item.style.left = `${-1000}px`;
}



var red = document.getElementById('red1');
red.addEventListener('click', addRedTicket);



function addRedTicket() {
    var input = document.getElementById('ticket').value;

    var ele = document.createElement('div');
    var innerele = document.createElement('div');
    innerele.className = 'head';
    innerele.style.backgroundColor = 'rgb(216, 51, 51)';

    var txt = document.createElement('p');
    txt.innerHTML = input;
    txt.style.marginTop = '20%';

    ele.className = 'itm';
    ele.appendChild(innerele);
    ele.appendChild(txt);

    document.getElementById('sec').appendChild(ele);
    document.getElementById('ticket').value = '';
}





var red = document.getElementById('skyblue1');
red.addEventListener('click', addblueTicket);



function addblueTicket() {
    var input = document.getElementById('ticket').value;

    var ele = document.createElement('div');
    var innerele = document.createElement('div');
    innerele.className = 'head';
    innerele.style.backgroundColor = 'rgb(20, 92, 200)';

    var txt = document.createElement('p');
    txt.innerHTML = input;
    txt.style.marginTop = '20%';

    ele.className = 'itm';
    ele.appendChild(innerele);
    ele.appendChild(txt);

    document.getElementById('sec').appendChild(ele);
    document.getElementById('ticket').value = '';
}




var red = document.getElementById('green1');
red.addEventListener('click', addGreenTicket);



function addGreenTicket() {
    var input = document.getElementById('ticket').value;

    var ele = document.createElement('div');
    var innerele = document.createElement('div');
    innerele.className = 'head';
    innerele.style.backgroundColor = "rgb(0, 128, 81)";

    var txt = document.createElement('p');
    txt.innerHTML = input;
    txt.style.marginTop = '20%';

    ele.className = 'itm';
    ele.appendChild(innerele);
    ele.appendChild(txt);

    document.getElementById('sec').appendChild(ele);
    document.getElementById('ticket').value = '';
}





var red = document.getElementById('black1');
red.addEventListener('click', addBlackTicket);



function addBlackTicket() {
    var input = document.getElementById('ticket').value;

    var ele = document.createElement('div');
    var innerele = document.createElement('div');
    innerele.className = 'head';
    innerele.style.backgroundColor = 'black';

    var txt = document.createElement('p');
    txt.innerHTML = input;
    txt.style.marginTop = '20%';

    ele.className = 'itm';
    ele.appendChild(innerele);
    ele.appendChild(txt);

    document.getElementById('sec').appendChild(ele);
    document.getElementById('ticket').value = '';
}
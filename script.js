let turn = 'X'
let isgameover = false
let scorX = 0
let scorO = 0
const changeTurn = () => {
    if (turn === 'X') {
        document.getElementsByClassName('score')[2].style.borderBottom = "2px solid #ddd"
        document.getElementsByClassName('score')[3].style.borderBottom = "3px solid #20D5C0"
        turn = 'O'
    } else {
        document.getElementsByClassName('score')[2].style.borderBottom = "3px solid #20D5C0"
        document.getElementsByClassName('score')[3].style.borderBottom = "2px solid #ddd"
        turn = 'X'
    }
    return turn
}
if (turn === 'X') {
    document.getElementById('turn').innerText = 'X'
    document.getElementsByClassName('score')[2].style.borderBottom = "3px solid #20D5C0"
    document.getElementsByClassName('score')[3].style.borderBottom = "2px solid #ddd"
} else {
    document.getElementsByClassName('score')[2].style.borderBottom = "2px solid #ddd"
    document.getElementsByClassName('score')[3].style.borderBottom = "3px solid #20D5C0"
    document.getElementById('turn').innerText = 'O'
}
const checkWin = () => {

    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    let boxtexts = document.querySelectorAll('.boxtext');
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.getElementById('winner').innerText = boxtext[e[0]].innerText
            document.getElementById('turnId').style.display = 'none'
            document.getElementById('wonId').style.display = 'block'
            document.getElementById('winW').innerText = boxtext[e[0]].innerText
            document.getElementById('winnerWindow').style.display = 'block'
            document.getElementsByClassName('draw')[0].style.display = 'none';
            document.getElementsByClassName('draw')[1].style.display = 'none';
            if (boxtext[e[0]].innerText === "X") {
                scorX = scorX + 1
                document.getElementById('scorX').innerText = scorX
                document.getElementById('scorX_win').innerText = scorX
                document.getElementsByClassName('score')[0].style.borderBottom = "3px solid #20D5C0";
                document.getElementsByClassName('score')[1].style.borderBottom = "2px solid #ddd"
                document.getElementsByClassName('score')[2].style.borderBottom = "2px solid #ddd";
                document.getElementsByClassName('score')[3].style.borderBottom = "2px solid #ddd";
            } else if (boxtext[e[0]].innerText === "O") {
                scorO = scorO + 1
                document.getElementById('scorO').innerText = scorO
                document.getElementById('scorO_win').innerText = scorO
                document.getElementsByClassName('score')[1].style.borderBottom = "3px solid #20D5C0";
                document.getElementsByClassName('score')[0].style.borderBottom = "2px solid #ddd"
                document.getElementsByClassName('score')[2].style.borderBottom = "2px solid #ddd";
                document.getElementsByClassName('score')[3].style.borderBottom = "2px solid #ddd";
            }
            isgameover = true
        } else {
            let boxMtCheak = document.getElementsByClassName('boxtext')
            if (boxMtCheak[0].innerText !== '' && boxMtCheak[1].innerText !== '' && boxMtCheak[2].innerText !== '' && boxMtCheak[3].innerText !== '' && boxMtCheak[4].innerText !== '' && boxMtCheak[5].innerText !== '' && boxMtCheak[6].innerText !== '' && boxMtCheak[7].innerText !== '' && boxMtCheak[8].innerText !== '') {
                modal.style.display = "block";
                document.getElementsByClassName('draw')[0].style.display = 'block';
                document.getElementsByClassName('draw')[1].style.display = 'block';
                document.getElementById('winnerWindow').style.display = 'none';
                document.getElementById('turnId').style.display = 'none'
                console.log('draw')
            }
        }
    })
}

let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn
            turn = changeTurn()
            checkWin();
            if (!isgameover) {
                document.getElementById('turn').innerText = turn
            } else {
                modal.style.display = "block";
            }
        }
    })
});

function reset() {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"
    document.getElementById('turn').innerText = turn
    isgameover = false
    document.getElementById('turnId').style.display = 'block'
    document.getElementById('wonId').style.display = 'none'
    document.getElementsByClassName('draw')[1].style.display = 'none';
    modal.style.display = "none";
}
// Get the modal
var modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    reset()
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        reset()
    }
}
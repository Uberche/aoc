// part 1 - Used Paper and Pen once I figured out the circle # and Position below.
const num = 277678;
let ringLe = -1;
let sq = 0;
function sqrt (num) {
    do {
        ringLe += 2;
        sq = ringLe*ringLe;
    } while (sq < num)
}

sqrt(num);

// Studied how to do it.
// ringLe = 527 sq = 277729
let min = -(ringLe - 1) / 2
let max = (ringLe - 1) / 2
let x = max;
let y = min;
let dis = 0;

while (sq != num) {
    if (x > min) {
        sq -= 1;
        x--;
    } else if (y < max) {
        sq -= 1;
        y++;
    } else if (x < max) {
        sq -= 1;
        x++;
    } else if (y > min) {
        sq -= 1;
        y--;
    }
}
    
console.log(Math.abs(x) + Math.abs(y));

// Part 2 

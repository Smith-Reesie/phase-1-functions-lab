// Code your solution in this file!


function distanceFromHqInBlocks(block){
    const hQ = 42
    return Math.abs(`${block}` - hQ)
}

distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);

function distanceFromHqInFeet(block) {
     return  distanceFromHqInBlocks(block) * 264 
}

function distanceTravelledInFeet(a,b) {
    return Math.abs((a-b) * 264)
}

distanceTravelledInFeet(43, 48);
distanceTravelledInFeet(50, 60);
distanceTravelledInFeet(34, 28);

function calculatesFarePrice(a, b) {
    let distance = Math.abs(a-b) * 264
        if(distance <= 400) {
                return 0 
            }else if(distance < 2000) {
                return (distance - 400) * .02
            }else if (distance < 2500)
                return 25
            else 
                return 'cannot travel that far'
}
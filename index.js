// code your solution here
function superbowlWin(array){
    function isWin(year){
        if (year.result === "W"){
            return year
        }
    }
    let didWin = array.find(isWin)
    if (didWin){
        return didWin.year
    }
    else{
        return undefined
    }

}
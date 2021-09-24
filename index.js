function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
saturdayFun()

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = "*") {
    //let result = wrapAdjective()
    //let emphatic = result("a hard worker")
    return function(awesome = "special") {
       console.log(awesome)
        return `You are ${flair}${awesome}${flair}!`
    }
    
    }



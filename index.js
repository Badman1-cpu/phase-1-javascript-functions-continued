function saturdayFun(a = 'roller-skate'){
    return `This Saturday, I want to ${a}!`
}
function mondayWork(b = 'go to the office'){
    return `This Monday, I will ${b}.`
}
function wrapAdjective(c='*'){
    const innerFunction = function(d ='special'){
        return `You are ${c}${d}${c}!`
    }
    return innerFunction
}
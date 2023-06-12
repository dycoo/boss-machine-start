const checkMillionDollarIdea = (numWeeks ,weeklyRevenue ) => {
    console.log('validate IDEA');
    console.log(numWeeks);
    console.log(weeklyRevenue);
    if(numWeeks*weeklyRevenue<1000000){
        return false
    }else {return true}
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;

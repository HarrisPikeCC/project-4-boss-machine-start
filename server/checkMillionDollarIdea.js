const checkMillionDollarIdea = (req, res, next) => {
    let numWeeks = req.body.numWeeks;
    let weeklyRevenue = req.body.weeklyRevenue;
    if(!numWeeks || !weeklyRevenue){
        res.status(400).send('Error in weeks or revenue parameter');
    } else {
        let value = numWeeks * weeklyRevenue;
        value >= 1000000 ? next() : res.status(400).send('Idea not profitable');
    }
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;

const { response } = require("../server");

const checkMillionDollarIdea = () => {
    const { numWeeks, weeklyRevenue } = req.body;
    const totalVal = Number(numWeeks) * Number(weeklyRevenue);
    if (!numWeeks || !weeklyRevenue || isNaN(totalVal) || totalVal < 1000000) {
        res.status(400).send(); 
    } else {
        next();
    }
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
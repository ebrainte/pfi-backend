// Initialize express router
let router = require('express').Router();
let apiController = require('./controllers/apiControllers');
       
// Set default API response
router.get('/', function (req, res) 
{
    res.json(
    {
       status: 'Rest',
       message: 'RESTful API for PFI',
    });
});


router.post('/insertFeeling', function(req,res)
{
    console.log(req.body);
    console.log("calling insertFeeling function");
    apiController.insertFeeling(req,res);
});

router.get('/getAllFeelings',async function(req,res)
{
    console.log("leer");
    await apiController.getAllFeelings(req,res);
});

router.post('/getFeelingsbyId', function(req,res)
{
    console.log(req.body);
    console.log("calling getFeelingsbyId function");
    apiController.getFeelingsbyId(req,res);
});


// Export API routes
module.exports = router;

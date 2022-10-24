const router = require('express').Router();

router.get('/',(req,res)=>{
    res.status(200).send({"Message":"Beep Beep Boop Boop the server is acting"});

})


module.exports= router;
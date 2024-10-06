
const Role = require("../model/roleModel.js");

const getRoles = async(req,res)=>{
    await Role.find({})
    .then(function(role){
        res.json(role);
    })
    .catch(function(err){
        console.log(err);
        res.status(500).json({message : 'Server error'});
    })
};
module.exports={
    getRoles
}
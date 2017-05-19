 var mongoose      = require('mongoose'),

    group   =  mongoose.Schema({
    name      : String,
    members   : [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    chatLogs  :[{}]
    
});

var group     =  mongoose.model("group", group);

module.exports=group;
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    
    unique: true
  },
  password: {
    type: String,
   
  },
  name:{
    type: String,
   
  },
  type:{
    type: String,
   
  },
  reports:[
    {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Reports',
    }
  ]
}, {
  timestamps: true
}
)

const User = mongoose.model('User', userSchema);

module.exports = User;
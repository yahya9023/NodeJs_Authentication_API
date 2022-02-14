const {Schema, model}= require('mongoose');

const userSchema = new Schema({
  username: {
    type: String,
    require: [true, 'Organisation name must be provided'],
    minlength: [3, 'The name must be three or more characters'],
    maxlength: [100, 'name lenght must me less than 100 charachters'],
  },
  email: {
    type: String,
    require: true,
    min: 6,
    max: 255,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  password: {
    type: String,
    require: true,
    min: 6,
    max: 255,
    match: [/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#.,\$%\^&\*])(?=.{8,})/, 'strong password']
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = model('users', userSchema)
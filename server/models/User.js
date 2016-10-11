var mongoose = require('mongoose');
var encrypt = require('../utilities/encryption');

var userSchema = mongoose.Schema({
  firstName: {type:String, required:'{PATH} is required!'},
  lastName: {type:String, required:'{PATH} is required!'},
  username: {
    type: String,
    required: '{PATH is required!}',
    unique:true
  },
  salt: {type:String, required:'{PATH} is required!'},
  hashed_pwd: {type:String, required:'{PATH} is required!'},
  roles: [String],
  age: Number,
  streetAddress: String,
  city: String,
  county: String,
  postCode: String,
  title: String,
  gender: String,
  mobile: Number,
  homeTelephone: Number,
  email: String,
  jarvis: String
});
userSchema.methods = {
  authenticate: function(passwordToMatch){
    return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
  },
  hasRole: function(role) {
    return this.roles.indexOf(role) > -1;
  }
};
var User = mongoose.model('User', userSchema);

function createDefaultUsers() {
  User.find({}).exec(function(err, collection){
    if(collection.length === 0){
      var salt, hash;
      salt = encrypt.createSalt();
      hash = encrypt.hashPwd(salt, 'joe');
      User.create({firstName:'Joe',lastName:'Eames',username:'joe', salt: salt, hashed_pwd: hash, roles: ['admin'], age: 34, streetAddress: '78 some street', city: 'London', county: 'Essex', postCode: 'NW1 SW1', title: 'Mr', gender: 'male', mobile: 03857475837, homeTelephone: 03948374758, email: 'someone@somewhere.co.uk', jarvis: 'Jack'});
      salt = encrypt.createSalt();
      hash = encrypt.hashPwd(salt, 'luke');
      User.create({firstName:'Luke',lastName:'Chowles',username:'luke', salt: salt, hashed_pwd: hash, roles: [], age: 34, streetAddress: '78 some street', city: 'London', county: 'Essex', postCode: 'NW1 SW1', title: 'Mr', gender: 'male', mobile: 03857475837, homeTelephone: 03948374758, email: 'someone@somewhere.co.uk', jarvis: 'Jack'});
      salt = encrypt.createSalt();
      hash = encrypt.hashPwd(salt, 'john');
      User.create({firstName:'John',lastName:'Terry',username:'john', salt: salt, hashed_pwd: hash, roles: [], age: 34, streetAddress: '78 some street', city: 'London', county: 'Essex', postCode: 'NW1 SW1', title: 'Mr', gender: 'male', mobile: 03857475837, homeTelephone: 03948374758, email: 'someone@somewhere.co.uk', jarvis: 'Jack'});
    }
  })
};

exports.createDefaultUsers = createDefaultUsers;

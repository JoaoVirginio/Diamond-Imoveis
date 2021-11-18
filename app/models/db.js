const Sequelize = require('sequelize');
const sequelize = new Sequelize('d6f0m2b9p6aiud',
 'whebdjksvbzpgs',
  '802c89e926fd6817e4736f9151091757c30f3897b13bff4792872ca5ddb90c1e',
   {dialect: 'postgres', host: 'ec2-34-198-189-252.compute-1.amazonaws.com', port: 5432
});
 
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
} 
var Pool = require('pg-pool');
var config = {
    user: 'postgres',
    database: 'Proyecto-SCSE',
    password: 'corona',
    host: 'localhost',
    port: 5432
};
/*var config = {
    user: 'hvlbgadgqazqjz',
    database: 'd9l3t27psm7r03',
    password: 'cdcdfc5db19397cccb4d3ad0610194567d49fbbe55a30697404aa2a64c77a0fc',
    host: 'ec2-107-22-169-45.compute-1.amazonaws.com',
    port: 5432
};*/
var pool = new Pool(config);

module.exports.pool = pool;
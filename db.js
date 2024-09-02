/** Database for lunchly */

const pg = require("pg");

let DB_URI;


if (process.env.NODE_ENV === 'test'){
    DB_URI = "postgresql:///lunchly_test"
    
        
    }
    

else{
    DB_URI = "postgresql:///lunchly"
    ? "lunchly_test"
    : process.env.DATABASE_URL || "postgres://brandonbetts:BMB@127.0.0.1:5432/lunchly"
}


let db = new pg.Client({ connectionString: DB_URI
    
})


db.connect();

module.exports = db;

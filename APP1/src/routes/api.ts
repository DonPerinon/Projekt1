import * as express from "express";
import * as mariadb from 'mariadb';


  export const register = ( app: express.Application ) => {

    const db = mariadb.createPool({
      host:'db',
      port:3306,
      password:'mypass',
      user:'root',
      database:'app_db',
      connectionLimit: 5
    });
  app.get(`/api/animal/all`,async ( req: any, res ) => {
    let conn;
   try {

     conn = await db.getConnection();

     const rows = await conn.query("SELECT Name from Animal");

    return res.json(rows);
     } catch (err) {
         throw err;
         } finally {
        if (conn) return conn.end();
        }
 }

 ), app.get(`/api/animal/find/:search`,async ( req: any, res ) => {
  let conn;
 try {

   conn = await db.getConnection();
   const rows = await conn.query("SELECT * from Animal where Name");
   return res.json (rows);
   } catch (err) {
       throw err;
       } finally {
      if (conn) return conn.end();
      }
}
)
};


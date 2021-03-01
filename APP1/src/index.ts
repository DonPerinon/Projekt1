import express from 'express';
import mariadb from 'mariadb';
import { ENGINE_METHOD_PKEY_ASN1_METHS } from 'node:constants';
import path from "path";
const app= express();
export const db = mariadb.createPool({
  host:'db',
  password:'mypass',
  user:'root',
  database:'APP_DB',
  connectionLimit: 5
});
export async function asyncFunction() {
  let conn;
  try {
	conn = await db.getConnection();
	const rows = await conn.query("SELECT * from Name;");
	console.log(rows); //[ {val: 1}, meta: ... ]

  } catch (err) {
	throw err;
  } finally {
	if (conn) return conn.end();
  }
}
app.listen(3000,()=>console.log('Express server running at http://127.0.0.1:3000'));
app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname,'..','index.html'))
  })
app.use(express.static(__dirname));
app.use('/css',express.static(path.join(process.cwd(),"css")));



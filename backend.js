



var pepito = "Colombia";
var basededatos = {	
		ID:"cesar",
		password:"andrea"
 };
console.log("arrancando server de Node" );

var express = require("express");
var parcero = require("body-parser");
var jade = require('jade');
//var fn = jade();
var Web = express();
Web.use( parcero.urlencoded() );
var servidor;

servidor = Web.listen(8080, function (){
	console.log("Servidor  arrancando :D ")
 });

Web.get("/", function (req, res) {
	
	var html = fn(locals);

	//res.sendfile("juego1.html") + ("juego.js") ;
		//res.sendfile("juego.js");


 });

	


	/*/Web.post("/entrar", function (req,res){  
		//res.send("en hora buena has entrado a tu cuenta ")
		//console,log(req);
	//s.send("entraste al formularios")
		if(req.body.usuario == basededatos.ID && req.body.clave == basededatos.password)
		{
			res.send("lo lograste encontraste la contraseña");
		}
		else
		{
				res.send("andrea no se sabe mi clave");
			//res.sendfile("formulario.html");
		}	
	});/*/






//pruba de html amigable
//pruba de variabls get y glovales 
/*/Web.get("/test", function (req, res) {


	res.send("tu avion es l "+ req.query.avion + " y tu edad es " + req.query.edad);
 });


Web.get("/helado", function (req, res) {

	res.send("hola helado "+ pepito);

 });/*/
//127.0.0.1


//req.query = es por donde llega las variables get.
//req.body= es por donde llega las variables post.

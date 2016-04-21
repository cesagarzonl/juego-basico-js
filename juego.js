var helado, direccion;
var teclas =
{
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGTH: 39
};
//opstaculos del nivel 2 [x,y]

var obstaculos = [[0,180],[20,180],[40,180],[60,180],[80,180],[100,180],[120,180],[120,200],
                  [0,220],[20,220],[40,220],[60,220],[80,220],[100,220],[120,220],
                  [180,0],[180,20],[180,40],[180,60],[180,80],[180,100],[180,120],
                  [180,140],[180,160],[180,180],[180,200],[180,220],[200,220],[220,0],
                  [220,20],[220,40],[220,60],[220,80],[220,100],[220,120],[220,140],
                  [220,160],[220,180],[220,200],[220,220],[140,320],[160,320],[180,320],
                  [200,320],[220,320],[240,320],[260,320],[280,320],[300,320],[320,320],
                  [340,320],[360,320],[380,320],[400,320],[420,320],[440,320],[460,320],[140,340],[140,360],
                  [140,380],[160,380],[180,380],[200,380],[220,380],[240,380],[260,380],
                  [280,380],[300,380],[320,380],[340,380],[360,380],[380,380],[400,380],[420,380],[440,380],[460,380]];

//opstaculos del nivel 3[x,y]
var obstaculosa = [[0,380],[20,380],[40,380],[60,380],[80,380],[100,380],[120,380],[120,380],
                  [0,420],[20,420],[40,420],[60,420],[80,420],[100,420],[120,420],

                  [60,0],[60,20],[60,40],[60,60],[60,80],[60,100],[60,120],
                  [60,140],[60,160],[60,180],[60,200],[60,220],[60,240],[60,260],[60,280],[60,300],[60,320],[80,320],[100,320],

                  [120,50],[120,20],[120,40],[120,60],[120,80],[120,100],[120,120],[120,140],
				  [120,160],[120,180],[120,200],[120,220],[120,240],[120,260],[120,280],[120,300],[120,320],];

//varialbs carga de imagenes
/*/var alterna = {
	url = ["fondo1.jpg","fondo3.gif","fondo.png","liz.png","dianafrente4.png","dianaatras.png","dianade4.png","dianaiz4.png"],
	img = [new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image()]
};/*/

var fondo ={
	imagenOK: false
};
var hh = {
	hhh: false
};
var jj = {
	jjj: false
};
var imagen = {
	ggg: false
};
var andrea = {
	freOK: false,
	atrOK: false,
	derOK: false,
	izOK: false,
	velocidad: 20,
	x: 0,
	y: 0,
};
var mala = {
	malaOK: false,
	x:450,
	y:449,
};


function inicio()
{
	var canvas = document.getElementById("dibujito");
	helado = canvas.getContext("2d");

	/*/ for (var i=0; i<=3; i++)
    {
        alterna.img[i].src = tifis.url[i];
        alterna.img[i].onload = confirmarImagen;
    }/*/
	
	fondo.imagen = new Image();
	fondo.imagen.src = "fondo1.jpg";
	fondo.imagen.onload = confirmarfondo;

	jj.imagen = new Image();
	jj.imagen.src = "fondo3.gif";
	jj.imagen.onload =confirmarfondo3;

	hh.imagen = new Image();
	hh.imagen.src = "fondo.png";
	hh.imagen.onload =confirmarfondo2;

	mala.malas = new Image();
	mala.malas.src = "liz.png";
	mala.malas.onload = confirmarmaldad;

	andrea.frente = new Image();
	andrea.frente.src = "dianafrente4.png";
	andrea.frente.onload = confirmarfrente;

	andrea.atrass = new Image();
	andrea.atrass.src = "dianaatras.png";
	andrea.atrass.onload = confirmaratrass;

	andrea.der = new Image();
	andrea.der.src = "dianade4.png";
	andrea.der.onload = confirmarder;

	andrea.izq = new Image();
	andrea.izq.src = "dianaiz4.png";
	andrea.izq.onload = confirmarizq;

	var m = document.getElementById("mover");
	//m.addEventListener("click", movimiento)
	document.addEventListener("keydown", teclado);
}
//function add(){num++; if(num==5) {dibujar()}}
function teclado(datos)
{ 
	var codigo = datos.keyCode;

	var xAnt = andrea.x;
	var yAnt = andrea.y;
	var xAnta = andrea.x;
	var yAnta = andrea.y;


//codigo de movimiento de andrea 

	if(codigo==teclas.DOWN){andrea.y += andrea.velocidad;if(andrea.y>455) //|| andrea.x<140 && andrea.y>155 && andrea.y<190 || andrea.y>300 && andrea.x<350 && andrea.x>110 && andrea.x<200)
        {andrea.y -= andrea.velocidad;}}
	if(codigo == teclas.UP){andrea.y -= andrea.velocidad;if(andrea.y<0)// || andrea.x<140 && andrea.y<250 && andrea.x<145 || andrea.x>175 && andrea.y<245  && andrea.x<225)// ||   andrea.y> 425 && andrea.y<400 && andrea.x<130)
        {andrea.y += andrea.velocidad;}}
	if(codigo == teclas.RIGTH){andrea.x += andrea.velocidad;if(andrea.x>475) //|| andrea.y<260 && andrea.x>160 && andrea.x<210)
        {andrea.x -= andrea.velocidad;}}
	if(codigo == teclas.LEFT){andrea.x -= andrea.velocidad;if(andrea.x<0)
        {andrea.x += andrea.velocidad;}}

   	if (andrea.x >= 430 && andrea.y >= 400){
   		hh =  confirmarfondo2();
   		}
        if (andrea.x >= 430 && andrea.y <= 40) {
			   jj =  confirmarfondo3();
			}
		if (andrea.x >= 430 && andrea.y <= 40) {
			   jj =  confirmarfondo3();
			}
		
	//consi¿¿dicional de carga de optaculos mundo 2
	 	

			
	if (mala.x >=450 && mala.y <= 0) {
			for (var v = 0; v < 76; v++)
    		{if (andrea.x == obstaculos[v][0] && andrea.y == obstaculos[v][1] )
        	{andrea.x = xAnt;
            andrea.y = yAnt;}}
        }
   if (mala.x >=70 && mala.x <=90 && mala.y <= 0) {
			for (var v = 0; v < 51; v++)
    		{if (andrea.x == obstaculosa[v][0] && andrea.y == obstaculosa[v][1] )
        	{andrea.x = xAnta;
            andrea.y = yAnta;}}}


			direccion = codigo;
			dibujar();}
			

//consi¿¿dicional de carga de optaculos mundo 3
function confirmarImagen()
	{
		
		dibujar();
	}

		
function confirmarfondo()
	{
		fondo.imagenOK = true;
		dibujar();
	}
	//carga dondos del mundo 2 y activa condicional de obstaculos
function confirmarfondo2()
	{		
		
		if (andrea.x >= 430 && andrea.y >= 400){
		alert("haz ganado");
		fondo.imagen = hh.imagen;
		andrea.x = 0;
		andrea.y = 0;
		mala.x =450;
		mala.y = 0;
		dibujar();			
        }
	}
	//carga dondos del mundo 3 y activa condicional de obstaculos
function confirmarfondo3()
	{
		
		if ( andrea.x >= 430 && andrea.y <= 40  ) {
		alert("haz ganado");
		fondo.imagen = jj.imagen;
		andrea.x = 0;
		andrea.y = 0;
		mala.x =70;
		mala.y = 0;
		dibujar();}
	}
function confirmarfrente()
	{
		andrea.freOK = true;
		dibujar();
	}
function confirmaratrass()
	{
		andrea.atrOK = true;
		dibujar();
	}
function confirmarmaldad()
	{
		mala.malaOK = true;
		dibujar();
	}
function confirmarder()
	{
		andrea.derOK = true;
		dibujar();
	}
function confirmarizq()
	{
		andrea.izOK = true;
		dibujar();
	}
function dibujar()
{ if(fondo.imagenOK) 
	{
	helado.drawImage(fondo.imagen, 0, 0);
	}
	var andreaDibujo = andrea.frente;
	if (andrea.freOK && andrea.atrOK && andrea.derOK && andrea.izOK) 
		{
			if (direccion == teclas.UP)
			{
			andreaDibujo = andrea.atrass;
			}
			if (direccion == teclas.DOWN)
			{
				andreaDibujo = andrea.frente;
			}
			if (direccion == teclas.RIGTH)
			{
				andreaDibujo = andrea.der;
			}
			if (direccion == teclas.LEFT)
			{
				andreaDibujo = andrea.izq;
			}
		}
		helado.drawImage(andreaDibujo, andrea.x, andrea.y);	
if(mala.malaOK) 
	{
	helado.drawImage(mala.malas, mala.x, mala.y);
	}
}	
/*/definete comp profesional
que te agrada mas desde el principio

genera un espaciondond se puede mostrar lo mejor de tu 
que sea facil 
dominio con el nombre URL nt orking 
dominio
crear contenidod 
	articolos 
		vidos 
			podcasts
trducir informacion 

lucirc en el portafolio 

facebook pages
twitter
linkedin 

github 
behance

google anatyticks 
1. Tener una presencia profesional en redes sociales y en la Web;
2. Compartir tus proyectos y portafolio;
3. Generar contenido escrito;
4. Crear vídeos;
5. Dar charlas;
6. Hacer networking y apoyar a tu ecosistema;
7. Construir tu comunidad;
8. Viajar.
/*/


/*/1. ¿Qué es lo que más te encanta realizar en tiempos libres?
me gusta estar con andrea jugar y pnsar me gusta prograrmar y aprender 
2. ¿Crees que esa actividad la puedes desarrollar profesionalmente?
si ya que varias de estar arreras son muy bien pagas ademas es lo que hago mejor y me gusta


	¿Qué es lo que se comenta?
	¿Cómo se llaman esas personas que lo ejecutan profesionalmente?
	¿De qué hablan?
	¿Cómo funciona económicamente el sector?/*/
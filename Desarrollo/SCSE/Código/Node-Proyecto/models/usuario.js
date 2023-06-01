var pool = require('./conexion').pool;

function DatosUsuario(nomusu, respuesta){ 
    pool.connect(function(err, client, done) {
        client.query("SELECT * FROM consultar_datos_usuario($1)", [nomusu], function(err,data) {
            done(); 
            if(err){
                LogModel.ErrorLog("models/usuario.js", "consultar_datos_usuario", err.message);
            }
            else{
                respuesta.send(data.rows);
            }              
        });
    }); 
}

module.exports.DatosUsuario = DatosUsuario;
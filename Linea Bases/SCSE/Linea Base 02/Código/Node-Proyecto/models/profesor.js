var pool = require('./conexion').pool;

function ListadoCursos(curso, respuesta){ 
    pool.connect(function(err, client, done) {
        client.query("SELECT * FROM consultar_cursos($1)", [curso], function(err,data) {
            done(); 
            if(err){
                LogModel.ErrorLog("models/profesor.js", "consultar_cursos", err.message);
            }
            else{
                respuesta.send(data.rows);
            }              
        });
    }); 
}

function ConsultarProfesor(idProfesor, respuesta){ 
    pool.connect(function(err, client, done) {
        client.query("SELECT * FROM consultar_profesor($1)", [idProfesor], function(err,data) {
            done(); 
            if(err){
                LogModel.ErrorLog("models/profesor.js", "consultar_cursos", err.message);
            }
            else{
                respuesta.send(data.rows);
            }              
        });
    }); 
}

module.exports.ListadoCursos = ListadoCursos;
module.exports.ConsultarProfesor = ConsultarProfesor;
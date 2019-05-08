exports.handler = function(event, context, callback) {
    if (event.httpMethod === 'POST') {
        
        const cid = event.queryStringParameters['CID'] || 0;
        const email = event.queryStringParameters['email'] || '';
        const firstName = event.queryStringParameters['first_name'] || '';
        const lastName = event.queryStringParameters['last_name'] || '';

        const infusionSoftObject = {
            cid, email, firstName, lastName
        };

        //TODO: Validar que la informacion que nos mandaron este completa (infusionSoftObject)
        //TODO: Validar que no exista en plataforma
        //TODO: Crear user en plataforma
        //TODO: Crear trainee en plataforma 
        //TODO: Buscar el program en BD de acuerdo al program tag que nos mandaron 
        //TODO: Crear trainee_program_coach a.k.a. asignar bootcamp  

        callback(null, { statusCode: 200, body: JSON.stringify(infusionSoftObject) });
    }
    callback(null, { statusCode: 401, body: 'Sorry, you can´t call me' });
};

import fetch from 'node-fetch';

const hasuraAPI = process.env.HasuraAPI;


exports.handler = function(event, context, callback) {
    // console.log(event);
    // console.log(context);
    // console.log(callback);
    //console.log('Function called by http ' + event.httpMethod);
    if (event.httpMethod === 'POST') {
        
        const cid = event.queryStringParameters['CID'] || 0;
        const email = event.queryStringParameters['email'] || '';
        const firstName = event.queryStringParameters['first_name'] || '';
        const lastName = event.queryStringParameters['last_name'] || '';

        const infusionSoftObject = {
            cid, email, firstName, lastName
        };

        var queryValidateUser = {
            operationName: "getMacroUrl",
            variables: { 
                "programId":"a4f67377-7289-4b89-b151-e9fe78c1cc62",
                "traineeId":"e42b0174-0f67-44ae-9f62-5104d0c95dc3"
            },
            query:''
        };
        

        const response = await fetch(hasuraAPI, { 
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(queryValidateUser),
        });
        const hasuraData = await response.text();

        //TODO: Validar que la informacion que nos mandaron este completa (infusionSoftObject)
        //TODO: Validar que no exista en plataforma
        //TODO: Crear user en plataforma
        //TODO: Crear trainee en plataforma 
        //TODO: Buscar el program en BD de acuerdo al program tag que nos mandaron 
        //TODO: Crear trainee_program_coach a.k.a. asignar bootcamp  

        callback(null, { statusCode: 200, body: JSON.stringify(hasuraData) });
    }
    callback(null, { statusCode: 401, body: 'Sorry, you can´t call me' });
};

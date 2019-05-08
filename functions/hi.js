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
        }

        callback(null, { statusCode: 200, body: JSON.stringify(infusionSoftObject) });
    }
    callback(null, { statusCode: 401, body: 'Sorry, you can´t call me' });
};

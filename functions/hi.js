exports.handler = function(event, context, callback) {
    console.log(event);
    // console.log(context);
    // console.log(callback);
    console.log('Function called by http ' + event.httpMethod);
    if (event.httpMethod === 'POST') {
        console.log(event.queryStringParameters['email'])
        callback(null, { statusCode: 200, body: 'Ok, you can call me!' });
    }
    callback(null, { statusCode: 401, body: 'Sorry, you can´t call me' });
};

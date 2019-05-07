exports.handler = function(event, context, callback) {
    console.log(event);
    console.log(context);
    console.log(callback);
    console.log('Function called by http ' + event.http_method);
    if (context.httpMethod === 'POST') {
        console.log('We receive');
        callback(null, {
            statusCode: 200,
            body: "Coool!"
        });
    }
    return { statusCode: 404 }; 
};

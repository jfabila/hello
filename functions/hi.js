exports.handler = function(event, context, callback) {
    console.log('Function called!')
    if (context.httpMethod === 'POST') {
        console.log('We receive');
        callback(null, {
            statusCode: 200,
            body: "Coool!"
        });
    }
    return { statusCode: 404 }; 
};

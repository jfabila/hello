exports.handler = function(event, context, callback) {
    if (context.httpMethod === 'POST') {
        console.log('We receive');
        callback(null, {
            statusCode: 200,
            body: "Coool!"
        });
    }
    return { statusCode: 404 }; 
};

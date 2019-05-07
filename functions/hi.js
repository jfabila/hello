exports.handler = function(event, context, callback) {
    // console.log(event);
    // console.log(context);
    // console.log(callback);
    console.log('Function called by http ' + event.httpMethod);
    if (event.httpMethod === 'POST') {
        return { statusCode: 200, body: 'All correct!' };
    }
    return { statusCode: 404 }; 
};

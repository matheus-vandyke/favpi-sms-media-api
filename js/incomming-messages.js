
// This is your new function. To start, set the name and path on the left.

exports.handler = function(context, event, callback) {
  console.log('Incoming message: ${event.Body}');
  // Here's an example of setting up some TWiML to respond to with this function
	let twiml = new Twilio.twiml.MessagingResponse();
  twiml.message('Thanks for your submission');
    
  console.log ('Twiml was a ${twiml}');

  // This callback is what is returned in response to this function being invoked.
  // It's really important! E.g. you might respond with TWiML here for a voice or SMS response.
  // Or you might return JSON data to a studio flow. Don't forget it!
  return callback(null, twiml);
};
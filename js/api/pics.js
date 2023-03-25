// This is your new function. To start, set the name and path on the left.

exports.handler = async function(context, event, callback) {
    const client = context.getTwilioClient();
    const gallery = [];
              /*
              [
                {
                  src: "https://placekitten.com/200/300",
                  description: "Look at this kitten",
                  alt: "A kitteh",
                  thumbnailWidth: "200px",
                },
                {
                  src: "https://placekitten.com/300/300",
                  description: "Another kitten",
                  alt: "Cutie",
                  thumbnailWidth: "200px",
                },
              ];
              */
    const messages = await client.messages.list({to: context.TWILIO_NUMBER})
    for (const message of messages) {
      const pics = await message.media().list();
      for (const pic of pics) {
        gallery.push({
            src: "https://api.twilio.com" + pic.uri.replace(".json", ""),
            description: message.body,
            alt: message.body,
            thumbnailWidth: "200px"
        });
      }
    }
  
    return callback(null, gallery);
  };
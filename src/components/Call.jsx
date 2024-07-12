import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Twilio } from "twilio";

const Call = ({ to, from }) => {
  const [callInProgress, setCallInProgress] = useState(false);
  const [twilioClient, setTwilioClient] = useState(null);

  useEffect(() => {
    const client = new Twilio("YOUR_TWILIO_ACCOUNT_SID", "YOUR_TWILIO_AUTH_TOKEN");
    setTwilioClient(client);
  }, []);

  const handleCall = () => {
    if (twilioClient) {
      twilioClient.calls
        .create({
          to,
          from,
          url: "http://demo.twilio.com/docs/voice.xml",
        })
        .then((call) => {
          console.log(call.sid);
          setCallInProgress(true);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handleEndCall = () => {
    setCallInProgress(false);
    // Add logic to end the call using Twilio API
  };

  return (
    <div>
      {callInProgress ? (
        <Button onClick={handleEndCall}>End Call</Button>
      ) : (
        <Button onClick={handleCall}>Start Call</Button>
      )}
    </div>
  );
};

export default Call;
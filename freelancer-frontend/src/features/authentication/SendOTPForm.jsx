import { useState } from "react";

import TextField from "../../ui/TextField";

const SendOTPForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div>
      <form className="space-y-8">
        <div>
          <TextField
            label="Phone Number"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <button className="btn btn--primary w-full">Send Code</button>
      </form>
    </div>
  );
};

export default SendOTPForm;

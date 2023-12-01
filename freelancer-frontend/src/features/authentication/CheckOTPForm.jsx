import { useState } from "react";
import OTPInput from "react-otp-input";

const CheckOTPForm = () => {
  const [otp, setOtp] = useState("");

  return (
    <div>
      <form className="space-y-10">
        <p className="font-bold text-secondary-500">Enter Auth Code</p>

        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input type="number" {...props} />}
          containerStyle="flex flex-row-reverse justify-center gap-x-2"
          inputStyle={{
            width: "2.5rem",
            padding: ".5rem .2rem",
            border: "1px solid rgb(var(--color-primary-400))",
            borderRadius: ".5rem",
          }}
        />
        <button className="btn btn--primary w-full">Accept</button>
      </form>
    </div>
  );
};

export default CheckOTPForm;

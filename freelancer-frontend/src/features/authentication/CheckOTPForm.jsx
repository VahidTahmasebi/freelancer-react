import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import OTPInput from "react-otp-input";
import toast from "react-hot-toast";

import { HiArrowRight } from "react-icons/hi";
import { CiEdit } from "react-icons/ci";

import { checkOtp } from "../../services/authService";

import Loading from "../../ui/Loading";

const RESEND_TIME = 90;

const CheckOTPForm = ({ onBack, phoneNumber, onResendOtp, otpResponse }) => {
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(RESEND_TIME);

  const navigate = useNavigate();

  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });

  const checkOtpHandler = async (e) => {
    e.preventDefault();

    try {
      const { user, message } = await mutateAsync({ phoneNumber, otp });
      toast.success(message);

      if (user.status !== 2) {
        navigate("/");
        toast.promise("Your profile is pending approval");
        return;
      }
      if (user.role === "OWNER") return navigate("/owner");
      if (user.role === "FREELANCER") return navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    const timer =
      time > 0 &&
      setInterval(() => {
        setTime((t) => t - 1);
      }, 1000);

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  return (
    <div>
      <button onClick={onBack}>
        <HiArrowRight className="w-6 h-6 text-secondary-500" />
      </button>
      {otpResponse && (
        <div className="flex items-center gap-x-2 my-4">
          <span> {otpResponse?.message}</span>
          <button onClick={onBack}>
            <CiEdit className="w-6 h-6 text-primary-900" />
          </button>
        </div>
      )}
      <div className="mb-4 text-secondary-500">
        {time > 0 ? (
          <p>{time} to resend the code</p>
        ) : (
          <button onClick={onResendOtp}>Resend the code</button>
        )}
      </div>
      <form onSubmit={checkOtpHandler} className="space-y-10">
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
        {isPending ? (
          <Loading />
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            Accept
          </button>
        )}
      </form>
    </div>
  );
};

export default CheckOTPForm;

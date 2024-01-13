import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { getOtp } from "../../services/authService";

import useUser from "./useUser";

import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";

const AuthContainer = () => {
  const navigate = useNavigate();

  // const [phoneNumber, setPhoneNumber] = useState("");
  const [step, setStep] = useState(1);

  const {
    isPending: isSendingOtp,
    error,
    data: otpResponse,
    mutateAsync,
  } = useMutation({
    mutationFn: getOtp,
  });

  const { user } = useUser();

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();

  const sendOtpHandler = async (data) => {
    // e.preventDefault();

    try {
      const res = await mutateAsync(data);
      setStep(2);
      toast.success(res?.message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    if (user) navigate("/", { replace: true });
  }, [user, navigate]);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            isSendingOtp={isSendingOtp}
            onSubmit={handleSubmit(sendOtpHandler)}
            register={register}
            errors={errors}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            onBack={() => setStep((s) => s - 1)}
            phoneNumber={getValues("phoneNumber")}
            onResendOtp={sendOtpHandler}
            otpResponse={otpResponse}
          />
        );
      default:
        return null;
    }
  };

  return <div className="w-full sm:max-w-sm">{renderStep()}</div>;
};

export default AuthContainer;

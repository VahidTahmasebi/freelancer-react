import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { getOtp } from "../../services/authService";

import Loading from "../../ui/Loading";
import TextField from "../../ui/TextField";

const SendOTPForm = ({ phoneNumber, setStep, onChange }) => {
  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await mutateAsync({ phoneNumber });
      setStep(2);
      toast.success(res?.message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div>
      <form onSubmit={sendOtpHandler} className="space-y-10">
        <div>
          <TextField
            label="Phone Number"
            name="phoneNumber"
            value={phoneNumber}
            onChange={onChange}
          />
        </div>
        {isPending ? (
          <Loading />
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            Send Code
          </button>
        )}
      </form>
    </div>
  );
};

export default SendOTPForm;

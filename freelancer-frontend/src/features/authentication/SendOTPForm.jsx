import Loading from "../../ui/Loading";
import TextField from "../../ui/TextField";

const SendOTPForm = ({ isSendingOtp, phoneNumber, onChange, onSubmit }) => {
  return (
    <div>
      <form onSubmit={onSubmit} className="space-y-10">
        <div>
          <TextField
            label="Phone Number"
            name="phoneNumber"
            value={phoneNumber}
            onChange={onChange}
          />
        </div>
        {isSendingOtp ? (
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

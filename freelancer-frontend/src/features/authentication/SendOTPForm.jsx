import Loading from "../../ui/Loading";
import TextField from "../../ui/TextField";

const SendOTPForm = ({ isSendingOtp, register, errors, onSubmit }) => {
  return (
    <div>
      <form onSubmit={onSubmit} className="space-y-10">
        <div>
          <TextField
            label="Phone Number"
            name="phoneNumber"
            maxlength={11}
            register={register}
            required
            validationSchema={{
              required: "Phone Number is Required",
              minLength: {
                value: 11,
                message: "Phone number length is invalid",
              },
            }}
            errors={errors}
            // value={phoneNumber}
            // onChange={onChange}
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

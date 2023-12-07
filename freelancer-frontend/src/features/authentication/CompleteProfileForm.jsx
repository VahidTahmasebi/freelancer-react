import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { completeProfile } from "../../services/authService";

import Loading from "../../ui/Loading";
import TextField from "../../ui/TextField";
import RadioInputGroup from "../../ui/RadioInputGroup";

const CompleteProfileForm = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [role, setRole] = useState("");

  const navigate = useNavigate();

  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
    // getValues
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    // e.preventDefault();

    try {
      const { user, message } = await mutateAsync(data);
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

  return (
    <div className="flex justify-center pt-10">
      <div className="w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <TextField
            label="Name"
            name="name"
            register={register}
            validationSchema={{
              required: "Name is Required",
              minLength: { value: 3, message: "Name length is invalid" },
            }}
            errors={errors}
            // onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Email"
            name="email"
            register={register}
            validationSchema={{
              required: "Email is Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i,
                message: "The email is invalid",
              },
            }}
            errors={errors}
            // onChange={(e) => setEmail(e.target.value)}
          />
          <RadioInputGroup
            configs={{
              name: "role",
              validationSchema: { required: "Role is Required" },
              options: [
                {
                  value: "OWNER",
                  label: "Owner",
                },
                { value: "FREELANCER", label: "Freelancer" },
              ],
            }}
            register={register}
            watch={watch}
            errors={errors}
          />
          {isPending ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              Accept
            </button>
          )}{" "}
        </form>
      </div>
    </div>
  );
};

export default CompleteProfileForm;

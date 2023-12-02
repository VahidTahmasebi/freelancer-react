import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { completeProfile } from "../../services/authService";

import TextField from "../../ui/TextField";
import RadioInput from "../../ui/RadioInput";
import Loading from "../../ui/Loading";

const CompleteProfileForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user, message } = await mutateAsync({ name, email, role });
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
        <form onSubmit={handleSubmit} className="space-y-8">
          <TextField
            label="Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex justify-center items-center gap-x-8">
            <RadioInput
              label="Owner"
              name="role"
              id="OWNER"
              checked={role === "OWNER"}
              value="OWNER"
              onChange={(e) => setRole(e.target.value)}
            />
            <RadioInput
              label="Freelancer"
              name="role"
              id="FREELANCER"
              checked={role === "FREELANCER"}
              value="FREELANCER"
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
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

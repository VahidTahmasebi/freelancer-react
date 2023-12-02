import { useState } from "react";

import TextField from "../../ui/TextField";
import RadioInput from "../../ui/RadioInput";

const CompleteProfileForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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
          <button className="btn btn--primary w-full">Accept</button>
        </form>
      </div>
    </div>
  );
};

export default CompleteProfileForm;

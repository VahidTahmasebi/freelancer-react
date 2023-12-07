import { Switch } from "@headlessui/react";

const Toggle = ({ label, enabled, onChange }) => {
  return (
    <Switch.Group>
      <div className="flex justify-between items-center gap-x-2">
        <Switch.Label>{label}</Switch.Label>

        <Switch
          checked={enabled}
          onChange={onChange}
          className={`${
            enabled ? "bg-primary-900" : "bg-secondary-200"
          } w-11 h-6 relative inline-flex items-center focus:outline-none rounded-full transition-colors`}>
          <span
            className={`${
              // right lang "-translate-x-6"  "-translate-x-1"
              enabled ? "translate-x-6" : "translate-x-1"
            } w-4 h-4 inline-block rounded-full bg-secondary-0 transform transition-transform`}
          />
        </Switch>
      </div>
    </Switch.Group>
  );
};

export default Toggle;

import DatePicker from "react-multi-date-picker";
import persian_fa from "react-date-object/locales/persian_fa";
import persian from "react-date-object/calendars/persian";

const DatePickerField = ({ label, setDate, date }) => {
  return (
    <div>
      <span className="block mb-2 text-secondary-700">{label}</span>
      <DatePicker
        containerClassName="w-full"
        inputClass="textField__input"
        calendarPosition="bottom-center"
        format="YYYY/MM/DD"
        locale={persian}
        calender={persian_fa}
        value={date}
        onChange={(date) => setDate(date)}
      />
    </div>
  );
};

export default DatePickerField;

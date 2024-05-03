import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const GuestsSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  return (
    <div className="flex flex-col gap-4 p-4 bg-slate-200 w-full">
      <h1 className="text-3xl font-bold mb-3">Guests</h1>
      <div className="flex gap-4">
        <label className="text-gray-700 text-sm font-bold flex-1">
          Adult
          <input
            type="number"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("adultCount", { required: "This field is required" })}
          ></input>
          {errors.adultCount && (
            <span className="text-red-500">{errors.adultCount.message}</span>
          )}
        </label>
        <label className="text-gray-700 text-sm font-bold flex-1">
          Children
          <input
            type="number"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("childCount", { required: "This field is required" })}
          ></input>
          {errors.childCount && (
            <span className="text-red-500">{errors.childCount.message}</span>
          )}
        </label>
      </div>
    </div>
  );
};

export default GuestsSection;

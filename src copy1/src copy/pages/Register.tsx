import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { apiClient } from "../api-collection";
import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

export type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { showToast } = useAppContext();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const mutation = useMutation(apiClient.register, {
    onSuccess: async () => {
      showToast({ message: "Registration Success!", type: "SUCCESS" });
      await queryClient.invalidateQueries("validateToken");
      navigate("/");
      console.log("registration successful!");
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
      console.log("error", error);
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });
  return (
    <form className="flex flex-col gap-5" onSubmit={onSubmit}>
      <h1 className="text-3xl font-bold">Create an Account</h1>
      <div className="flex flex-col xl:flex-row  gap-6 ">
        <div className="flex flex-col xl:w-1/2 w-full">
          <h1 className="text-sm font-bold text-gray-600">First Name</h1>
          <input
            type="text"
            className="ring-1 rounded-sm text-left text-black ring-slate-300 text-sm  p-1"
            {...register("firstName", { required: "This field is required" })}
          />
          {errors.firstName && (
            <span className="text-red-500">{errors.firstName.message}</span>
          )}
        </div>
        <div className="flex flex-col xl:w-1/2 w-full ">
          <h1 className="text-sm font-bold text-gray-600">Last Name</h1>
          <input
            type="text"
            className="ring-1 rounded-sm text-left text-black text-sm  ring-slate-300  p-1"
            {...register("lastName", { required: "This field is required" })}
          />
          {errors.lastName && (
            <span className="text-red-500">{errors.lastName.message}</span>
          )}
        </div>
      </div>
      <div className="flex flex-col ">
        <h1 className="font-medium">Email</h1>
        <input
          type="text"
          className="ring-1 rounded-sm text-left text-black  text-sm ring-gray-300 p-1"
          {...register("email", { required: "This field is required" })}
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
      </div>
      <div className="flex flex-col ">
        <h1 className="font-medium">Password</h1>
        <input
          type="password"
          className="ring-1 rounded-sm text-left text-black text-sm ring-gray-300 p-1"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
      </div>

      <div className="flex flex-col">
        <h1 className="font-medium">Confirm Password</h1>
        <input
          type="password"
          className="ring-1 rounded-sm text-left text-black text-sm ring-gray-300 p-1"
          {...register("confirmPassword", {
            validate: (val) => {
              if (!val) {
                return "This field is required";
              } else if (watch("password") !== val) {
                return "Your passwords do no match";
              }
            },
          })}
        />

        {errors.confirmPassword && (
          <span className="text-red-500">{errors.confirmPassword.message}</span>
        )}
      </div>
      <span className="">
        <button
          type="submit"
          className="bg-blue-700 mx-auto p-2 text-xl text-white font-bold"
        >
          Create Account
        </button>
      </span>
    </form>
  );
};

export default Register;

import { useMutation, useQueryClient } from "react-query";
import { apiClient } from "../api-collection";
import { useAppContext } from "../context/AppContext";

const SignOutButton = () => {
  const queryClient = useQueryClient();
  const { showToast } = useAppContext();
  const mutation = useMutation(apiClient.signOut, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("validateToken");
      showToast({ message: "Signed Out!", type: "SUCCESS" });
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const handleClick = () => {
    mutation.mutate();
  };

  return (
    <div
      onClick={handleClick}
      className="flex bg-white items-center text-blue-600 px-3 font-bold hover:bg-gray-100"
    >
      Sign Out
    </div>
  );
};

export default SignOutButton;
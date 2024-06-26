import { RiDeleteBin6Fill } from "react-icons/ri";
import toast from "react-hot-toast";
import { deleteUser, updateRole } from "../../api/auth";


const UserDataRow = ({ idx, user, refetch }) => {
  const handleUpdateRole = async (e, role) => {
    e.preventDefault();
    // console.log(user._id);
    // console.log(role);
     try {
      const data = await updateRole(user?.email, role);
      // console.log(data);
      if (data.modifiedCount > 0) {
        toast.success(`User is now ${role}`);
        refetch()
      } else {
        toast.success("Please, wait for Update!");
      }
    } catch (error) {
      toast.error(error.message);
    } 
  };

const handleDeleteUser =async (e)=>{
  e.preventDefault();
  try {
    const data = await deleteUser(user?._id);
    // console.log(data);
    if (data.deletedCount > 0) {
      toast.success(`${user.role} is now deleted`);
      refetch()
    } else {
      toast.success("Please, wait for Delete!");
    }
  } catch (error) {
    toast.error(error.message);
  }
}

  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {idx + 1}
      </th>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {user?.name}
      </th>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {user?.email}
      </th>
      <th
        scope="row"
        className="capitalize px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {user?.role}
      </th>
      <td className="px-6 py-4 ">
        {user.role !== "admin" && user.role !== "fraud" && (
          <button
            onClick={(e) => handleUpdateRole(e,"admin")}
            className={`text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900`}
          >
            Action
          </button>
        )}
        {user.role === "fraud" && <p className="text-center">Fraud</p>}
      </td>
      <td className="px-6 py-4">
        {user.role !== "agent" &&
          user.role !== "admin" &&
          user.role !== "fraud" && (
            <button
              onClick={(e) => handleUpdateRole(e,"agent")}
              className="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
            >
              Action
            </button>
          )}
        {user.role === "fraud" && <p className="text-center">Fraud</p>}
      </td>
      <td className="px-6 py-4">
        {user.role !== "fraud" &&  user.role !== "admin" &&(
          <button
            onClick={(e) => handleUpdateRole(e,"fraud")}
            className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
          >
            Action
          </button>
        )}
        {user.role === "fraud" && <p className="text-center">Fraud</p>}
      </td>
      <td className="px-6 py-4">
       {user.role !== "admin" && <button
          onClick={(e) => handleDeleteUser(e)}

          className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
        >
          <RiDeleteBin6Fill />
        </button>}
      </td>
    </tr>
  );
};

export default UserDataRow;

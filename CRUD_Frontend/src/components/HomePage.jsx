import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import styles from "../css/HomePage.module.css";
import EditProfilePopup from "./EditProfilePopup";
const HomePage = () => {
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:8000/getUser")
      .then((res) => {
        setUserData(res?.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  const handleEdit = useCallback((user) => {
    setOpen(true);
    setUsers(user);
  }, []);
  const handleDelete = useCallback(async (data) => {
    axios
      .delete(`http://localhost:8000/deleteuser/${data}`)
      .then((res) => {
        console.log(res);
        alert("Done");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-1xl">
            Connecting with Our Extraordinary Community
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore the rich tapestry of our user base, each person bringing a
            unique perspective and passion to our platform.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {userData?.map((users, index) => (
            <li
              key={index}
              className="border-blue-200 bg-violet-200  shadow-lg"
            >
              <div className=" p-5 flex items-center gap-x-6 border ">
                {users?.files ? (
                  <img
                    className="h-16 w-16 rounded-full"
                    src={users?.files}
                    alt=""
                  />
                ) : (
                  <img
                    className="h-16 w-16 rounded-full"
                    src="        data:image/png;base64,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
"
                    alt=""
                  />
                )}

                <div>
                  <span>{users?.createdAt?.split("T")[0]}</span>
                  <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-900">
                    {users?.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {users?.email}
                  </p>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {users?.age}
                  </p>
                </div>
              </div>
              <div className={styles.editDelete_div}>
                <button
                  className="text-green-500"
                  onClick={() => handleEdit(users)}
                >
                  Edit
                </button>
                <button
                  className="text-red-500"
                  onClick={() => handleDelete(users?._id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
        <EditProfilePopup setOpen={setOpen} open={open} users={users} />
      </div>
    </div>
  );
};

export default HomePage;

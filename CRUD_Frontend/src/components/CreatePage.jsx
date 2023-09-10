import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { PhotoIcon } from "@heroicons/react/24/solid";
const CreatePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    files: {}
  });

  console.log(formData.files, "Here")

  const handleAddUser = useCallback(
    async (e) => {
      e.preventDefault();
      const payload = {
        name: formData.name,
        email: formData.email,
        age: formData.age,
        files: formData.files,
      };
      axios
        .post("http://localhost:8000/api/crud/adduser", payload)
        .then((res) => {
          console.log(res);

          setFormData({
            name: "",
            email: "",
            age: "",
            files: null,
          });

        })
        .catch((err) => {
          console.log(err);
        });
    },
    [formData.name, formData.email, formData.age, formData.files]
  );
 
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-40 w-50"
          src="data:image/png;base64,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"
          alt="Your Company"
        />
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleAddUser}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="name"
                autoComplete="name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="number"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Age
              </label>
            </div>
            <div className="mt-2">
              <input
                id="number"
                name="number"
                type="number"
                autoComplete="number"
                required
                value={formData.age}
                onChange={(e) =>
                  setFormData({ ...formData, age: e.target.value })
                }
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="col-span-full">
            <label
              htmlFor="cover-photo"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Cover photo
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-2 py-0">
              <div className="text-center">
                <PhotoIcon
                  className="mx-auto h-1 w-12 text-gray-300"
                  aria-hidden="true"
                />
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      // value={formData.files}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          files: e.target.files[0],
                        });
                      }}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Redirect to home page
          <NavLink
            to="/home"
            className="mx-2 font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            click me!
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default CreatePage;


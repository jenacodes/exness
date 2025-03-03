import { useFormik } from "formik";

const LoginPage = () => {
  //Formik logic
  const formik = useFormik({
    initialValues: {
      email: "",
    },
  });

  console.log(formik.values);

  return (
    <div>
      <form action="">
        <div className="mb-4">
          <label className="block pb-2" htmlFor="email">
            Your Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder=""
            className="border border-gray-300 p-2 rounded-md w-full focus:border-green-500"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </div>
        <div className="mb-4 mt-6">
          <label className="block pb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder=""
            className="border border-gray-300 p-2 rounded-md w-full focus:border-green-500"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </div>
        <button className="inline-flex items-center justify-center w-full bg-primary px-5 py-1.5 rounded-md cursor-pointer">
          Continue
        </button>
      </form>
      <div className="flex whitespace-nowrap my-4">
        <div className="relative w-full border-t border-t-gray-300 border-opacity-12 top-1/2 translate-y-1/2"></div>
        <span className="px-2">Or sign in with</span>
        <div className="relative w-full border-t border-t-gray-300 border-opacity-12 top-1/2 translate-y-1/2"></div>
      </div>
      <button className="inline-flex items-center justify-center min-w-20 min-h-10 py-1 px-5 bg-gray-200 w-full text-custom-blue rounded-lg cursor-pointer ">
        <i className="ri-google-fill"></i>
        <span>Google</span>
      </button>
    </div>
  );
};

export default LoginPage;

import { useFormik } from "formik";
import * as Yup from "yup";
import CountrySelect from "../components/form/CountrySelect";
// import { useState } from "react";

const RegisterPage = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      country: "",
      terms: false,
    },

    //Validate Form

    validationSchema: Yup.object({
      name: Yup.string(),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Password is too short")
        .matches(/[A-Z]/)
        .matches(/[a-z]/)
        .matches(/[0-9]/)
        .matches(/[!@#$%^&*(),.?":{}|<>]/),
      country: Yup.string().required("Please select your country"),
      terms: Yup.boolean().oneOf(
        [true],
        "For regulatory reasons, we do not accept citizens or residents of the United States"
      ),
    }),

    //submit Form

    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log(formik.values);

  // Get the current password from Formik
  const password = formik.values.password;

  // Define each password criterion:
  const isLengthValid = password.length >= 8 && password.length <= 15;
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  // const [isChecked, setIsChecked] = useState(false);

  // Toggle the checkbox and update Formik's value as well
  // const toggleCheck = () => {
  //   const newCheckedState = !isChecked;
  //   setIsChecked(newCheckedState);
  //   formik.setFieldValue("terms", newCheckedState);
  //   formik.setFieldTouched("terms", true);
  // };

  return (
    <div>
      <form action="" onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label
            className="block pb-2 text-[12px] text-gray-500"
            htmlFor="country"
          >
            Country Region of Residence
          </label>
          <CountrySelect
            value={formik.values.country}
            onChange={(newValue) => {
              formik.setFieldValue("country", newValue);
              formik.setFieldTouched("country", true); // Mark as touched when changing
            }}
            onBlur={() => formik.setFieldTouched("country", true)} // Mark as touched when leaving
            className={`border border-gray-300 p-2 rounded-md w-full focus:border-green-500 text-sm ${
              formik.touched.country && formik.errors.country
                ? "border border-red-400"
                : ""
            }`}
          />

          {/* Error message display */}
          {formik.touched.country && formik.errors.country && (
            <p className="text-[12px] text-red-400 mt-1">
              {formik.errors.country}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block pb-2 text-[12px] text-gray-500"
            htmlFor="emailSignup"
          >
            Your Email Address
          </label>
          <input
            type="email"
            name="email"
            id="emailSignup"
            placeholder=""
            className={`border border-gray-300 p-2 rounded-md w-full focus:border-green-500 text-sm ${
              formik.errors.email && formik.touched.email
                ? "border border-red-400"
                : ""
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <p
            className={`text-[12px] ${
              formik.touched.email && formik.errors.email ? "text-red-400" : ""
            }`}
          >
            {formik.touched.email && formik.errors.email
              ? formik.errors.email
              : ""}
          </p>
        </div>
        <div className="mb-4 mt-6">
          <label
            className="block pb-2 text-[12px] text-gray-500"
            htmlFor="passwordSignup"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="passwordSignup"
            placeholder=""
            className={`border border-gray-300 p-2 rounded-md w-full focus:border-green-700 text-sm ${
              formik.touched.password ? "border border-red-400" : ""
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {/* <p
            className={`text-sm ${
              formik.touched.password && formik.errors.password
                ? "text-red-500"
                : ""
            }`}
          >
            {formik.touched.password && formik.errors.password
              ? formik.errors.password
              : ""}
          </p> */}

          {/* {Password errors} */}
          <div>
            <div
              className={`text-[12px] mb-1 ${
                !formik.touched.password
                  ? "text-gray-500"
                  : isLengthValid
                  ? "text-green-500"
                  : "text-red-400"
              }`}
            >
              <i
                className={`ri-checkbox-blank-circle-line ${
                  !formik.touched.password
                    ? "ri-checkbox-blank-circle-line"
                    : isLengthValid
                    ? "ri-checkbox-circle-line"
                    : "ri-close-line"
                }`}
              ></i>
              <span className="ml-0.5">Between 8-15 characters</span>
            </div>
            <div
              className={`text-[12px] mb-1 ${
                !formik.touched.password
                  ? "text-gray-500"
                  : hasUpper && hasLower
                  ? "text-green-500"
                  : "text-red-400"
              }`}
            >
              <i
                className={`ri-checkbox-blank-circle-line ${
                  !formik.touched.password
                    ? "ri-checkbox-blank-circle-line"
                    : hasLower && hasUpper
                    ? "ri-checkbox-circle-line"
                    : "ri-close-line"
                }`}
              ></i>
              <span>At least one upper and one lower case letter</span>
            </div>
            <div
              className={`text-[12px] mb-1 ${
                !formik.touched.password
                  ? "text-gray-500"
                  : hasNumber
                  ? "text-green-500"
                  : "text-red-400"
              }`}
            >
              <i
                className={`ri-checkbox-blank-circle-line ${
                  !formik.touched.password
                    ? "ri-checkbox-blank-circle-line"
                    : hasNumber
                    ? "ri-checkbox-circle-line"
                    : "ri-close-line"
                }`}
              ></i>
              <span>At least one number</span>
            </div>
            <div
              className={`text-[12px] mb-1 ${
                !formik.touched.password
                  ? "text-gray-500"
                  : hasSpecial
                  ? "text-green-500"
                  : "text-red-400"
              }`}
            >
              <i
                className={`ri-checkbox-blank-circle-line ${
                  !formik.touched.password
                    ? "ri-checkbox-blank-circle-line"
                    : hasNumber
                    ? "ri-checkbox-circle-line"
                    : "ri-close-line"
                }`}
              ></i>
              <span>At least one special character</span>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="inline-flex items-center justify-center w-full bg-primary px-5 py-1.5 rounded-md text-black cursor-pointer"
        >
          Continue
        </button>
      </form>
      <div className="flex whitespace-nowrap my-4">
        <div className="relative w-full border-t border-t-gray-300 border-opacity-12 top-1/2 translate-y-1/2"></div>
        <span className="px-2">Or sign in with</span>
        <div className="relative w-full border-t border-t-gray-300 border-opacity-12 top-1/2 translate-y-1/2"></div>
      </div>
      <button className="inline-flex items-center justify-center min-w-20 min-h-10 py-1 px-5 bg-gray-200 w-full text-custom-blue rounded-lg cursor-pointer gap-1.5">
        <i className="ri-google-fill"></i>
        <span>Google</span>
      </button>

      {/* {patners code} */}
      <div className="flex items-center gap-2 my-8 text-sm">
        <span>Partner&apos;s code</span>
        <button className="cursor-pointer">
          <i className="ri-arrow-down-s-line"></i>
        </button>
      </div>

      {/* {Terms of service} */}

      <div className="mb-4">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="terms"
            className="h-6 w-6 focus:border-green-500"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            checked={formik.values.terms}
          />
          <p className="text-sm">
            I declare and confirm that I am not a citizen or resident of the US
            for tax purposes.
          </p>
        </div>
        <p
          className={`text-[12px] ml-7 ${
            formik.touched.terms && formik.errors.terms ? "text-red-400" : ""
          }`}
        >
          {formik.touched.terms && formik.errors.terms
            ? formik.errors.terms
            : ""}
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;

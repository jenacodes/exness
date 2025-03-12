import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import CountrySelect from "../components/form/CountrySelect";
// import Button from "../components/buttons/Button";
// import SignInButton from "../components/buttons/SignInButton";

const RegisterPage = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      country: "",
      terms: false,
    },
    validationSchema: Yup.object({
      name: Yup.string(),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Password is too short")
        .matches(/[A-Z]/, "Must contain at least one uppercase letter")
        .matches(/[a-z]/, "Must contain at least one lowercase letter")
        .matches(/[0-9]/, "Must contain at least one number")
        .matches(
          /[!@#$%^&*(),.?":{}|<>]/,
          "Must contain at least one special character"
        ),
      country: Yup.string().required("Please select your country"),
      terms: Yup.boolean().oneOf(
        [true],
        "For regulatory reasons, we do not accept citizens or residents of the United States"
      ),
    }),
    onSubmit: async (values) => {
      // Replace this with your actual sign-up logic (e.g., API call)
      console.log("Registering user with values:", values);
      // Simulate a successful signup (you can replace this with your API response)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // On successful sign-up, redirect to the dashboard
      navigate("/dashboard");
    },
  });

  // Destructure frequently used Formik props for clarity
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
  } = formik;

  // Password criteria as an array for easy mapping
  const password = values.password;

  const criteria = [
    {
      label: "Between 8-15 characters",
      valid: password.length >= 8 && password.length <= 15,
    },
    {
      label: "At least one upper and one lower case letter",
      valid: /[A-Z]/.test(password) && /[a-z]/.test(password),
    },
    {
      label: "At least one number",
      valid: /[0-9]/.test(password),
    },
    {
      label: "At least one special character",
      valid: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    },
  ];

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Country Select */}
        <div className="mb-4">
          <label
            htmlFor="country"
            className="block pb-2 text-[12px] text-gray-500"
          >
            Country Region of Residence
          </label>
          <CountrySelect
            value={values.country}
            onChange={(newValue) => {
              setFieldValue("country", newValue);
              formik.setFieldTouched("country", true);
            }}
            onBlur={() => formik.setFieldTouched("country", true)}
            className={`border border-gray-300 p-2 rounded-md w-full focus:border-green-500 text-sm ${
              touched.country && errors.country ? "border-red-400" : ""
            }`}
          />
          {touched.country && errors.country && (
            <p className="text-[12px] text-red-400 mt-1">{errors.country}</p>
          )}
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label
            htmlFor="emailSignup"
            className="block pb-2 text-[12px] text-gray-500"
          >
            Your Email Address
          </label>
          <input
            type="email"
            name="email"
            id="emailSignup"
            className={`border border-gray-300 p-2 rounded-md w-full focus:border-green-500 text-sm ${
              errors.email && touched.email ? "border-red-400" : ""
            }`}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {touched.email && errors.email && (
            <p className="text-[12px] text-red-400 mt-1">{errors.email}</p>
          )}
        </div>

        {/* Password Input */}
        <div className="mb-4 mt-6">
          <label
            htmlFor="passwordSignup"
            className="block pb-2 text-[12px] text-gray-500"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="passwordSignup"
            className={`border border-gray-300 p-2 rounded-md w-full focus:border-green-700 text-sm ${
              touched.password ? "border-red-400" : ""
            }`}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {/* Password Criteria */}
          <div>
            {criteria.map((item, index) => {
              // Show validation if the password field has been touched or if there's some input
              const shouldShowValidation = touched.password || password;
              const textColor = shouldShowValidation
                ? item.valid
                  ? "text-green-500"
                  : "text-red-400"
                : "text-gray-500";
              const iconClass = shouldShowValidation
                ? item.valid
                  ? "ri-checkbox-circle-line"
                  : "ri-close-line"
                : "ri-checkbox-blank-circle-line";

              return (
                <div key={index} className={`text-[12px] mb-1 ${textColor}`}>
                  <i className={iconClass}></i>
                  <span className="ml-0.5">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Terms Checkbox */}
        <div className="mb-4">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="terms"
              className="h-6 w-6 focus:border-green-500"
              onChange={handleChange}
              onBlur={handleBlur}
              checked={values.terms}
            />
            <p className="text-sm">
              I declare and confirm that I am not a citizen or resident of the
              US for tax purposes.
            </p>
          </div>
          {touched.terms && errors.terms && (
            <p className="text-[12px] ml-7 text-red-400">{errors.terms}</p>
          )}
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center w-full bg-primary px-5 py-1.5 rounded-md text-black cursor-pointer"
        >
          Continue
        </button>
      </form>

      {/* Social Login and Additional Options */}
      <div className="flex whitespace-nowrap my-4">
        <div className="relative w-full border-t border-t-gray-300 border-opacity-12 top-1/2 translate-y-1/2"></div>
        <span className="px-2">Or sign in with</span>
        <div className="relative w-full border-t border-t-gray-300 border-opacity-12 top-1/2 translate-y-1/2"></div>
      </div>
      <button className="inline-flex items-center justify-center min-w-20 min-h-10 py-1 px-5 bg-gray-200 w-full text-custom-blue rounded-lg cursor-pointer gap-1.5">
        <i className="ri-google-fill"></i>
        <span>Google</span>
      </button>

      {/* Partner's Code */}
      <div className="flex items-center gap-2 my-8 text-sm">
        <span>Partner&apos;s code</span>
        <button className="cursor-pointer">
          <i className="ri-arrow-down-s-line"></i>
        </button>
      </div>
    </div>
  );
};

export default RegisterPage;

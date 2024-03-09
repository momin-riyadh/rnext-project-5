import Field from "../common/Field.jsx";
import {useForm} from "react-hook-form";

function LoginForm() {

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const submitForm = (formData) => {
        console.log(formData);
    }

    return (
        <form className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]" onSubmit={handleSubmit(submitForm)}>
            {/*email*/}

            <Field label="Email">
                <input
                    {...register("email", {required: "Email Id is Required"})}
                    className={`auth-input ${!!errors.email ? "border-red-500" : "border-gray-200 "}`}
                    name="email"
                    type="email"
                    id="email"
                />
            </Field>
            {/*password */}
            <div className="form-control">
                <label className="auth-label" htmlFor="email">Password</label>
                <input
                    className="auth-input"
                    name="password"
                    type="password"
                    id="password"
                />
            </div>
            {/*Submit*/}
            <button
                className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
                type="submit"
            >
                Login
            </button>
        </form>
    );
}

export default LoginForm;

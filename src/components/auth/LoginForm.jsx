import Field from "../common/Field.jsx";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";


function LoginForm() {
const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const submitForm = (formData) => {
        console.log(formData);
        navigate("/")
    }

    return (
        <form className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]" onSubmit={handleSubmit(submitForm)}>
            {/*password*/}

            <Field label="Email" error={errors.email}>
                <input
                    {...register("email", {required: "Email Id is Required"})}
                    className={`auth-input ${!!errors.email ? "border-red-500" : "border-gray-200 "}`}
                    name="email"
                    type="email"
                    id="email"
                />
            </Field>
            {/*password */}

            <Field label="Password" error={errors.password}>
                <input
                    {...register("password", {
                        required: "Email Id is Required",
                        minLength: {
                            value: 8,
                            message: "Your password must be at least 8 characters"
                        },
                    })}
                    className={`auth-input ${!!errors.password ? "border-red-500" : "border-gray-200 "}`}
                    name="password"
                    type="password"
                    id="password"
                />
            </Field>

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

import { CgMail } from "react-icons/cg";
import { RiLockPasswordLine } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { asyncLoginUser } from "../store/actions/UserAction";

const Login = ({ onSwitch }) => {
  const { handleSubmit, register, reset } = useForm();
  const dispatch = useDispatch();

  const loginHandler = (userData) => {
    dispatch(asyncLoginUser(userData));
    reset();
  };

  return (
    <div className="lg:flex lg:w-[50%] lg:justify-center my-auto -translate-y-[8%] text-[clamp(10px,4vw,15px)] md:text-[17px] lg:text-[clamp(10px,3vw,16px)] xl:text-[clamp(11px,4vw,17px)]">
      <div className="w-[22em]">
        <h1 className="text-center font-semibold text-[2.5em] mb-12">
          Sign In
        </h1>
        <form
          onSubmit={handleSubmit(loginHandler)}
          className="flex flex-col gap-[1em]"
        >
          <div className="w-[22em] flex items-center gap-3 px-6 py-3 outline outline-gray-400 rounded-full">
            <span className="text-gray-700 text-xl">
              <CgMail />
            </span>
            <input
              required
              {...register("email", { required: "Email is required" })}
              className="w-[17em] text-[1.1em] outline-none"
              type="email "
              placeholder="Email Id"
            />
          </div>

          <div className="w-[22em] flex items-center gap-3 px-6 py-3 outline outline-gray-400 rounded-full">
            <span className="text-gray-700 text-xl">
              <RiLockPasswordLine />
            </span>
            <input
              required
              {...register("password", { required: "Password is required" })}
              className="w-[17em] text-[1.1em] outline-none"
              type="password"
              placeholder="Password"
            />
          </div>
          <small className="text-[0.75em] text-right text-black">
            Forgotten Password?
          </small>

          <button className="py-3 bg-black text-white text-[1.1em] rounded-full">
            Sign in
          </button>
        </form>
        <div className="flex items-center my-6">
          <hr className="w-full text-gray-300" />
          <span className="px-2 text-[0.9em] font-['Gilroy'] text-gray-500 font-semibold">
            Or
          </span>
          <hr className="w-full text-gray-300" />
        </div>
        <h5 className="text-[0.8em] text-gray-700 text-center">
          New to Vensa.co?{" "}
          <span
            onClick={onSwitch}
            className="text-blue-700 font-bold cursor-pointer"
          >
            Register
          </span>
        </h5>
      </div>
    </div>
  );
};

export default Login;

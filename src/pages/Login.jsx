
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200">
            <div className="card w-full max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-center">Login</h2>

                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-4">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary w-full">Login</button>
                        </div>


                    </form>

                    <p className="text-sm text-center mt-4">
                        Don't have an account?{" "}
                        <Link to="/register" className="text-primary font-semibold">
                            Register here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

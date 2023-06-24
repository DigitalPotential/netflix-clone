import Image from "next/image";
import logo from "public/images/logo.png";
import Input from "../../../components/Input";
import { useState } from "react";

export default function Auth() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div
            className="relative h-full w-full bg-no-repeat bg-center bg-fixed bg-cover"
            style={{ backgroundImage: `url('/assets/images/hero.jpg')` }}
        >
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <Image src={logo} alt="site-logo" className="h-12" />
                </nav>
                <div>
                    <div className="flex justify-center">
                        <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                            <h2 className="text-white text-4xl mb-8 font-semibold">
                                Sign In
                            </h2>
                            <div className="flex flex-col gap-4">
                                <Input
                                    id="name"
                                    label="Username"
                                    onChange={(ev: any) =>
                                        setName(ev.target.value)
                                    }
                                    value="{name}"
                                />
                                <Input
                                    id="email"
                                    label="Email"
                                    onChange={(ev: any) =>
                                        setEmail(ev.target.value)
                                    }
                                    type="email"
                                    value="{email}"
                                />
                                <Input
                                    id="password"
                                    label="Password"
                                    onChange={(ev: any) =>
                                        setPassword(ev.target.value)
                                    }
                                    type="password"
                                    value="{password}"
                                />
                            </div>
                            <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
                                Login
                            </button>
                            <p className="text-neutral-500 mt-12">
                                First time using Netflix?
                                <span className="text-white ml-1 hover:underline cursor-pointer">
                                    Create an account
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

"use client";

import Image from "next/image";
import logo from "public/images/logo.png";
import Input from "../../../components/Input";
import { useCallback, useState } from "react";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function Auth() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const [variant, setVariant] = useState("login");

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) =>
            currentVariant === "login" ? "register" : "login"
        );
    }, []);

    const login = useCallback(async () => {
        try {
            await signIn("credentials", {
                email,
                password,
                callbackUrl: "/",
            });
            router.push("/");
        } catch (error) {
            console.error(error);
        }
    }, [email, password, router]);

    const register = useCallback(async () => {
        try {
            await axios.post("/api/register", {
                email,
                name,
                password,
            });
            login();
        } catch (error) {
            console.log(error);
        }
    }, [email, name, password, login]);

    return (
        <>
            <div
                className="relative h-full w-full bg-no-repeat bg-center bg-fixed bg-cover"
                style={{ backgroundImage: `url('/images/hero.jpg')` }}
            >
                <div className="bg-black w-full h-full lg:bg-opacity-50">
                    <nav className="px-12 py-5">
                        <Image src={logo} alt="site-logo" className="h-12" />
                    </nav>
                    <div>
                        <div className="flex justify-center">
                            <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                                <h2 className="text-white text-4xl mb-8 font-semibold">
                                    {variant === "login"
                                        ? "Sign in"
                                        : "Register"}
                                </h2>
                                <div className="flex flex-col gap-4">
                                    {variant === "register" && (
                                        <Input
                                            id="name"
                                            type="text"
                                            label="Username"
                                            value={name}
                                            onChange={(e: any) =>
                                                setName(e.target.value)
                                            }
                                        />
                                    )}
                                    <Input
                                        id="email"
                                        type="email"
                                        label="Email address or phone number"
                                        value={email}
                                        onChange={(e: any) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                    <Input
                                        type="password"
                                        id="password"
                                        label="Password"
                                        value={password}
                                        onChange={(e: any) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                </div>
                                <button
                                    onClick={
                                        variant === "login" ? login : register
                                    }
                                    className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
                                >
                                    {variant === "login" ? "Login" : "Sign up"}
                                </button>
                                <div className="flex flex-row items-center justify-center gap-10 mt-6">
                                    <div
                                        onClick={() =>
                                            signIn("google", {
                                                callbackUrl: "/",
                                            })
                                        }
                                        className="w-10 h-10 bg-white flex rounded-full items-center justify-center cursor-pointer hover:opacity-80"
                                    >
                                        <FcGoogle size={30} />
                                    </div>
                                    <div
                                        onClick={() =>
                                            signIn("github", {
                                                callbackUrl: "/",
                                            })
                                        }
                                        className="w-10 h-10 bg-white flex rounded-full items-center justify-center cursor-pointer hover:opacity-80"
                                    >
                                        <FaGithub size={30} />
                                    </div>
                                </div>
                                <p className="text-neutral-500 mt-12">
                                    {variant === "login"
                                        ? "First time using Netflix?"
                                        : "Already have an account?"}
                                    <span
                                        onClick={toggleVariant}
                                        className="text-white ml-1 hover:underline cursor-pointer"
                                    >
                                        {variant === "login"
                                            ? "Create an account"
                                            : "Login"}
                                    </span>
                                    .
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
//

"use client";

import Image from "next/image";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt with:", { email, password });
  };

  return (
    <div className="flex h-screen ">
      {/* Left half - Image */}
      <div className="hidden md:flex flex-col md:w-1/2 bg-primary items-center justify-center">
        <Image
          src={"/login-desktop.png"}
          width={250}
          height={250}
          alt="Login Desktop"
        />

        <h1 className="text-on-primary my-6 text-xl">
          Individually, we are a drop.
        </h1>
        <h1 className="text-on-primary text-xl">Together, we are an ocean.</h1>
      </div>

      {/* Right half - Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-surface p-8">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-on-surface">
            Welcome Back
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-on-surface-variant mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-outline rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-on-surface-variant mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-outline rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-on-primary font-medium py-2 px-4 rounded-md hover:bg-primary-container hover:text-on-primary-container transition-colors"
            >
              Sign In
            </button>
          </form>
          <p className="mt-4 text-sm text-on-surface-variant">
            Don't have an account?{" "}
            <a href="#" className="text-primary hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

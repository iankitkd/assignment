"use client"

import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";

// signup form Zod schema
const signupSchema = z.object({
    name: z.string().nonempty("Name is required"),
    email: z.string()
      .nonempty("Email is required")
      .email("Invalid email format"),
    password: z.string()
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

type SignupFormValues = z.infer<typeof signupSchema>;

export default function SignupForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data: SignupFormValues) => {
    console.log("Form Data", data);
    router.push('/dashboard');
  };

  return (
    <div className="flex flex-col justify-center items-center w-full px-4 md:px-14 py-2 bg-gradient-to-br from-top-color via-middle-color to-bottom-color">
      <img src="/logo.png" alt="Gigfloww Logo" className="w-32 filter invert hue-rotate-180" />
      <h1 className="text-2xl font-medium mb-4">Welcome to Gigfloww</h1>
      <p className="text-3xl font-medium text-secondary">Register</p>
      <p className="text-xl text-text-muted mb-4">Seamless HR operations start now!</p>

      <form className="space-y-4 w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <label htmlFor="name" className="font-medium text-lg ml-2">Name</label>
          <input
            {...register("name")}
            id="name"
            type="text"
            placeholder="Your name"
            className="w-full bg-white border-1 border-border rounded-full p-3"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="font-medium text-lg ml-2">Email</label>
          <input
            {...register("email")}
            type="email"
            id="email"
            placeholder="Your email"
            className="w-full bg-white border-1 border-border rounded-full p-3"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="password" className="font-medium text-lg ml-2">Password</label>
          <input
            {...register("password")}
            type="password"
            id="password"
            placeholder="Your password"
            className="w-full bg-white border-1 border-border rounded-full p-3"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="confirmPassword" className="font-medium text-lg ml-2">Confirm Password</label>
          <input
            {...register("confirmPassword")}
            type="password"
            id="confirmPassword"
            placeholder="Re confirm your password"
            className="w-full bg-white border-1 border-border rounded-full p-3"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-left-color to-right-color text-white text-2xl font-medium p-3 rounded-lg hover:opacity-90 transition"
        >
          Register
        </button>
      </form>

      <p className="mt-4 text-center text-muted text-lg">
        Already on Gigfloww?{" "}
        <Link href="#" className="text-right hover:underline">
          Log in
        </Link>
      </p>

      <div className="flex flex-col md:flex-row justify-around gap-2 w-full mt-6">
        <button className="flex items-center justify-center gap-2 border border-border rounded-full p-2 hover:bg-gray-50 transition">
          <Image src="/google.svg" alt="Google Icon" height={32} width={32} />
          Register with Google
        </button>
        <button className="flex items-center justify-center gap-2 border border-border rounded-full p-2 hover:bg-gray-50 transition">
          <Image src="/apple.svg" alt="Apple Icon" height={32} width={32} />
          Register with Apple
        </button>
      </div>
    </div>
  );
}

"use client";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useForm } from "react-hook-form";

export default function LoginPage() {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const onSubmit = async (data: any) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      alert("Login exitoso");
    } catch (err) {
      setError("Correo o contraseña inválidos");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 max-w-sm mx-auto">
      <h1 className="text-xl font-bold mb-4">Login</h1>
      <input {...register("email")} placeholder="Email" className="mb-2 w-full border p-2" />
      <input {...register("password")} type="password" placeholder="Contraseña" className="mb-2 w-full border p-2" />
      {error && <p className="text-red-500">{error}</p>}
      <button className="bg-black text-white px-4 py-2 w-full">Ingresar</button>
    </form>
  );
}
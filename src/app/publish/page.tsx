"use client";
import { useForm } from "react-hook-form";

export default function PublishPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) alert("Producto publicado");
    else alert("Error al publicar");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Publicar Producto</h1>
      <input {...register("title")} placeholder="Título" className="mb-2 w-full border p-2" />
      <textarea {...register("description")} placeholder="Descripción" className="mb-2 w-full border p-2" />
      <input type="number" {...register("price")} placeholder="Precio" className="mb-2 w-full border p-2" />
      <input {...register("image")} placeholder="URL Imagen" className="mb-2 w-full border p-2" />
      <button className="bg-blue-600 text-white px-4 py-2 w-full">Publicar</button>
    </form>
  );
}

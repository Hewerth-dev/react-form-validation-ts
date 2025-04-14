"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

type Form = {
  name: string;
  email: string;
  password: string;
};

export default function Form() {
  const [form, setForm] = useState<Form>({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Partial<Form>>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors: Partial<Form> = {};
    if (!form.name) newErrors.name = "name requiered";
    if (!form.email.includes("@")) newErrors.email = "email incorrect";
    if (form.password.length < 6)
      newErrors.password = "password required min 6 characteres";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      alert("submitted form");
      console.log(form);
    }
  };
  return (
    <main className="max-w-md mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Register Form</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="name"
          value={form.name}
          onChange={handleChange}
          className="border px-3 py-2 rounded"
        />
        {errors?.name && <p className="text-red-500">{errors.name}</p>}
        <input
          type="email"
          name="email"
          placeholder="email"
          value={form.email}
          onChange={handleChange}
          className="border px-3 py-2 rounded"
        />
        {errors?.email && <p className="text-red-500">{errors.email}</p>}

        <input
          type="password"
          name="password"
          placeholder="password"
          value={form.password}
          onChange={handleChange}
          className="border px-3 py-2 rounded"
        />
        {errors?.password && <p className="text-red-500">{errors.password}</p>}

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            Register
        </button>
      </form>
    </main>
  );
}

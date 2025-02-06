import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { createMenuAPI } from "../services/menuItemServices";

const AddMenu = () => {
  const createMenuMutation = useMutation({
    mutationFn: createMenuAPI,
    onSuccess: () => {
      alert("Menu created successfully!");
    },
    onError: (error) => {
      alert(error?.response?.data?.error || "Failed to create menu");
    },
  });

  const menuFormik = useFormik({
    initialValues: { name: "", description: "" },
    validationSchema: Yup.object({
      name: Yup.string().required("Menu name is required"),
      description: Yup.string().required("Description is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      createMenuMutation.mutate(values);
      resetForm();
    },
  });

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold">Create New Menu</h2>
      <form
        onSubmit={menuFormik.handleSubmit}
        className="space-y-4 bg-white shadow-md p-4 rounded-lg"
      >
        <input
          name="name"
          {...menuFormik.getFieldProps("name")}
          placeholder="Menu Name"
          className="border p-2 w-full rounded"
        />
        {menuFormik.touched.name && menuFormik.errors.name && (
          <p className="text-red-500">{menuFormik.errors.name}</p>
        )}

        <textarea
          name="description"
          {...menuFormik.getFieldProps("description")}
          placeholder="Menu Description"
          className="border p-2 w-full rounded"
        />
        {menuFormik.touched.description && menuFormik.errors.description && (
          <p className="text-red-500">{menuFormik.errors.description}</p>
        )}

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full"
          disabled={createMenuMutation.isLoading}
        >
          {createMenuMutation.isLoading ? "Creating..." : "Create Menu"}
        </button>
      </form>
    </div>
  );
};

export default AddMenu;

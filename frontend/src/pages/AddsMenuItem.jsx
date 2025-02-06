import React from "react";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { createMenuItemAPI } from "../services/menuServices";

const AddsMenuItem = () => {
  const { menuId } = useParams();

  const createMenuItemMutation = useMutation({
    mutationFn: (values) => createMenuItemAPI(values, menuId),
    onSuccess: () => {
      alert("Menu item added successfully!");
    },
    onError: (error) => {
      alert(error?.response?.data?.error || "Failed to add menu item");
    },
  });

  const menuItemFormik = useFormik({
    initialValues: { name: "", description: "", price: "" },
    validationSchema: Yup.object({
      name: Yup.string().required("Item name is required"),
      description: Yup.string().required("Description is required"),
      price: Yup.number()
        .required("Price is required")
        .positive("Price must be a positive number"),
    }),
    onSubmit: (values, { resetForm }) => {
      createMenuItemMutation.mutate(values);
      resetForm();
    },
  });

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold">Add Menu Items</h2>
      <form
        onSubmit={menuItemFormik.handleSubmit}
        className="space-y-4 bg-white shadow-md p-4 rounded-lg"
      >
        <input
          name="name"
          {...menuItemFormik.getFieldProps("name")}
          placeholder="Item Name"
          className="border p-2 w-full rounded"
        />
        {menuItemFormik.touched.name && menuItemFormik.errors.name && (
          <p className="text-red-500">{menuItemFormik.errors.name}</p>
        )}

        <textarea
          name="description"
          {...menuItemFormik.getFieldProps("description")}
          placeholder="Item Description"
          className="border p-2 w-full rounded"
        />
        {menuItemFormik.touched.description &&
          menuItemFormik.errors.description && (
            <p className="text-red-500">{menuItemFormik.errors.description}</p>
          )}

        <input
          type="number"
          name="price"
          {...menuItemFormik.getFieldProps("price")}
          placeholder="Price"
          className="border p-2 w-full rounded"
        />
        {menuItemFormik.touched.price && menuItemFormik.errors.price && (
          <p className="text-red-500">{menuItemFormik.errors.price}</p>
        )}

        <button
          type="submit"
          className="bg-green-500 text-white p-2 rounded w-full"
          disabled={createMenuItemMutation.isLoading}
        >
          {createMenuItemMutation.isLoading ? "Adding..." : "Add Menu Item"}
        </button>
      </form>
    </div>
  );
};

export default AddsMenuItem;

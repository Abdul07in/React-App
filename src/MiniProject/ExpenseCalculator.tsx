import React, { FormEvent, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  description: z.string().min(3),
  amount: z.number(),
  category: z.string().min(3, { message: "Please select Category" }),
});

type FormData = z.infer<typeof schema>;

const ExpenseCalculator = () => {
  const [expenseList, setExpenseList] = useState<FormData[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setExpenseList((prevList) => [...prevList, data]);
  };

  const removeItem = (index: number) => {
    setExpenseList((prevList) => prevList.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-2">
                <label htmlFor="description">Description</label>
                <input
                  autoComplete="off"
                  {...register("description")}
                  type="text"
                  id="description"
                  className="form-control mt-1"
                />
                {errors.description && (
                  <p className="text-danger">{errors.description.message}</p>
                )}
              </div>
              <div className="mb-2">
                <label htmlFor="amount">Amout</label>
                <input
                  autoComplete="off"
                  type="text"
                  className="form-control mt-1"
                  id="amount"
                  {...register("amount", { valueAsNumber: true })}
                />
                {errors.amount && (
                  <p className="text-danger">{errors.amount.message}</p>
                )}
              </div>
              <div className="mb-2">
                <label htmlFor="category">Category</label>
                <select
                  className="form-select mt-1"
                  id="category"
                  {...register("category")}
                >
                  <option value="">Select</option>
                  <option>Grocery</option>
                  <option>Utilities</option>
                  <option>Entertainment</option>
                </select>
                {errors.category && (
                  <p className="text-danger">{errors.category.message}</p>
                )}
              </div>
              <div className="mb-2">
                <button disabled={!isValid} className="btn btn-primary">
                  Sumbit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm-12 ">
            <select className="form-select mt-1" id="categoryTable">
              <option>All</option>
              <option>Grocery</option>
              <option>Utilities</option>
              <option>Entertainment</option>
            </select>
            <table className="table table-bordered mt-2">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Category</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {expenseList.length > 0 ? (
                  expenseList.map((item, index) => (
                    <tr key={index}>
                      <td>{item.description}</td>
                      <td>${item.amount.toFixed(2)}</td>
                      <td>{item.category}</td>
                      <td>
                        <button
                          onClick={(event) => removeItem(index)}
                          className="btn btn-sm btn-outline-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4}>
                      <div className="text-center text-mute">
                        Please Enter Data
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>

              <tfoot>
                <tr>
                  <td>Total</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpenseCalculator;

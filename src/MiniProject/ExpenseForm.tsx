import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "./category";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description Should be atleast 3 Characters" })
    .max(50),
  amount: z
    .number({ invalid_type_error: "Amount is required" })
    .min(0.01)
    .max(100_000),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Category is Required" }),
  }),
});

type ExpenseFormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: ExpenseFormData) => void;
}

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>({
    resolver: zodResolver(schema),
  });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div className="mb-2">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          autoComplete="off"
          type="text"
          id="description"
          {...register("description")}
          className="form-control mt-1"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-2">
        <label htmlFor="amount" className="form-label">
          Amout
        </label>
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
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          className="form-select mt-1"
          id="category"
          {...register("category")}
        >
          <option value="">Select</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <div className="mb-2">
        <button className="btn btn-primary">Sumbit</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

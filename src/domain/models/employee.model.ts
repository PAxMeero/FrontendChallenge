import { z } from "zod";

export const EmployeeIdSchema = z.number().positive();
export type EmployeeIdModel = z.infer<typeof EmployeeIdSchema>;

export const EmployeeNameSchema = z.string().min(1);
export type EmployeeNameModel = z.infer<typeof EmployeeNameSchema>;

export const EmployeeSalarySchema = z.number().positive();
export type EmployeeSalaryModel = z.infer<typeof EmployeeSalarySchema>;

export const EmployeeSchema = z.object({
  id: EmployeeIdSchema,
  employee_name: EmployeeNameSchema,
  employee_salary: EmployeeSalarySchema,
});
export type EmployeeModel = z.infer<typeof EmployeeSchema>;

export const EmployeeAgeSchema = z.string();
export type EmployeeAgeModel = z.infer<typeof EmployeeAgeSchema>;

export const EmployeeImageSchema = z.string();
export type EmployeeImageModel = z.infer<typeof EmployeeImageSchema>;

export interface EmployeeModelDetail extends EmployeeModel {
  employee_age: EmployeeAgeModel,
  profile_image: EmployeeImageModel
}

export const EmployeeListSchema = EmployeeSchema.array();
export type EmployeeListModel = z.infer<typeof EmployeeListSchema>;

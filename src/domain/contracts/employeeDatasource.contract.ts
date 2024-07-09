import { EmployeeListModel, EmployeeModel, EmployeeModelDetail } from "../models/employee.model";
import {
  GetEmployeeByIdParams,
  UpdateEmployeeParams,
} from "../params/employee.param";
import { DeleteEmployeeByIdReturn } from '../types'
export default abstract class EmployeeDatasourceContract {
  public abstract getEmployeeList(): Promise<EmployeeListModel | undefined>;
  public abstract createEmployee(
    params: unknown,
  ): Promise<EmployeeModel | undefined>;
  public abstract getEmployeeById(
    employeeId: number,
  ): Promise<EmployeeModelDetail | undefined>;
  public abstract updateEmployeeById(
    params: unknown,
  ): Promise<EmployeeModel | undefined>;
  public abstract deleteEmployeeById(
    employeeId: number,
  ): Promise<DeleteEmployeeByIdReturn | unknown>;
}

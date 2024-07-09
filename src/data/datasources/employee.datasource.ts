import EmployeeDatasourceContract from "@/domain/contracts/employeeDatasource.contract";
import {
  EmployeeListModel,
  EmployeeListSchema,
  EmployeeModelDetail,
  EmployeeModel,
} from "@/domain/models/employee.model";
import { GetEmployeeByIdParams } from "@/domain/params/employee.param";
import { DeleteEmployeeByIdReturn } from '../../domain/types'


export default class EmployeeDatasource extends EmployeeDatasourceContract {
  public async getEmployeeList(): Promise<EmployeeListModel | undefined> {
    try {
      const response = await fetch(
        "https://dummy.restapiexample.com/api/v1/employees",
      );

      // Validate response
      if (response.status !== 200) {
        return undefined;
      }

      // Obtain json from response
      const json = await response.json();
      // Extract data
      const data = json["data"];

      return EmployeeListSchema.parse(data);
    } catch (exception) {
      return undefined;
    }
  }

  public async createEmployee(
    params: unknown,
  ): Promise<EmployeeModel | undefined> {
    throw new Error("Method not implemented.");
  }

  public async getEmployeeById(
    employeeId: number,
  ): Promise<EmployeeModelDetail | undefined> {
    try {
      const response = await fetch(
        `https://dummy.restapiexample.com/api/v1/employee/${employeeId}`,
      );

      // Validate response
      if (response.status !== 200) {
        return undefined;
      }

      // Obtain json from response
      const json = await response.json();
      // Extract data
      const data = json["data"];

      return data;
    } catch (exception) {
      return undefined;
    }
  }

  public async updateEmployeeById(
    params: unknown,
  ): Promise<EmployeeModel | undefined> {
    throw new Error("Method not implemented.");
  }



  public async deleteEmployeeById(
    employeeId: number,
  ): Promise<DeleteEmployeeByIdReturn | unknown> {
    const requestOptions = {
      method: 'DELETE',
    };

    try {
      //the API is pretty quickly rate limited and performing the DELETE request is quite challenging
      const response = await fetch(
        `https://dummy.restapiexample.com/api/v1/delete/${employeeId}`, requestOptions
      );

      // Obtain json from response
      const json = await response.json();
      // Extract data
      // const data = json["data"];

      return json;
    } catch (error) {
      return error;
    }
  }
}

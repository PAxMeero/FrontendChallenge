import { useQuery } from "@tanstack/react-query";
import EmployeeService from "../services/employee.service";

const service = EmployeeService.getInstance();

export const useGetEmployeeDetail = (employeeId: number) => {
    return useQuery({
        queryKey: ["getEmployeeDetail"],
        queryFn: () => service.getEmployeeById(employeeId),
    });
};

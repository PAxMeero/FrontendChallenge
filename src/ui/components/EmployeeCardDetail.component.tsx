import EmployeeFormatter from "@/core/formatters/employee.formatter";
import { EmployeeModel } from "@/domain/models/employee.model";
import { ReactNode } from "react";
import { useGetEmployeeDetail } from "@/domain/hooks/useGetEmployeeDetail.hook";

export interface EmployeeCardProps {
    employee: EmployeeModel;
}

const Skeleton = () => (<div className="flex animate-pulse flex-wrap items-center gap-8">
    <div className="grid h-36 w-36 place-items-center rounded-lg bg-gray-300">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-12 w-12 text-gray-500"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
        </svg>
    </div>
</div>
)

const EmployeeCard = ({ employee }: EmployeeCardProps): ReactNode => {
    const { data, isLoading, isError } = useGetEmployeeDetail(employee.id);

    return (
        <div className="w-full shadow bg-slate-500 p-4 flex">
            {data ? <img src={data.profile_image} /> : Skeleton()}
            <div className="ml-4">
                <div className="flex gap-2">
                    <span>{employee.id}</span>
                    <span>{employee.employee_name}</span>
                </div>
                <div className="flex gap-2">
                    <span>{EmployeeFormatter.formatSalary(employee.employee_salary)}</span>
                    {data ? <span>{`${data.employee_age} years old`}</span> : ''}
                </div>
            </div>
        </div>
    );
};
export default EmployeeCard;

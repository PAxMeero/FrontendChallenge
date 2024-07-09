"use client";

import { useMutation } from "@tanstack/react-query";
import { useGetEmployeeList } from "@/domain/hooks/useGetEmployeeList.hook";
import EmployeeCard from "@/ui/components/EmployeeCard.component";
import Link from "next/link";
import EmployeeService from "@/domain/services/employee.service";
import { log } from 'console';

const service = EmployeeService.getInstance();

export default function Home() {
  const { data, isLoading, isError } = useGetEmployeeList();

  const useDeleteEmployeeById = useMutation({
    mutationFn: (employeeId: number
    ) => service.deleteEmployeeById(employeeId)
  }
  )

  const DeleteButton = (employeeId: number) => {

    if (useDeleteEmployeeById.isError) {
      <div>Dummy api seems broken : {useDeleteEmployeeById.error.message}</div>
    }
    if (useDeleteEmployeeById.isSuccess) {
      <div>Employee deleted</div>
    }
    return < button className="border px-1 rounded-md m-1" onClick={() => useDeleteEmployeeById.mutate(employeeId)}>Delete</button>

  }

  return (
    <main className="flex h-screen flex-col items-start justify-start p-4 gap-4">
      <h1>Employee List {data && <span>({data.length})</span>}</h1>
      <Link className="border px-2 py-1 rounded-md" href={`/employee/create`}>
        Create
      </Link>
      {data && (
        <ol className="flex flex-col gap-2">
          {data?.map((employee, index) => (
            <li key={index}>
              <div className="flex">
                <Link href={`/employee/${employee.id}`}>
                  <EmployeeCard employee={employee} />
                </Link>
                {useDeleteEmployeeById.isPending ? (
                  'Deleting employee') : DeleteButton(employee.id)}
              </div>
            </li>
          ))}
        </ol>
      )
      }

      {
        isLoading && (
          <div className="flex-1 w-full items-center justify-center">
            <span>loading</span>
          </div>
        )
      }
      {
        !data && !isLoading && isError && (
          <div className="flex-1 w-full items-center justify-center">
            <span>error</span>
          </div>
        )
      }
    </main >
  );
}

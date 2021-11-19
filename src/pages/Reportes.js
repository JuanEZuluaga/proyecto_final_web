import { Fragment } from "react"
import Navlayout from "../layout/Navlayout"

const Reportes = () => {

    const students = [
        {
            name: 'Daniel Cotes',
            jefe: 'Juan José Cardona Quiroz',
            periodo: '2103-3',
            estado: 'Aprobado',
            dependencia: 'Dirección de technologías de la información',
            role: 'Admin',
            email: 'jane.cooper@example.com',
        },
        {
            name: 'Daniel Cotes',
            jefe: 'Juan José Cardona Quiroz',
            periodo: '2103-3',
            estado: 'Aprobado',
            dependencia: 'Dirección de technologías de la información',
            role: 'Admin',
            email: 'jane.cooper@example.com',
        },

    ]

    return (
        <Fragment>
            <Navlayout>
                <div className='container mx-auto'>
                    <div className='text-3xl font-bold text-left py-12'>REPORTES</div>
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Periodo Academico
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Nombre del Estudiante
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Jefe de Dependencia
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Dependencia
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Estado
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Acciones
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {students.map((student) => (
                                    <tr key={student.email}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">{student.periodo}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-left text-sm text-gray-900">{student.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-left text-sm text-gray-900">{student.jefe}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-left text-sm text-gray-900">{student.dependencia}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="px-2 inline-flex uppercase text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                {student.estado}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                Edit
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Navlayout>
        </Fragment>
    )
}

export default Reportes
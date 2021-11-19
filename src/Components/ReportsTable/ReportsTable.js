import { FiEdit } from "react-icons/fi"
import { FaRegEye } from "react-icons/fa"
import { BiDotsVerticalRounded } from "react-icons/bi"
import { Navigate } from "react-router"
import { useState } from "react"

const ReportsTable = (props) => {
    const [editing, setEditing] = useState(false)

    const thClasses = `px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider`
    const tdTextClasses = `px-6 py-4 whitespace-nowrap text-left text-sm text-gray-900`
    const iconClasses = `text-lg cursor-pointer text-gray-400 stroke-2 hover:text-purple-700`

    const onEditHandler = () => {
        setEditing((prevState) => !prevState)
    }
    console.log(editing)
    return (
        <>
            {editing ? <Navigate to='/calendar' />
                :
                <div className='container mx-auto' >
                    <div className="filter drop-shadow-xl overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className={thClasses}
                                    >
                                        Periodo Academico
                                    </th>
                                    <th
                                        scope="col"
                                        className={thClasses}
                                    >
                                        Nombre del Estudiante
                                    </th>
                                    <th
                                        scope="col"
                                        className={thClasses}
                                    >
                                        Jefe de Dependencia
                                    </th>
                                    <th
                                        scope="col"
                                        className={thClasses}
                                    >
                                        Dependencia
                                    </th>
                                    <th
                                        scope="col"
                                        className={thClasses}
                                    >
                                        Estado
                                    </th>
                                    <th
                                        scope="col"
                                        className={thClasses}
                                    >
                                        Acciones
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {props.data.map((student) => (
                                    <tr key={student.periodo}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">{student.periodo}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className={tdTextClasses}>{student.name}</td>
                                        <td className={tdTextClasses}>{student.jefe}</td>
                                        <td className={tdTextClasses}>{student.dependencia}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-left">
                                            <span className={`px-4 py-1 inline-flex uppercase text-xs leading-5 font-semibold rounded-full  text-white
                                            ${student.estado.toLowerCase() === 'aprobado' ? `bg-green-400`
                                                    : student.estado.toLowerCase() === 'no enviado' ? `bg-red-600`
                                                        : `bg-yellow-400`
                                                }
                                            `}>
                                                {student.estado}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium flex space-x-2">
                                            <FiEdit onClick={onEditHandler} className={iconClasses}></FiEdit>
                                            <FaRegEye className={iconClasses}></FaRegEye>
                                            <BiDotsVerticalRounded className={iconClasses}> </BiDotsVerticalRounded>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div >
            }
        </>
    )
}

export default ReportsTable
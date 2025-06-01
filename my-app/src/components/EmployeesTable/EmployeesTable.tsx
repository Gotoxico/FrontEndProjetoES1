import React from 'react';
import './EmployeesTable.css'; // Reuse the ProductTable.css file

interface EmployeesTableProps {
    operatorData: {
        nomeOperador: string;
        cpf: string;
    };
}

const EmployeesTable: React.FC<EmployeesTableProps> = ({ operatorData }) => {
    return (
        <div className="EmployeesTable">
            <table>
                <thead>
                    <tr>
                        <th>Nome Operador</th>
                        <th>CPF</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{operatorData.nomeOperador}</td>
                        <td>{operatorData.cpf}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default EmployeesTable;

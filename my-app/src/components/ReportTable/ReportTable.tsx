import React from 'react';
import './ReportTable.css'; 

interface ReportTableProps {
    productData: {
        nomeProduto: string;
        codigoBarras: string;
        nomeFornecedor: string;
        quantidade: number;
    };
}

const ReportTable: React.FC<ReportTableProps> = ({ productData }) => {
    return (
        <div className="ReportTable">
            <table>
                <thead>
                    <tr>
                        <th>Nome Produto</th>
                        <th>Código Barras</th>
                        <th>Nome Fornecedor</th>
                        <th>Quantidade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{productData.nomeProduto}</td>
                        <td>{productData.codigoBarras}</td>
                        <td>{productData.nomeFornecedor}</td>
                        <td>{productData.quantidade}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ReportTable;

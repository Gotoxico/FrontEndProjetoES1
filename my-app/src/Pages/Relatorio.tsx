import ReportTable from '../components/ReportTable/ReportTable';


function Relatorio() {
    //Trocar aqui pra importar dados do database
    const ReportData = {
    nomeProduto: "Pilha Duracell AA 4 unidades",
    codigoBarras: "09133915017",
    nomeFornecedor: "P&G",
    quantidade: 100,
    };
  return (
    <div>

        <ReportTable productData={ReportData}/>

      {/* Add content for your homepage here */}
    </div>
  );
}

export default Relatorio;

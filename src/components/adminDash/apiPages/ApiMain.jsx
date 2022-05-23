import React from 'react';
import { customStyles, columns, data, data2, column2, data3, data4, column3, column4, column5, data5, data6, column6, data7, column7, column8, data8, data9, column9, data10, column10, column11, data11, column12, data12} from "./Data.jsx";
import { code1, code2, code3, code4, code5, code6, code7, code8, code9, code10, code11, code12 } from "./Code.jsx";
import DataTable from 'react-data-table-component';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './api.scss';
import { Helmet } from 'react-helmet';

// A super simple expandable component.
const ApiMain = () => {
  return (
    <div className="api">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="" content="Cabinet api uzspay" />
        <title>Cabinet | Api</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="col-md-12">
        <h1 className="aler alert-warning text-success text-center">Api</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            {/*  change in me  */}
            <h2>ПРИНЯТЬ ПЛАТЕЖ</h2>
            <hr />
            <div className="api__paymet">
              <h4>Headers</h4>
              <DataTable customStyles={customStyles} columns={columns} data={data} />
            </div>
            <div className="api__paymet">
              <h4>Body JSONS</h4>
              <DataTable customStyles={customStyles} columns={column2} data={data2} />
            </div>
            <div className="api__test">
              <h4>Пример кода PHP</h4>
              <SyntaxHighlighter language="javascript" style={materialOceanic}>
                {code11}
              </SyntaxHighlighter>
            </div>
            <div className="api__test">
              <h4>Если успешно JSON - объект ответа в формате</h4>
              <SyntaxHighlighter language="javascript" style={materialOceanic}>
                {code12}
              </SyntaxHighlighter>
            </div>
            {/*  change in me  */}
            <h2>ПОДТВЕРЖДЕНИЕ ПЛАТЕЖА (SMS)</h2>
            <hr />
            <div className="api__paymet">
              <h4>Headers</h4>
              <DataTable customStyles={customStyles} columns={column3} data={data3} />
            </div>
            <div className="api__paymet">
              <h4>Body JSONS</h4>
              <DataTable customStyles={customStyles} columns={column4} data={data4} />
            </div>
            <div className="api__test">
              <h4>Пример кода PHP</h4>
              <SyntaxHighlighter language="javascript" style={materialOceanic}>
                {code1}
              </SyntaxHighlighter>
            </div>
            <div className="api__test">
              <h4>Пример ответа</h4>
              <SyntaxHighlighter language="javascript" style={materialOceanic}>
                {code2}
              </SyntaxHighlighter>
            </div>
            <div className="api__paymet">
              <h2>СОЗДАНИЕ ВЫПЛАТЫ</h2>
              <hr />
              <h4>Headers</h4>
              <DataTable customStyles={customStyles} columns={column5} data={data5} />
            </div>
            <div className="api__paymet">
              <h4>Body JSONS</h4>
              <DataTable customStyles={customStyles} columns={column6} data={data6} />
            </div>
            <div className="api__test">
              <h4>Пример кода PHP</h4>
              <SyntaxHighlighter language="javascript" style={materialOceanic}>
                {code3}
              </SyntaxHighlighter>
            </div>
            <div className="api__test">
              <h4>Пример ответа</h4>
              <SyntaxHighlighter language="javascript" style={materialOceanic}>
                {code4}
              </SyntaxHighlighter>
            </div>
            <div className="api__paymet">
              <h2>ПРОВЕРКА ТРАНЗАКЦИИ</h2>
              <hr />
              <h4>Headers</h4>
              <DataTable customStyles={customStyles} columns={column7} data={data7} />
            </div>
            <div className="api__paymet">
              <h4>Body JSONS</h4>
              <DataTable customStyles={customStyles} columns={column8} data={data8} />
            </div>
            <div className="api__test">
              <h4>Пример кода PHP</h4>
              <SyntaxHighlighter language="javascript" style={materialOceanic}>
                {code5}
              </SyntaxHighlighter>
            </div>
            <div className="api__test">
              <h4>Пример ответа</h4>
              <SyntaxHighlighter language="javascript" style={materialOceanic}>
                {code6}
              </SyntaxHighlighter>
            </div>
            <div className="api__paymet">
              <h2>ИСТОРИЯ ПОПОЛНЕНИЙ</h2>
              <hr />
              <h4>Headers</h4>
              <DataTable customStyles={customStyles} columns={column9} data={data9} />
            </div>
            <div className="api__paymet">
              <h4>Body JSONS</h4>
              <DataTable customStyles={customStyles} columns={column10} data={data10} />
            </div>
            <div className="api__test">
              <h4>Пример кода PHP</h4>
              <SyntaxHighlighter language="javascript" style={materialOceanic}>
                {code7}
              </SyntaxHighlighter>
            </div>
            <div className="api__test">
              <h4>Пример ответа</h4>
              <SyntaxHighlighter language="javascript" style={materialOceanic}>
                {code8}
              </SyntaxHighlighter>
            </div>
            <div className="api__paymet">
              <h2>ИСТОРИЯ ЗАЧИСЛЕНИЙ</h2>
              <hr />
              <h4>Headers</h4>
              <DataTable customStyles={customStyles} columns={column11} data={data11} />
            </div>
            <div className="api__paymet">
              <h4>Body JSONS</h4>
              <DataTable customStyles={customStyles} columns={column12} data={data12} />
            </div>
            <div className="api__test">
              <h4>Пример кода PHP</h4>
              <SyntaxHighlighter language="javascript" style={materialOceanic}>
                {code9}
              </SyntaxHighlighter>
            </div>
            <div className="api__test">
              <h4>Пример ответа</h4>
              <SyntaxHighlighter language="javascript" style={materialOceanic}>
                {code10}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiMain;

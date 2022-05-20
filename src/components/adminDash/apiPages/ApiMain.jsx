import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  docco,
  dark,
  duotoneSea,
  darcula,
  duotoneLight,
  materialLight,
  materialOceanic,
} from 'react-syntax-highlighter/dist/esm/styles/prism';
import './api.scss';
import { Helmet } from 'react-helmet';

const ApiMain = () => {

  const code1 = `
  <?php

  $curl = curl_init();
  
  curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.uzspay.com/api/v2/sms',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>'{
  "opid":"60594",
  "smscode":"82943"
  }',
  CURLOPT_HTTPHEADER => array(
  'access_token: 1ecv412we12eWee12eiuyr9874rgGYWQTy3y76e',
  'Content-Type: application/json'
  ),
  ));
  
  $response = curl_exec($curl);
  
  curl_close($curl);
  echo $response;
  `;

  const code2 = `
  {
    "error": false,
    "opid": 32, 
    "status": "success", // Успешно
    "message": "Платеж прошел успешно"
}

// если ошибка JSON - объект в формате
{
    "error": true,   
    "message": "Ошибка"
}

  `;

  const code3 = `<?php

  $curl = curl_init();
  
  curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.uzspay.com/api/v2/payout',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>'{
  "merchant_id":"9",
  "card_number":"8600444444447744",
  "amount": 100000
  }',
  CURLOPT_HTTPHEADER => array(
  'access_token: 1ecv412we12eWee12eiuyr9874rgGYWQTy3y76e',
  'Content-Type: application/json'
  ),
  ));
  
  $response = curl_exec($curl);
  
  curl_close($curl);
  echo $response;
  `;

  const code4 = ` 
  {
    "error": false,
    "opid": 32, 
    "status": "success", // Успешно
    "message": "Платеж прошел успешно"
}

// если ошибка JSON - объект в формате
{
    "error": true,   
    "message": "Ошибка"
}
`;
  const code5 = `<?php

$curl = curl_init();

curl_setopt_array($curl, array(
CURLOPT_URL => 'https://api.uzspay.com/api/v2/checkOpid',
CURLOPT_RETURNTRANSFER => true,
CURLOPT_ENCODING => '',
CURLOPT_MAXREDIRS => 10,
CURLOPT_TIMEOUT => 0,
CURLOPT_FOLLOWLOCATION => true,
CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
CURLOPT_CUSTOMREQUEST => 'POST',
CURLOPT_POSTFIELDS =>'{
"merchant_id":"9",
"opid":"878945"
}',
CURLOPT_HTTPHEADER => array(
'access_token: 1ecv412we12eWee12eiuyr9874rgGYWQTy3y76e',
'Content-Type: application/json'
),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
`;
  const code6 = `
{
  "error": false,
  "opid": 2152, // ID платежа
  "status": "success",
  "summa": 20000.00, // UZ сум
  "commission": 11.08, // UZ сум
  "totаlAmount": 565.08, // UZ сум
  "card": "8600123456789012",// UZ сум
  "time": 1611126844
 }
  
  // если ошибка JSON - объект в формате
  {
      "error": true,   
      "message": "Ошибка"
  }
`;

  const code7 = `<?php

$curl = curl_init();

curl_setopt_array($curl, array(
CURLOPT_URL => 'https://api.uzspay.com/api/v2/historyIn',
CURLOPT_RETURNTRANSFER => true,
CURLOPT_ENCODING => '',
CURLOPT_MAXREDIRS => 10,
CURLOPT_TIMEOUT => 0,
CURLOPT_FOLLOWLOCATION => true,
CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
CURLOPT_CUSTOMREQUEST => 'POST',
CURLOPT_POSTFIELDS =>'{
"merchant_id":"9",
"opid":"878945",
"from":"1615225587",
"to":"1615778844",

}',
CURLOPT_HTTPHEADER => array(
'access_token: 1ecv412we12eWee12eiuyr9874rgGYWQTy3y76e',
'Content-Type: application/json'
),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;

`;
  const code8 = `   {
  "error": false,
  "status": "success",
                     “doc”: [
    {
        amount: "287850.00",
        card: "8600332939001412",
        create_time: "18.05.2022 17:05:43",
        final_time: "18.05.2022 17:05:53"
        opid: "168201",
        commission: "5757.00",
        status: "success"
    },
    {
        amount: "287850.00",
        card: "8600332939001412",
        create_time: "18.05.2022 17:05:43",
        final_time: "18.05.2022 17:05:53"
        opid: "168201",
        commission: "5757.00",
        status: "false"
    },


]
 }
  
  // если ошибка JSON - объект в формате
  {
      "error": true,   
      "message": "Ошибка"
  }
`;

  const code9 = `<?php

$curl = curl_init();

curl_setopt_array($curl, array(
CURLOPT_URL => 'https://api.uzspay.com/api/v2/historyOut',
CURLOPT_RETURNTRANSFER => true,
CURLOPT_ENCODING => '',
CURLOPT_MAXREDIRS => 10,
CURLOPT_TIMEOUT => 0,
CURLOPT_FOLLOWLOCATION => true,
CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
CURLOPT_CUSTOMREQUEST => 'POST',
CURLOPT_POSTFIELDS =>'{
"merchant_id":"9",
"opid":"878945",
"from":"1615225587",
"to":"1615778844",

}',
CURLOPT_HTTPHEADER => array(
'access_token: 1ecv412we12eWee12eiuyr9874rgGYWQTy3y76e',
'Content-Type: application/json'
),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
`;
  const code10 = ` {
  "error": false,
  "status": "success",
                     “doc”: [
    {
        amount: "287850.00",
        card: "8600332939001412",
        create_time: "18.05.2022 17:05:43",
        final_time: "18.05.2022 17:05:53"
        opid: "168201",
        comission: "5757.00",
        status: "success"
    },
    {
        amount: "287850.00",
        card: "8600332939001412",
        create_time: "18.05.2022 17:05:43",
        final_time: "18.05.2022 17:05:53"
        opid: "168201",
        comission: "5757.00",
        status: "false"
    },


]
 }
  
  // если ошибка JSON - объект в формате
  {
      "error": true,   
      "message": "Ошибка"
  }

`;

  const code11 = `<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.uzspay.com/api/v2/pay',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>'{
    "merchant_id":"9",
    "token":"token",
    "a":"50000",
    "s":"8600490470512037",
    "sh":"2409",
    "k":"UZ",
    "order_id":"56447",
    "client_id": "245457878",
    “client_ip”: “88.21.33.55”
}',
  CURLOPT_HTTPHEADER => array(
    'access_token: 1ecv412we12eWee12eiuyr9874rgGYWQTy3y76e',
    'Content-Type: application/json'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;

`;

  const code12 = `   {
        "error": false,
        "opid": 32, 
        "status": "success", // Успешно
        "commission": 10, // Установленная комиссия
        "name": "Иван Иванов ", // Ф.И.О. владельца карты 
        "message": "Код успешно отправлен!"
    }
    
    // если ошибка JSON - объект в формате
    {
        "error": true,   
        "message": "Ошибка"
    }
`;

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
              <div className="row">
                <div className="col-md-5">
                  <div className="api__conteType">
                    <ul className="list-group list-group-light">
                      <li className="list-group-item px-3"><b>Content-Type</b></li>
                      <li className="list-group-item px-3">Content-Type</li>
                      <li className="list-group-item px-3">access_token</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="api__conteType">
                    <li className="list-group-item px-3"><b>Value</b></li>
                    <li className="list-group-item px-3">application/json</li>
                    <li className="list-group-item px-3">Токен полученный в кабинете Merchant</li>
                  </div>
                </div>
              </div>
            </div>
            <div className="api__paymet">
              <h4>Body JSONS</h4>
              <div className="row">
                <div className="col-md-4">
                  <div className="api__conteType">
                    <ul className="list-group list-group-light">
                      <li className="list-group-item px-3"><b>Название</b></li>
                      <li className="list-group-item px-3">merchant_id</li>
                      <li className="list-group-item px-3">1</li>
                      <li className="list-group-item px-3">s</li>
                      <li className="list-group-item px-3">sh</li>
                      <li className="list-group-item px-3">k</li>
                      <li className="list-group-item px-3">order_id</li>
                      <li className="list-group-item px-3">client_ip</li>
                      <li className="list-group-item px-3">client_ip</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="api__conteType">
                    <li className="list-group-item px-3"><b>Описание</b></li>
                    <li className="list-group-item px-3">ID Вашего магазина в системе </li>
                    <li className="list-group-item px-3">Сумма заказа</li>
                    <li className="list-group-item px-3">Номер карты (отправителя UZCARD или HUMO) 8600123456789012</li>
                    <li className="list-group-item px-3">Срок карты (отправителя) 2501 ГГ/ММ</li>
                    <li className="list-group-item px-3">Прием на баланс UZ кошелка в системе </li>
                    <li className="list-group-item px-3">Id заказа в системе Мерчанта</li>
                    <li className="list-group-item px-3">Id клиента в системе Мерчанта</li>
                    <li className="list-group-item px-3">Ip адрес клиента</li>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="api__conteType">
                    <li className="list-group-item px-3"><b>Тип</b></li>
                    <li className="list-group-item px-3"><i>string</i></li>
                    <li className="list-group-item px-3"><i>string</i></li>
                    <li className="list-group-item px-3"><i>string</i></li>
                    <li className="list-group-item px-3"><i>string</i></li>
                    <li className="list-group-item px-3"><i>string</i></li>
                    <li className="list-group-item px-3"><i>string</i></li>
                    <li className="list-group-item px-3"><i>string</i></li>
                    <li className="list-group-item px-3"><i>string</i></li>
                  </div>
                </div>
              </div>
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
              <div className="row">
                <div className="col-md-4">
                  <div className="api__conteType">
                    <ul className="list-group list-group-light">
                      <li className="list-group-item px-3"><b>Content-Type</b></li>
                      <li className="list-group-item px-3">Content-Type</li>
                      <li className="list-group-item px-3">access_token</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="api__conteType">
                    <li className="list-group-item px-3"><b>Value</b></li>
                    <li className="list-group-item px-3">application/json</li>
                    <li className="list-group-item px-3">Токен полученный в кабинете Merchant</li>
                  </div>
                </div>
              </div>
            </div>
            <div className="api__paymet">
              <h4>Body JSONS</h4>
              <div className="row">
                <div className="col-md-4">
                  <div className="api__conteType">
                    <ul className="list-group list-group-light">
                      <li className="list-group-item px-3"><b>Название</b></li>
                      <li className="list-group-item px-3">opid</li>
                      <li className="list-group-item px-3">smscode</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="api__conteType">
                    <li className="list-group-item px-3"><b>Описание</b></li>
                    <li className="list-group-item px-3">Id заказа возращенный в предыдущем запросе</li>
                    <li className="list-group-item px-3">Смс код который пришел покупателю</li>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="api__conteType">
                    <li className="list-group-item px-3"><b>Тип</b></li>
                    <li className="list-group-item px-3"><i>string</i></li>
                    <li className="list-group-item px-3"><i>string</i></li>
                  </div>
                </div>
              </div>
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
              <div className="row">
                <div className="col-md-4">
                  <div className="api__conteType">
                    <ul className="list-group list-group-light">
                      <li className="list-group-item px-3"><b>Content-Type</b></li>
                      <li className="list-group-item px-3">Content-Type</li>
                      <li className="list-group-item px-3">access_token</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="api__conteType">
                    <li className="list-group-item px-3"><b>Value</b></li>
                    <li className="list-group-item px-3">application/json</li>
                    <li className="list-group-item px-3">Токен полученный в кабинете Merchant</li>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="api__conteType">
                    <li className="list-group-item px-3"><b>Тип</b></li>
                    <li className="list-group-item px-3"><i>string</i></li>
                    <li className="list-group-item px-3"><i>string</i></li>
                  </div>
                </div>
              </div>
            </div>
            <div className="api__paymet">
              <h4>Body JSONS</h4>
              <div className="row">
                <div className="col-md-4">
                  <div className="api__conteType">
                    <ul className="list-group list-group-light">
                      <li className="list-group-item px-3"><b>Название</b></li>
                      <li className="list-group-item px-3">merchant_id</li>
                      <li className="list-group-item px-3">card_number</li>
                      <li className="list-group-item px-3">amount</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="api__conteType">
                    <li className="list-group-item px-3"><b>Описание</b></li>
                    <li className="list-group-item px-3">ID Вашего магазина в системе </li>
                    <li className="list-group-item px-3">Номер карты зачисления</li>
                    <li className="list-group-item px-3">Сумма зачисления</li>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="api__conteType">
                    <li className="list-group-item px-3"><b>Тип</b></li>
                    <li className="list-group-item px-3"><i>string</i></li>
                    <li className="list-group-item px-3"><i>string</i></li>
                    <li className="list-group-item px-3"><i>number</i></li>
                  </div>
                </div>
              </div>
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
              <div className="row">
                <div className="col-md-4">
                  <div className="api__conteType">
                    <ul className="list-group list-group-light">
                      <li className="list-group-item px-3"><b>Content-Type</b></li>
                      <li className="list-group-item px-3">access_token</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="api__conteType">
                    <li className="list-group-item px-3"><b>Value</b></li>
                    <li className="list-group-item px-3">Токен полученный в кабинете Merchant</li>
                  </div>
                </div>
              </div>
            </div>
            <div className="api__paymet">
              <h4>Body JSONS</h4>
              <div className="row">
                <div className="col-md-4">
                  <div className="api__conteType">
                    <ul className="list-group list-group-light">
                      <li className="list-group-item px-3"><b>Название</b></li>
                      <li className="list-group-item px-3">merchant_id</li>
                      <li className="list-group-item px-3">opid</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="api__conteType">
                    <li className="list-group-item px-3"><b>Описание</b></li>
                    <li className="list-group-item px-3">ID Вашего магазина в системе </li>
                    <li className="list-group-item px-3">Id Транзакции в нашей системе</li>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="api__conteType">
                    <li className="list-group-item px-3"><b>Тип</b></li>
                    <li className="list-group-item px-3"><i>string</i></li>
                    <li className="list-group-item px-3"><i>string</i></li>
                  </div>
                </div>
              </div>
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
              <div className="row">
                <div className="col-md-4">
                  <div className="api__conteType">
                    <ul className="list-group list-group-light">
                      <li className="list-group-item px-3"><b>Content-Type</b></li>
                      <li className="list-group-item px-3">Content-Type</li>
                      <li className="list-group-item px-3">access_token</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="api__conteType">
                    <li className="list-group-item px-3"><b>Value</b></li>
                    <li className="list-group-item px-3">application/json</li>
                    <li className="list-group-item px-3">Токен полученный в кабинете Merchant</li>
                  </div>
                </div>
              </div>
            </div>
            <div className="api__paymet">
              <h4>Body JSONS</h4>
              <div className="row">
                <div className="col-md-4">
                  <div className="api__conteType">
                    <ul className="list-group list-group-light">
                      <li className="list-group-item px-3"><b>Название</b></li>
                      <li className="list-group-item px-3">merchant_id</li>
                      <li className="list-group-item px-3">from</li>
                      <li className="list-group-item px-3">to</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="api__conteType">
                    <li className="list-group-item px-3"><b>Описание</b></li>
                    <li className="list-group-item px-3">ID Вашего магазина в системе </li>
                    <li className="list-group-item px-3">Дата начала в формате UNIX_TIMESTAMP</li>
                    <li className="list-group-item px-3">Дата конца в формате UNIX_TIMESTAMP</li>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="api__conteType">
                    <li className="list-group-item px-3"><b>Тип</b></li>
                    <li className="list-group-item px-3"><i>string</i></li>
                    <li className="list-group-item px-3"><i>string</i></li>
                    <li className="list-group-item px-3"><i>string</i></li>
                  </div>
                </div>
              </div>
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
              <div className="row">
                <div className="col-md-4">
                  <div className="api__conteType">
                    <ul className="list-group list-group-light">
                      <li className="list-group-item px-3"><b>Content-Type</b></li>
                      <li className="list-group-item px-3">Content-Type</li>
                      <li className="list-group-item px-3">access_token</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="api__conteType">
                    <li className="list-group-item px-3"><b>Value</b></li>
                    <li className="list-group-item px-3">application/json</li>
                    <li className="list-group-item px-3">Токен полученный в кабинете Merchant</li>
                  </div>
                </div>
              </div>
            </div>
            <div className="api__paymet">
              <h4>Body JSONS</h4>
              <div className="row">
                <div className="col-md-4">
                  <div className="api__conteType">
                    <ul className="list-group list-group-light">
                      <li className="list-group-item px-3"><b>Название</b></li>
                      <li className="list-group-item px-3">merchant_id</li>
                      <li className="list-group-item px-3">from</li>
                      <li className="list-group-item px-3">to</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="api__conteType">
                    <li className="list-group-item px-3"><b>Описание</b></li>
                    <li className="list-group-item px-3">ID Вашего магазина в системе </li>
                    <li className="list-group-item px-3">Дата начала в формате UNIX_TIMESTAMP</li>
                    <li className="list-group-item px-3">Дата конца в формате UNIX_TIMESTAMP</li>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="api__conteType">
                    <li className="list-group-item px-3"><b>Тип</b></li>
                    <li className="list-group-item px-3"><i>string</i></li>
                    <li className="list-group-item px-3"><i>string</i></li>
                    <li className="list-group-item px-3"><i>string</i></li>
                  </div>
                </div>
              </div>
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

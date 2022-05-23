const host = window.location.host;
 export const code1 = `
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
CURLOPT_URL => 'https://api.${host}/api/v2/sms',
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
 export const code2 = `
{
  "error": false,
  "opid": 32, // ID в нашей системе
  "status": "success", // Успешно
  "message": "Платеж прошел успешно"
}

// если ошибка JSON - объект в формате
{
  "error": true,   
  "message": "Ошибка"c
}

`;
export const code3 = `<?php

$curl = curl_init();

curl_setopt_array($curl, array(
CURLOPT_URL => 'https://api.${host}/api/v2/payout',
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

export const code4 = ` 
{
  "error": false,
  "opid": 32, // ID в нашей системе
  "status": "success", // Успешно
  "message": "Платеж прошел успешно"
}

// если ошибка JSON - объект в формате
{
  "error": true,   
  "message": "Ошибка"
}
`;
export const code5 = `<?php

$curl = curl_init();

curl_setopt_array($curl, array(
CURLOPT_URL => 'https://api.${host}/api/v2/checkOpid',
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
export const code6 = `
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

export const code7 = `<?php

$curl = curl_init();

curl_setopt_array($curl, array(
CURLOPT_URL => 'https://api.${host}/api/v2/historyIn',
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
export const code8 = `   {
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

export const code9 = `<?php

$curl = curl_init();

curl_setopt_array($curl, array(
CURLOPT_URL => 'https://api.${host}/api/v2/historyOut',
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
export const code10 = ` {
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

export const code11 = `<?php

$curl = curl_init();

curl_setopt_array($curl, array(
CURLOPT_URL => 'https://api.${host}/api/v2/pay',
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

export const code12 = `   {
      "error": false,
      "opid": 32, // ID в нашей системе
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
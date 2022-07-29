const host = window.location.host;
export const code1 = `
curl --location --request POST 'https://h163368.srv16.test-hf.su/deposit/confirm' \\
--header 'Content-Type: application/x-www-form-urlencoded' \\
--data-urlencode 'tid=7' \\
--data-urlencode 'otp=1122'
`;
export const code2 = `
{
    "success": true,
    "error": false,
    "data": {
        "tid": 19,
        "amount": 10000,
        "commission": 0
    }
}


// если ошибка JSON - объект в формате
{
    "success": false,
    "error": true,
    "data": {
        "tid": 4
    }
}


`;
export const code3 = `
curl --location --request POST 'https://h163368.srv16.test-hf.su/withdraw' \\
--header 'Content-Type: application/x-www-form-urlencoded' \\
--data-urlencode 'pan=8600312905897001' \\
--data-urlencode 'token=ed37ed13b9e84baa1c6366dc3f5d84002aaa00e2805fbe88a92d70789597a403' \\
--data-urlencode 'amount=98500' \\
--data-urlencode 'uid=1'
`;

export const code4 = ` 
{
    "success": true,
    "error": false,
    "data": {
        "tid": 5,
        "amount": 98500,
        "commission": 0
    }
}

// если ошибка JSON - объект в формате
{
    "success": false,
    "error": true,
    "data": {
        "tid": "14",
        "message": "An unexpected error occurred"
    }
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

export const code11 = `curl --location --request POST 'https://h163368.srv16.test-hf.su/deposit/create' \\
--header 'Content-Type: application/x-www-form-urlencoded' \\
--data-urlencode 'pan=8600312905897001' \\
--data-urlencode 'exp=2302' \\
--data-urlencode 'amount=100000' \\
--data-urlencode 'uid=1'

`;

export const code12 = `   
  // success - статус выполнения операции (успех - true);
  // error - наличие ошибок (false - ошибки отсутствуют);
  // data - объект данных об операции.
      // В объекте data могут содержаться следующие данные:
            // tid - ID транзакции в системе
            // amount - сумма операции
            // commission - комисиия пользователя
            // phone - содержит или не содержит данные о владельце карты-отправителя (в зависимости от наличия этой информации у партнёра-агрегатора)
{
    "success": true,
    "error": false,
    "data": {
        "tid": "19",
        "amount": 10000,
        "commission": 0,
        "phone": "*3929"
    }
}
  
  
  // если ошибка JSON - объект в формате
  // success - статус выполнения операции (неуспех - false);
  // error - наличие ошибок (true - ошибки присутствуют);
  // data - объект данных об операции.
      // В объекте data могут содержаться следующие данные:
              // message - описание ошибки
  {
    "success": false,
    "error": true,
    "data": {
        "message": "Payment declined"
    }
}
`;
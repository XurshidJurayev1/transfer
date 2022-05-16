import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import "./api.scss";
const ApiMain = () => {
    const codeString = `<?php

    $curl = curl_init();
    
    curl_setopt_array($curl, array(
      CURLOPT_URL => 'https://varrkan.tk/api/v2/pay',
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
        "client_id": "245457878"
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
    const codeString_2 = `{
        "error": false,
        "opid": 32, // ID в UZCARDAPI.RU
        "status": "success", // Успешно
        "commission": 0.5, // Установленная комиссия
        "name": "Иван Иванов ", // Ф.И.О. владельца карты 
        "message": "Код успешно отправлен!"
    }
    
    // если ошибка JSON - объект в формате
    {
        "error": true,   
        "message": "Ошибка"
    }
`

    const errorString = `Код ошибки	Описание ошибки
9992	Вызываемый метод не активирован для магазина.
9993	Не найден/не указан success/error/post-link URL.
9994	Запрошенное действие отключено в настройках магазина
9995	Платеж в тестовом режиме
9996	Отсутствует или не действует контракт с магазином
9997	Неверный номер магазина
9998	Некорректная подпись запроса
9999	Ошибка системы
10000	Ошибка оплаты. Сервис недоступен. Повторите попытку позже.
10001	Ошибка оплаты. Обратитесь в банк выпустивший карту
10003	Превышено число попыток ввода проверочного кода
10004	3DSecure не введен или введен некорректно
10005	Неверно указаны карточные данные
10006	Превышен лимит частоты оплат
10007	Отказано по причине нарушения безопасности карточных данных.

`
    return (

        <div>
            <div className="col-md-12">
                <h1 className="aler alert-warning text-success text-center">Api</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-10">
                        <h3>Платежный фрейм</h3>
                        <h5>Фрейм</h5>
                        <div className="dark__black">
                            <h4>Инитлизация платежа</h4>    
                            <h5>Запрос</h5>    
                        </div>
                        <div className="apiMain_black">
                            <p>
                                <SyntaxHighlighter language="javascript" style={dark} >
                                    {codeString}
                                </SyntaxHighlighter>
                            </p>
                        </div>
                        <h4>Если успешно JSON - объект ответа в формате</h4>
                        <SyntaxHighlighter language="javascript" style={dark} >
                            {codeString_2}
                        </SyntaxHighlighter>
                        <h4>Коды ошибок</h4>
                        <SyntaxHighlighter language="javascript" style={dark} >
                            {errorString}
                        </SyntaxHighlighter>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ApiMain;

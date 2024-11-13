async function fetchData(url, method = 'GET', data = null) {
    try {
        const options = {
            method,
            headers: {
                'Content-Type': 'application/json'
            }
        };

        // 如果是 POST/PUT 请求，添加请求体
        if (data && (method === 'POST' || method === 'PUT')) {
            options.body = JSON.stringify(data);
        }

        const response = await fetch(url, options);

        // 检查响应是否成功
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const result = await response.json();
        return result; // 返回接口数据
    } catch (error) {
        console.error('Fetch error:', error);
        return null; // 返回 null 表示请求失败
    }
}


function get_user_count(){

}

function get_redpacket_count(){
    
}

function get_send_money_amount(){
    
}

function get_receive_money_amount(){
    
}

function get_send_count(){
    
}

function get_receive_count(){
    
}

function get_redcoin_amount(){
    
}

function get_deposit_amount(){
    
}

function get_withdraw_amount(){
    
}

function get_deposit_count(){
    
}

function get_withdraw_count(){
    
}
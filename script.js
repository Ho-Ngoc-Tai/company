function calculate(operation) {
    // Lấy giá trị từ hai ô input
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);

    let result = 0;

    // Kiểm tra giá trị đầu vào
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers!");
        return;
    }

    // Thực hiện phép tính dựa trên nút bấm
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert("Cannot divide by zero!");
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert("Unknown operation!");
            return;
    }

    // Hiển thị kết quả
    document.getElementById('result').innerText = result;
}
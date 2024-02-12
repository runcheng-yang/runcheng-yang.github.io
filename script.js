const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const content = document.getElementById('content');

btn1.addEventListener('click', () => {
    fetch('content1.txt') // 使用 fetch API 加载文本文件
    .then(response => response.text())
    .then(data => {
        const tableContainer = document.createElement('div'); // 创建一个新的 div 元素
        tableContainer.innerHTML = '<table>' + data + '</table>'; // 在 div 内部以表格形式显示文本内容
        content.appendChild(tableContainer); // 将新的 div 元素添加到 content 区域
    })
    .catch(error => console.error('Error fetching content:', error));
});

btn2.addEventListener('click', () => {
    fetch('content2.txt') // 使用 fetch API 加载文本文件
    .then(response => response.text())
    .then(data => {
        const tableContainer = document.createElement('div'); // 创建一个新的 div 元素
        tableContainer.innerHTML = '<table>' + data + '</table>'; // 在 div 内部以表格形式显示文本内容
        content.appendChild(tableContainer); // 将新的 div 元素添加到 content 区域
    })
    .catch(error => console.error('Error fetching content:', error));
});

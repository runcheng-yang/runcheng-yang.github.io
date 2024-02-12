const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const content = document.getElementById('content');

btn1.addEventListener('click', () => {
    fetch('content1.txt') // 使用 fetch API 加载文本文件
    .then(response => response.text())
    .then(data => {
        content.innerHTML = '<table>' + data + '</table>'; // 在content区域以表格形式显示文本内容
    })
    .catch(error => console.error('Error fetching content:', error));
});

btn2.addEventListener('click', () => {
    fetch('content2.txt') // 使用 fetch API 加载文本文件
    .then(response => response.text())
    .then(data => {
        content.innerHTML = '<table>' + data + '</table>'; // 在content区域以表格形式显示文本内容
    })
    .catch(error => console.error('Error fetching content:', error));
});
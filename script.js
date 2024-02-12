function showContent(contentId) {
    // 隐藏所有内容
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.style.display = 'none';
    });

    // 显示选定的内容
    const selectedContent = document.getElementById(contentId);
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const searchBar = document.getElementById("search-bar");
    const searchButton = document.getElementById("search-button");
    const tableRows = document.querySelectorAll("table tr");

    searchButton.addEventListener("click", function() {
        const searchText = searchBar.value.trim().toLowerCase();

        if (searchText === "") { // 如果搜索框为空，恢复最初显示的内容
            resetContent();
        } else {
            tableRows.forEach(function(row) {
                const rowData = row.textContent.trim().toLowerCase();
                if (rowData.includes(searchText)) {
                    row.style.display = "table-row"; // 显示包含搜索关键词的行
                    highlightText(row, searchText);
                } else {
                    row.style.display = "none"; // 隐藏不包含搜索关键词的行
                }
            });
        }
    });

    function highlightText(row, searchText) {
        const regex = new RegExp(searchText.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'gi');
        row.innerHTML = row.innerHTML.replace(regex, match => `<span class="highlight">${match}</span>`);
    }

    function removeHighlight(row) {
        row.querySelectorAll(".highlight").forEach(function(span) {
            span.outerHTML = span.innerHTML;
        });
    }

    function resetContent() {
        tableRows.forEach(function(row) {
            row.style.display = "table-row"; // 显示所有行
            removeHighlight(row); // 移除所有高亮效果
        });
    }
});




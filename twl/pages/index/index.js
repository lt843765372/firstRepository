// 初始化搜索框，并在选项中指定搜索文本变更事件回调函数，这样当搜索框文本发送变化时获得通知。
$('#searchboxExample').searchBox({
    escToClear: true, // 设置点击 ESC 键清空搜索框
    onSearchChange: function(searchKey, isEmpty) {
        console.log('搜索框文本变更：', searchKey);
    }
});
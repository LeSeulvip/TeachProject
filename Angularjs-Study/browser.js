/**
 * browser.js 通过node.js启动外部浏览器
 * 替换浏览器执行文件位置,所有的\都要替换为\\
 * 由于浏览器可能在带空格的路径中,而空格在程序执行中表示命令行数
 * 所以要将执行文件路径放置在引号中,空格后面是传递给浏览器要打开的网址
 */
const browser =
  '"C:\\Program Files (x86)\\UCBrowser\\Application\\UCBrowser.exe" http://127.0.0.1:30000';
/* nodejs调用外面程序 */
const exec = require('child_process').exec;
exec(browser, function(error) {
  console.log(error);
});
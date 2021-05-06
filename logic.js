function compile(){
    var html = document.getElementById("html");
    var css = document.getElementById("css");
    var js = document.getElementById("js");
    var code = document.getElementById("code").contentWindow.document;
    document.body.onkeyup = function(){
        code.open();
        code.writeln(html.value+"<style>"+css.value+"</style>" + "<script>"+js.value+"</script>")
        code.close();
    }
}




function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}


function makeDownloadable(){
    download('index.html',document.getElementById("html").value);
    download('index.js',document.getElementById("js").value);
    download('styles.css',document.getElementById("css").value);
}


window.onload = function() {
    compile();
}

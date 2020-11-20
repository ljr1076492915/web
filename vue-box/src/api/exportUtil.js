export function downloadFromBlob({
    response,
    filename,
    type
}) {
    const blobType = {
        type
    } || {};
    const blob = new Blob([response.data], blobType);
    const linkNode = document.createElement("a");
    let fileName = filename;

    if (!fileName) {
        const disposition = response.headers["content-disposition"];
        fileName =
            decodeURIComponent(
                disposition.substr(
                    disposition.indexOf("filename=") + "filename=".length
                )
            );
        fileName = decodeURI(escape(fileName));
    }
    linkNode.download = fileName; //a标签的download属性规定下载文件的名称
    linkNode.style.display = "none";
    linkNode.href = URL.createObjectURL(blob); //生成一个Blob URL
    document.body.appendChild(linkNode);
    linkNode.click(); //模拟在按钮上的一次鼠标单击

    URL.revokeObjectURL(linkNode.href); // 释放URL 对象
    document.body.removeChild(linkNode);
}

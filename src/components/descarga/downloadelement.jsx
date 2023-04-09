import html2canvas from "html2canvas";

export default function DownloadElement(elemento) {
  function downloadScreenshot() {
    const element = document.getElementById("capture");

    html2canvas(element).then(function (canvas) {
      const link = document.createElement("a");
      link.download = "meme.jpg";
      link.href = canvas.toDataURL("image/jpeg");
      link.click();
    });
  }

  return (
    <>
      {elemento.elemento && (
        <button onClick={downloadScreenshot}>Descargar como JPG</button>
      )}
    </>
  );
}

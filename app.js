const $ = document,
  fileUploader = $.querySelector('#fileUploader'),
  uploaderTitle = $.querySelector('#uploaderText'),
  uploadInput = $.querySelector('#fileInput');

fileUploader.addEventListener('dragover', (event) => {
  event.preventDefault();
  fileUploader.style.borderStyle = 'solid';
  uploaderTitle.textContent = 'Release To Upload file';
});

fileUploader.addEventListener('dragleave', (event) => {
  event.preventDefault();
  uploaderTitle.textContent = 'Drag & Drop To Upload File';
  fileUploader.style.borderStyle = 'dashed';
});

fileUploader.addEventListener('drop', (event) => {
  event.preventDefault();
  validateUploadedImage(event.dataTransfer.files);
});

uploadButton.onclick = () => uploadInput.click();

uploadInput.addEventListener('change', (event) => {
  validateUploadedImage(event.target.files);
});

function uploadImage(fileUploader, file) {
  let fileReader = new FileReader();
  fileReader.readAsDataURL(file);
  fileReader.onload = (event) => {
    fileUploader.innerHTML = `<img src='${event.target.result}' alt="">`;
  };
  fileUploader.style.borderStyle = 'solid';
}

function validateUploadedImage(uploadedFiles) {
  if (uploadedFiles.length === 1) {
    let [file, validFileTypes] = [
      uploadedFiles[0],
      ['image/jpeg', 'image/png', 'image/jpg'],
    ];
    if (!validFileTypes.includes(file.type)) alert('invalid image extension');
    else uploadImage(fileUploader, file);
  } else alert("you can't drag more than one picture!");
}

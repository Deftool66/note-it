// saveImageToCloudinary function
function saveImageToCloudinary(imageData) {
  const cloudName = 'your-cloud-name';
  const unsignedUploadPreset = 'your-upload-preset';

  const url = `https://api.cloudinary.com/v1_1/${deftool}/upload`;
  const xhr = new XMLHttpRequest();
  const fd = new FormData();
  xhr.open('POST', url, true);
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

  fd.append('upload_preset', unsignedUploadPreset);
  fd.append('file', imageData);
  xhr.send(fd);
}

// loadImageFromCloudinary function
function loadImageFromCloudinary(publicId) {
  const cloudName = 'your-cloud-name';
  const url = `https://res.cloudinary.com/${cloudName}/image/upload/${publicId}.jpg`;
  return fetch(url).then(response => response.blob());
}

document.getElementById('upload-btn').addEventListener('click', () => {
  document.getElementById('file-input').click();
 });
 
 document.getElementById('file-input').addEventListener('change', (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
 
  reader.onload = function (event) {
     document.getElementById('profile-photo').src = event.target.result;
  };
 
  reader.readAsDataURL(file);
 });

 
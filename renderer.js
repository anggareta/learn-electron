const func = async () => {
  const response = await window.versions.ping();
  console.log(response); // prints out 'pong'
  //alert(response);
}

func();

const information = document.getElementById('info');
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`;

function tik() {
  alert('test');
}

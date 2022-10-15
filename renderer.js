const func = async () => {
  const response = await window.versions.ping();
  console.log(response); // prints out 'pong'
  //alert(response);
}

func();

const information = document.getElementById('info');
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`;

document.getElementById('tekan').addEventListener('click', async () => {
  const response = await window.anggareta.ayus();
  console.log(response);
});

document.getElementById('toggle-dark-mode').addEventListener('click', async () => {
  const isDarkMode = await window.darkMode.toggle();
  document.getElementById('theme-source').innerHTML = isDarkMode ? 'Dark' : 'Light';
});

document.getElementById('reset-to-system').addEventListener('click', async () => {
  await window.darkMode.system();
  document.getElementById('theme-source').innerHTML = 'System';
});
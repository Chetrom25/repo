import page4child from './page4child'
import kiev from './assets/kiev1943.jpg'
import './styles/page4.css'

const myGlobalVal = {
  field1: '111111',
  field2: '222222',
  img: kiev
}

// Function to fetch and display the log data
async function fetchLogs() {
    const response = await fetch('remote.txt');
    const logData = await response.text();
    const logLines = logData.trim().split('\n');
    const tableBody = document.getElementById('log-table-body');
    logLines.forEach(page4child(tableBody));
  }

  const fromjsDiv = document.getElementById('fromjs')
  fromjsDiv.src = kiev
  fromjsDiv.style.width = '400px'
  fromjsDiv.style.height = '400px'
  console.log(myGlobalVal)
  // Fetch the logs when the page is loaded
  window.addEventListener('load', fetchLogs);
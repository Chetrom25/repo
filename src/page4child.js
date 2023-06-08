module.exports = (tableBody) => (logLine) => {
    const [time, ip] = logLine.split(' | ');
    const row = document.createElement('tr');
    const timeCell = document.createElement('td');
    const ipCell = document.createElement('td');
    timeCell.textContent = time.substring(6); // Skip "Time: " prefix
    ipCell.textContent = ip.substring(12); // Skip "Remote IP: " prefix
    row.appendChild(timeCell);
    row.appendChild(ipCell);
    tableBody.appendChild(row);
}
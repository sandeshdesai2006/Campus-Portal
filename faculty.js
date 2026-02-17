/* ==========================================
   Faculty Dashboard Functions
   ========================================== */

/* Mark Attendance Button */
function markAttendance() {
  let status = document.getElementById("attendanceStatus");

  if (status) {
    status.innerHTML = "✅ Attendance marked successfully for today!";
    status.style.marginTop = "10px";
    status.style.fontWeight = "600";
  }
}

/* Upload Marks Form */
function uploadMarks(event) {
  event.preventDefault();

  let status = document.getElementById("marksStatus");

  if (status) {
    status.innerHTML = "📌 Marks uploaded successfully!";
    status.style.marginTop = "10px";
    status.style.fontWeight = "600";
  }
}

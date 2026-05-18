const API = "http://localhost:5000";

async function createStudent() {

  const data = {

    name:
      document.getElementById("studentName").value,

    className:
      document.getElementById("studentClass").value,

    studentId:
      document.getElementById("studentId").value,

    password:
      document.getElementById("studentPassword").value
  };

  await fetch(`${API}/create-student`, {

    method: "POST",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify(data)
  });

  alert("Student Created");

  loadStudents();
}

async function loadStudents() {

  const response =
    await fetch(`${API}/students`);

  const students =
    await response.json();

  const table =
    document.getElementById("studentTable");

  table.innerHTML = "";

  let totalStudents = students.length;

  document.getElementById(
    "totalStudents"
  ).innerText = totalStudents;

  students.forEach(student => {

    let total = 0;

    student.fees.forEach(fee => {
      total += fee.amount + fee.fine;
    });

    table.innerHTML += `
      <tr>
        <td>${student.name}</td>
        <td>${student.className}</td>
        <td>${student.studentId}</td>
        <td>₹${total}</td>
      </tr>
    `;
  });
}

loadStudents();
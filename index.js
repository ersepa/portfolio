// Scroll down navbar

let lastScrollY = window.scrollY;
const navbar = document.getElementById("container");

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    navbar.style.transform = "translateY(-100%)";
  } else {
    navbar.style.transform = "translateY(0)";
  }
  lastScrollY = window.scrollY;
});

// Drowdown button

const btn = document.getElementById("dropdownButton");
const menu = document.getElementById("dropdownMenu");
const infor = document.getElementById("menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  btn.classList.toggle("ring-7");
  btn.classList.toggle("ring-[rgba(30,64,175,0.7)]");
});

infor.addEventListener("click", () => {
  infor.classList.toggle("ring-7");
  infor.classList.toggle("ring-[rgba(30,64,175,0.7)]");
});

document.addEventListener("click", function (e) {
  if (!btn.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.add("hidden");
    btn.classList.remove("ring-7", "ring-[rgba(30,64,175,0.7)]");
  }
});

document.addEventListener("click", function (e) {
  if (!infor.contains(e.target) && !menu.contains(e.target)) {
    infor.classList.remove("ring-7", "ring-[rgba(30,64,175,0.7)]");
  }
});

// Alert

(async () => {
  const ipAPI = "//api.ipify.org?format=json";
  const response = await fetch(ipAPI);
  const data = await response.json();
  const { value: ipAddress } = await Swal.fire({
    title: "Enter Your Name",
    input: "text",
    inputLabel: "Your Name Here",
    allowOutsideClick: false,
    allowEscapeKey: false,
    inputValidator: (value) => {
      if (!value) {
        return "You need to write something!";
      }
    },
  });
  if (ipAddress) {
    Swal.fire(`Hi! ${ipAddress} Welcome In My Portfolio Website`);
    document.getElementById("namaUser").innerText = ipAddress;
    document.getElementById("namaUser2").innerText = ipAddress;
  }
})();

// Form pesan

document.getElementById("formPesan").addEventListener("submit", function (e) {
  e.preventDefault(); // biar ga reload halaman

  // Ambil nilai input
  const nama = document.getElementById("nama").value;
  const tanggal = document.getElementById("tanggal").value;
  const email = document.getElementById("email").value;
  const gender =
    document.querySelector('input[name="gender"]:checked')?.value || "";
  const pesan = document.getElementById("pesan").value;

  // Validasi simple
  if (!nama || !email || !pesan) {
    alert("Harap isi minimal Nama, Email, dan Pesan!");
    return;
  }

  // Masukkan data ke tabel
  const tabel = document.getElementById("tabelPesan");
  const row = tabel.insertRow();
  row.innerHTML = `
        <td class="py-2 px-3">${nama}</td>
        <td class="py-2 px-3">${tanggal}</td>
        <td class="py-2 px-3">${email}</td>
        <td class="py-2 px-3">${gender}</td>
        <td class="py-2 px-3">${pesan}</td>
    `;

  // Reset form
  document.getElementById("formPesan").reset();
});

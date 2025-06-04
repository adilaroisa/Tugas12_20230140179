/* date-picker */
flatpickr("#tanggal", {
  altInput : true,
  altFormat: "j F Y",
  dateFormat: "Y-m-d",
  maxDate  : "today"
});

document.getElementById("kirimBtn").addEventListener("click", () => {
  const nama      = document.getElementById("nama").value.trim();
  const nim       = document.getElementById("nim").value.trim();
  const jurusan   = document.getElementById("jurusan").value;
  const peminatan = document.querySelector('input[name="peminatan"]:checked')?.value;
  const angkatan  = document.getElementById("angkatan").value;
  const alamat    = document.getElementById("alamat").value.trim();
  const tanggal   = document.getElementById("tanggal").value;

  if (!nama || !nim || !jurusan || !peminatan || !angkatan || !alamat || !tanggal) {
    alert("Isi semua data dengan lengkap.");
    return;
  }

  const tglFormat = new Date(tanggal).toLocaleDateString("id-ID", {
    day: "numeric", month: "long", year: "numeric"
  });

  /* isi modal */
  document.getElementById("hasilNama").textContent      = nama;
  document.getElementById("hasilNIM").textContent       = nim;
  document.getElementById("hasilJurusan").textContent   = jurusan;
  document.getElementById("hasilPeminatan").textContent = peminatan;
  document.getElementById("hasilAngkatan").textContent  = angkatan;
  document.getElementById("hasilAlamat").textContent    = alamat;
  document.getElementById("hasilTanggal").textContent   = tglFormat;

  /* tampilkan modal */
  document.getElementById("popup").classList.remove("hidden");

  /* reset */
  document.getElementById("myForm").reset();
});

/* close modal */
const popup    = document.getElementById("popup");
document.getElementById("closeBtn").addEventListener("click", () => popup.classList.add("hidden"));
window.addEventListener("click", e => { if (e.target === popup) popup.classList.add("hidden"); });

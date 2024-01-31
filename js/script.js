const tambah = document.getElementById("tambah");
const form = document.getElementById("form");
const buku = document.getElementById("buku");
const daftar = document.getElementById("daftar");
const tabel = document.getElementById("tabel");
const isi = document.getElementById("isi");
const pesan = document.getElementById("pesan");



tambah.addEventListener("click", function() {
    form.style.display = "block";
  });

buku.addEventListener("submit", function(event) {
  event.preventDefault();
  const judul = buku.judul.value;
  const penulis = buku.penulis.value;
  const tahun = buku.tahun.value;

  const data = {
    judul: judul,
    penulis: penulis,
    tahun: tahun
  };
  // Tambahkan data buku ke array
  dataBuku.push(data);
  localStorage.setItem("dataBuku", JSON.stringify(dataBuku));

  form.style.display = "none";
  buku.judul.value = "";
  buku.penulis.value = "";
  buku.tahun.value = "";
});

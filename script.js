function findNextDate() {
  // Dapatkan tanggal yang diinput oleh pengguna
  const date = new Date(document.getElementById("start-date").value);
  console.log(date);

  // Tambahkan 7 hari ke tanggal tersebut
  date.setDate(date.getDate() + 999);

  // Tampilkan tanggal di elemen dengan ID "next-date"
  document.getElementById("next-date").innerHTML = date.toLocaleDateString(
    "id-ID",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );
}

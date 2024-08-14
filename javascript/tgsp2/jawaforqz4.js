function klasifikasiNilai(nilai, kehadiran, totalPertemuan) {
   
    const persentaseKehadiran = (kehadiran / totalPertemuan) * 100;

    if (nilai > 85) {
      if (persentaseKehadiran >= 75) {
        console.log("Kategori A: Lulus");
      } else {
        console.log("Kategori A: Tidak Lulus");
      }
    } else if (nilai >= 70 && nilai <= 85) {
      if (persentaseKehadiran >= 75) {
        console.log("Kategori B: Lulus");
      } else {
        console.log("Kategori B: Tidak Lulus");
      }
    } else if (nilai >= 50 && nilai <= 70) {
      if (persentaseKehadiran >= 75) {
        console.log("Kategori C: Lulus");
      } else {
        console.log("Kategori C: Tidak Lulus");
      }
    } else {
      console.log("Tidak Lulus");
    }
  }
  
 
  klasifikasiNilai(90, 20, 25);
  klasifikasiNilai(80, 18, 25);
  klasifikasiNilai(65, 10, 15);
  klasifikasiNilai(40, 21, 25);
//p tugas2
function syaratKursus(terdaftar, pembayaranSukses) {
    if (terdaftar === true && pembayaranSukses === true) {
      console.log("Dapat mengikuti kursus");
    } else {
      console.log("Tidak dapat mengikuti kursus");
    }
  }
  
  
  syaratKursus(true, true);  
  syaratKursus(false, true); 
  syaratKursus(true, false); 
  syaratKursus(false, false); 
  

  
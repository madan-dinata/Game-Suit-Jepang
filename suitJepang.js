// deklarasi variabel untuk while
// bungkus semuanya menggunakan while
let tanya = true
while( tanya ) {
    // menangkap pilihan player
    let p = prompt('Pilih : Batu, Gunting, Kertas')
    
    // menangkap pilihan komputer
    // membangkitkan pilihan random
    let comp = Math.random()
        if ( comp < 0.34) {
            comp = 'batu'
        } else if( comp >= 0.34 && comp < 0.67 ) {
            comp = 'gunting'
        } else {
            comp = 'kertas'
        }

    // rules
    let hasil = ''
        if ( p == comp ) {
            hasil = 'SERI'
        } else if ( p == 'batu'){   
            hasil = ( comp == 'gunting') ? 'Menang' : 'Kalah'
        } else if ( p == 'gunting') {
            hasil = ( comp == 'batu') ? 'KALAH' : 'MENANG'
        } else if ( p == 'kertas') {
            hasil = ( comp == 'gunting') ? 'KALAH' : 'MENANG'
        } else {
            hasil = ' memasukkan pilihan yang salah'
        }

    // hasil
    alert('Kamu memilih : '+ p +' dan komputer memilih : '+ comp + '\nMaka hasilnya : kamu ' + hasil)
    tanya = confirm('Ingin bermain lagi?')
} 
alert('Terima kasih sudah bermain')
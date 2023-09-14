function hitungLuasPersegi(){
    var sisi = document.getElementById('sisiPersegi').value;
    var luas = sisi * sisi;
    document.getElementById('luasPersegi').innerHTML = "Luasnya adalah " + luas;
}

function hitungKelilingPersegi(){
    var sisi = document.getElementById('sisiPersegi').value;
    var keliling = 4 * sisi;
    document.getElementById('kelilingPersegi').innerHTML = "Kelilingnya adalah " + keliling;
}

function hitungLuasPersegiPanjang(){
    var panjang = document.getElementById('panjangPersegiPanjang').value;
    var lebar = document.getElementById('lebarPersegiPanjang').value;
    var luas = panjang * lebar;
    document.getElementById('luasPersegiPanjang').innerHTML = "Luasnya adalah " + luas;
}

function hitungKelilingPersegiPanjang(){
    var panjang = document.getElementById('panjangPersegiPanjang').value;
    var lebar = document.getElementById('lebarPersegiPanjang').value;
    var keliling = 2 * (parseInt(panjang) + (parseInt(lebar) ));
    document.getElementById('kelilingPersegiPanjang').innerHTML = "Kelilingnya adalah " + keliling;
}

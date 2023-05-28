function suwit() {
    document.getElementById('mulai').style.display = 'none';
    document.getElementById("sintax").setAttribute('src', "suwit.js");
    document.querySelector('.gajah').setAttribute('src', 'gajah.png');
    document.querySelector('.orang').setAttribute('src', 'orang.png');
    document.querySelector('.semut').setAttribute('src', 'semut.png');
    document.getElementById('title').innerHTML = "Suwit Jawa";

    function komputer() {
        const pc = Math.round(Math.random() * 3 + 1);
        if (pc == 1) return 'gajah';
        if (pc == 2) return 'orang';
        return 'semut';
        }
    
    function getHasil(pc, player){
        if (player == pc) return 'seri';
        if (player == 'gajah') return (pc == 'orang') ? 'menang' : 'kalah';
        if (player == 'orang') return (pc == 'gajah') ? 'kalah' : 'menang';
        if (player == 'semut') return (pc == 'orang') ? 'menang' : 'kalah';
    }
    
    function putar() {
        const imgComputer = document.querySelector('.pc');
        const gambar = ['gajah', 'semut', 'orang'];
        let i = 0;
        const waktuMulai = new Date().getTime();
        setInterval(function() {
            if (new Date().getTime() - waktuMulai > 500) {
                clearInterval;
                return;
            }
            imgComputer.setAttribute('src', gambar[i++] + '.png');
            if (i == gambar.length) i = 0;
        }, 100)
    }
    
    const pilihan = document.querySelectorAll('li img');
    pilihan.forEach(function(pil) {
        pil.addEventListener('click', function() {
            const pilihanComputer = komputer();
            const pilihanPlayer = pil.className;
            const hasil = getHasil(pilihanComputer, pilihanPlayer);
            putar();
            setTimeout(function() {
                const imgComputer = document.querySelector('.pc');
                imgComputer.setAttribute('src', pilihanComputer + '.png');
                const info = document.querySelector('.info');
                info.innerHTML = hasil;        
            }, 500);
        });    
    });
    
}

function bgk() {
    document.getElementById('mulai').style.display = 'none';
    document.getElementById("sintax").setAttribute('src', "suwit.js");
    document.querySelector('.gajah').setAttribute('src', 'batu.png');
    document.querySelector('.orang').setAttribute('src', 'gunting.png');
    document.querySelector('.semut').setAttribute('src', 'kertas.png');
    document.getElementById('title').innerHTML = "Rock paper scissor";

    function komputer() {
        const pc = Math.round(Math.random() * 3 + 1);
        if (pc == 1) return 'batu';
        if (pc == 2) return 'gunting';
        return 'kertas';
        }
    
    function pemain(pam){
        if (pam == "gajah") return 'batu';
        if (pam == "orang") return 'gunting';
        if (pam == "semut") return 'kertas';
    }   

    function getHasil(pc, player){
        if (player == pc) return 'seri';
        if (player == 'batu') return (pc == 'gunting') ? 'menang' : 'kalah';
        if (player == 'gunting') return (pc == 'batu') ? 'kalah' : 'menang';
        if (player == 'kertas') return (pc == 'gunting') ? 'kalah' : 'menang';
    }
    
    function putar() {
        const imgComputer = document.querySelector('.pc');
        const gambar = ['batu', 'kertas', 'gunting'];
        let i = 0;
        const waktuMulai = new Date().getTime();
        setInterval(function() {
            if (new Date().getTime() - waktuMulai > 500) {
                clearInterval;
                return;
            }
            imgComputer.setAttribute('src', gambar[i++] + '.png');
            if (i == gambar.length) i = 0;
        }, 100)
    }
    
    const pilihan = document.querySelectorAll('li img');
    pilihan.forEach(function(pil) {
        pil.addEventListener('click', function() {
            const pilihanComputer = komputer();
            const pilihanPlayer = pil.className;
            const pilihanPlayere = pemain(pilihanPlayer)
            const hasil = getHasil(pilihanComputer, pilihanPlayere);
            putar();
            setTimeout(function() {
                const imgComputer = document.querySelector('.pc');
                imgComputer.setAttribute('src', pilihanComputer + '.png');
                const info = document.querySelector('.info');
                info.innerHTML = hasil;        
            }, 500);
        });    
    });
    
}


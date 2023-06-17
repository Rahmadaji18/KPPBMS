<template>
    <div class="landing">
        <div class="header">
            <h1 class="satu">Schedule <span class="kuning">Now</span></h1>
        </div>
        <div class="paragraf">
            <p>Jika kamu mempunyai pertanyaan seputar layanan kami maupun ingin berdiskusi terkait <br> 
                permasalahan digital marketing dan branding, hingga meminta penawaran <br> jasa branding
                dari Ini Karya Kita, silakan mengisi form yang tertera pada <br>
                halaman ini.
            </p>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800&family=Poppins&display=swap');

.landing {
    background: linear-gradient(90deg, #002855, #001635);
    align-content: center;
    margin: 0;
    padding: 150px 30px 150px;
}

.header {
    text-align: center;
    margin-top: 40px;
}

.satu {
    color: var(--putih);
    font-size: 70px;
    font-family: "Montserrat";
    font-weight: 800;
}

.kuning {
    color: var(--kuning);
    font-size: 70px;
    font-family: "Montserrat";
    font-weight: 800;
}

.paragraf p {
    color: var(--putih);
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    text-align: center;
    margin-top: 40px;
    margin-left: 150px;
    margin-right: 150px;
}

@media (max-width: 900px) {
    .satu {
        font-size: 57px;
    }

    .kuning {
        font-size: 57px;
    }

    .paragraf p {
        font-size: 16px;
        margin-left: 50px;
        margin-right: 50px;
    }
}

/* @media (max-width: 768px) {
    .satu {
        font-size: 40px;
    }

    .kuning {
        font-size: 40px;
    }

    .paragraf p {
        font-size: 16px;
        margin-left: 50px;
        margin-right: 50px;
    }
} */

@media (max-width: 480px) {
    .satu {
        font-size: 30px;
    }

    .kuning {
        font-size: 30px;
    }

    .paragraf p {
        font-size: 14px;
        margin-left: 30px;
        margin-right: 30px;
    }
}
</style>

let cuaca = 'cerah';
let adaSepatuHitam = false;

if (cuaca == "cerah"){
    console.log('cuaca cerah')
    if (adaSepatuHitam) {
        console.log("Beli hitam di toko")
    } else {
        console.log("Beli sepatu putih dan kaus kaki putih di toko");
    }

} else {
    console.log("Buka aplikasi toko online")
    if (adaSepatuHitam) {
        console.log('checkout sepatu hitam di tokopedia')
    } else {
        console.log('check aplikasi shopee');
        if(adaSepatuHitam){
            console.log('checkout sepatu hitam di shopee');
        } else {
            console.log('checkout sepatu putih dan kaus kaki putih di shopee');
        }
    }
}
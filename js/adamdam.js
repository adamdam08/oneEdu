$(document).ready(function(){
    $('.login_href').click(function(){
        $('.fx_register').hide(-4000);
        $('.fx_forgot').hide(-4000);
        $('.fx_login').fadeIn(500);
    });
    $('.forgot_href').click(function(){
        $('.fx_login').hide(-4000);
        $('.fx_forgot').fadeIn(500);
    });
    $('.regis_href').click(function(){
        $('.fx_login').hide(-4000);
        $('.fx_register').fadeIn(500);
    });
});

function check_login(){
    var checker = false;
    var alamat = "", pass = "";
    alamat = login_email.value;
    pass = login_password.value;

    if(checker == false){
        if(alamat.length < 1){
            checker = false;
            alert("Email Belum Di isi");
            return false;
        }else if(alamat.indexOf("@") == -1){
            checker = false;
            alert("Tidak ada karakter @");
            return false;
        }else if(alamat.indexOf(".") == -1){
            checker = false;
            alert("Tidak ada karakter .");
            return false;
        }else{
            checker = true;
        }
    
        if(pass.length < 1){
            checker = false;
            alert("Password Belum Di isi");
        }else{
            checker = true;
        }
        console.log(checker);
    }

    if(checker == true){
        console.log(checker);
        window.open("login.html","_top");
    }
}

function check_forgot(){
    var alamat = ""
    alamat = forgot_email.value;

    if(alamat.length < 1){
        alert("Email Belum Di isi");
        return false;
    }else if(alamat.indexOf("@") == -1){
        alert("Tidak ada karakter @");
        return false;
    }else if(alamat.indexOf(".") == -1){
        alert("Tidak ada karakter .");
        return false;
    }
}

function check_regis(){
    var checker = false;
    var alamat = "", pass = "", pass_confirm = "";
    alamat = regis_email.value;
    pass = regis_pass.value;
    pass_confirm = regis_pass_confirm.value;

    if(checker == false){
        if(alamat.length < 1){
            checker = false;
            alert("Email Belum Di isi");
            return false;
        }else if(alamat.indexOf("@") == -1){
            checker = false;
            alert("Tidak ada karakter @");
            return false;
        }else if(alamat.indexOf(".") == -1){
            checker = false;
            alert("Tidak ada karakter .");
            return false;
        }else{
            checker = true;
        }
    
        if(pass.length < 1 && pass_confirm.length < 1){
            checker = false;
            alert("Password Belum Di isi");
            return false;
        }else{
            checker = true;
        }
        
        if(pass.length < 8 && pass_confirm.length < 8){
            checker = false;
            alert("Panjang karakter kurang dari 8 karakter");
            return false;
        }else if(pass != pass_confirm){
            checker = false;
            alert("Password Tidak sama");
            return false;
        }else{
            checker = true;
        }
    }

    if(checker == true){
        console.log(checker);
        window.open("login.html","_top");
    }

}

function check_contact(){
    var f_name = "" ,l_name = "", subjek = "", email = "", message = "";
    f_name = contact_first_name.value;
    l_name = contact_last_name.value;
    subjek = contact_subjek.value;
    email = contact_email.value;
    message = contact_message.value;
    var key = /^[a-zA-Z]+$/;

    if(f_name.length < 1){
        alert("Nama Depan Belum Di isi");
        return false;
    }else if(!(f_name.match(key))){
        alert("Nama Depan tidak boleh memuat karakter selain string");
        return false;
    }
    if(l_name.length < 1){
        alert("Nama Belakang Belum Di isi");
        return false;
    }else if(!(l_name.match(key))){
        alert("Nama Belakang tidak boleh memuat karakter selain string");
        return false;
    }

    if(subjek.length < 1){
        alert("Subjek Belum Di isi");
        return false;
    }
    if(email.length < 1){
        alert("Email Belum Di isi");
        return false;
    }
    if(message.length < 1){
        alert("Pesan Belum Di isi");
        return false;
    }
}
function isStrongpassword(password)
{
    let l= password.length>=8 ? true : false;
    let passKeyWord= password.toLowerCase().includes("password") ? false:true;
    let caps=/[A-Z]+/.test(password) ;

    if(l && passKeyWord && caps)
    {
        return true;
    }
    else
    {
        return false;
    }

}
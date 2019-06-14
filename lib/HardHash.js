function HardHash(passphrase, salt, n, r, p, callback)
{
    scrypt(passphrase, salt, n, r, p, 32, function(error, progress, key) {

        if(key)
          key = SHA256(ConvertToArray(Concatenate(Concatenate(passphrase, salt), key)));
          
        callback(error, progress, key)
    });
}
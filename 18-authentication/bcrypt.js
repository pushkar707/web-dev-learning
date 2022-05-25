const bcrypt = require('bcrypt')

const getSalt = async(pw) => {
    const salt = await bcrypt.genSalt(12)
    const hashpw = await bcrypt.hash(pw,salt)
    console.log(salt);
    console.log(hashpw);
}

const verifyPass = async (hash,pw) => {
    const result = await bcrypt.compare(pw,hash);
    if (result) {
        console.log('Password Matched');
    } else {
        console.log('Invalid Password');
    }
}

// getSalt('monkey')
const hash = '$2b$12$KLbVHzVSzDba6gLWLfF3/.VNOgUzv7LkLri/xNVdCzu1IVbY359Ha'
verifyPass(hash,'monkey')
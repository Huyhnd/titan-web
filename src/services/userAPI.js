import users from './common/data'

const login = function (params) {
    const { userName, passWord } = params
    if (!userName || !passWord) return false

    let user = users.find((x) => x.userName === userName && x.passWord === passWord)
    if (user) {
        localStorage.setItem('user_login', JSON.stringify(user))
        let user_login = localStorage.getItem('user_login')
        let newUser = JSON.parse(user_login)
        console.log(newUser.userName)
        return true
    }
}

const exportObject = {
    login
};

export default exportObject;

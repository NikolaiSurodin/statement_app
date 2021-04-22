import {Profile} from '@/classes/Profile'


class User {

    constructor(options) {
        this.birthday = options.birthday
        this.email = options.email
        this.password = options.password
        this.id = options.id
        this.profile = Profile
        this.user_hide = options.user_hide
        this.username = options.username

    }
}


export {User}
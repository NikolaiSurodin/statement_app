import {Profile} from '@/classes/Profile'


class User {

    constructor(options) {
        this.birthday = options.birthday
        this.email = options.email
        this.password = options.password
        this.id = options.id
        this.profile = new Profile({
                // сюда же опции передать надо

            city: options.profile.city,
            country: options.profile.country,
            created_at: options.profile.created_at,
            description: options.profile.description,
            first_name: options.profile.first_name,
            id: options.profile.id,
            last_name: options.profile.last_name,
            mobile: options.profile.mobile,
            region: options.profile.region,
            state: options.profile.state,
            title: options.profile.title,
            updated_at: options.profile.updated_at,
            user: options.profile.user
        })
        this.user_hide = options.user_hide
        this.username = options.username

    }
}


export {User}
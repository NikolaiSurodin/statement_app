import {User} from "@/classes/User"

class Event {
    constructor(options) {
        this.id = options.id
        this.user = options.user
        this.title = options.title
        this.comment = options.comment
        this.status = options.status
        //тип события (daysoff, vacation)
        this.kind = options.kind
        this.busy = options.busy
        this.request = options.request
        this.date_from = options.date_from
        this.date_to = options.date_to
        this.created_at = options.created_at
        this.updated_at = options.updated
    }
}
export { Event }
export class RandomDataModel {
    constructor(
        public id ?: number,
        public uid ?: string,
        public password ?: string,
        public first_name ?: string,
        public last_name ?: string,
        public username ?: string,
        public email ?: string,
        public avatar ?: string,
        public gender ?: string,
        public phone_number ?: string,
        public social_insurance_number ?: string,
        public date_of_birth ?: string,
        public employment ?: {
            title?: string,
            key_skill?: string
        },
        public address?: {
            city?: string,
            street_name?: string,
            street_address?: string,
            zip_code?: string,
            state?: string,
            country?: string,
            coordinates?: {
                lat?: number,
                lng?: number
            }
        },
        public credit_card?: {
            cc_number?: string
        },
        public subscription?: {
            plan?: string,
            status?: string,
            payment_method?: string,
            term?: string
        }

    ) {}
}
export interface signupPayload{
    firstname: string,
    lastname: string,
    gender: string,
    dob: Date,
    adress: {
        street: string,
        city: string,
        postalcode: number,
    },
    username: string,
    email: string,
    password: string,
}
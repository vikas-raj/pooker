export class UserHelper {
    name?: string;
    id?: number;
    email?: string;

    setData(id?: number, name?: string, email?: string) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
}
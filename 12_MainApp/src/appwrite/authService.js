import config from "../config/config";
import { Client, Account, ID } from 'appwrite'

export class AuthService {
    client = new Client()
    account

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId)
        this.account = new Account(this.client)
    }

    async createAcct({ email, pass, name }) {
        try {
            const userAcct = await this.account.create(ID.unique(), email, pass, name)
            if (userAcct) {
                //call another method
                return this.Login({ email, pass })

            } else {
                return userAcct
            }
        } catch (error) {
            throw error
        }
    }

    async Login({ email, pass }) {
        try {
            return await this.account.createEmailPasswordSession(
                email,
                pass
            )

        }
        catch (error) {
            throw error
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Appwrite service :: getCurrentIUser :: error", error)
        }
        return null
    }

    async logout() {
        try {
            await this.account.deleteSessions('current')
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error)
        }
    }
}


const authService = new AuthService()

export default authService

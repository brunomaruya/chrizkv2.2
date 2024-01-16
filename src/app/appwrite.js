import { Client, Account, Storage } from "appwrite";

export const client = new Client();

export const storage = new Storage(client);

const key = process.env.NEXT_PUBLIC_APPWRITE_KEY;

client.setEndpoint("https://cloud.appwrite.io/v1").setProject(key); // Replace with your project ID

export const account = new Account(client);
export { ID } from "appwrite";

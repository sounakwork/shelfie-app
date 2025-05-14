import { Client, Account, Avatars } from 'react-native-appwrite';

export const client = new Client()
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('68232efa003e6f84df6d')
    .setPlatform('dev.sounakroy.shelfie');

export const account = new Account(client);
export const avatars = new Avatars(client);
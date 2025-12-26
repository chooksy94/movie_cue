// track searches made by users

import {Client} from "react-native-appwrite";

const DATABBASE_ID= process.env.EXPO_PUBLIC_APPWRITE_DATABBASE_ID!;
const COLLECTION_ID= process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!;

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_DATABBASE_ID!)
export const updateSearchCount = async (query : string, movie: Movie  ) => {

}
// track searches made by users

import {Client, Databases, Query} from "react-native-appwrite";

const DATABBASE_ID= process.env.EXPO_PUBLIC_APPWRITE_DATABBASE_ID!;
const COLLECTION_ID= process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!;

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_DATABBASE_ID!)

const database = new Databases(client)
export const updateSearchCount = async (query : string, movie: Movie  ) => {
    const result = await database.listDocuments(DATABBASE_ID, COLLECTION_ID, [
        Query.equal('searchTerm', query)
    ])

    console.log(result);

}
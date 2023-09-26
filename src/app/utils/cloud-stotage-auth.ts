import { Storage } from "@google-cloud/storage";

export const storage = new Storage({
    keyFilename: `"../../${process.env.GCLOUD_APPLICATION_CREDS}`
})
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

const firestore = admin.firestore();
firestore.settings({
    timestampsInSnapshots: true,
    ignoreUndefinedProperties: true,
});

export { functions, firestore, admin };
export const auth = admin.auth();

import * as admin from 'firebase-admin';

export const firestoreDateConverter = (val) => {
    if (val instanceof admin.firestore.Timestamp) {
        return val.toDate();
    } else if (typeof val === 'string') {
        return new Date(val);
    }
}
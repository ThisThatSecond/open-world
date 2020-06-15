"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var admin = require("firebase-admin");
exports.firestoreDateConverter = function (val) {
    if (val instanceof admin.firestore.Timestamp) {
        return val.toDate();
    }
    else if (typeof val === 'string') {
        return new Date(val);
    }
};
//# sourceMappingURL=date.utils.js.map
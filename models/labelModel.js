const getDb = require("../utils/database").getDb;

class Label {
    constructor(invoice, item, description, name) {
        this.invoice = invoice;
        this.item = item;
        this.description = description;
        this.name = name;
    }

    save() {
        const db = getDb();
        db.collection("invoices")
            .insertOne(this)
            .then((result) => {
                console.log(result);
            })
            .catch((err) => {
                console.log(err);
            });
    }
}
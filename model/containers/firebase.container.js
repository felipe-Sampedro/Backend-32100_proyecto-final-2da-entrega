const admin = require('firebase-admin')
const {getFirestore} = require('firebase-admin/firestore')
const dbConfig = require('../../DB/firebase/firebase.config.json')

class FirebaseContainer{
    constructor(collection){
        const db = getFirestore();
        this.query = db.collection(collection)
    }

    static async connect(){
        admin.initializeApp({
            credential: admin.credential.cert(dbConfig.firebase.credential)
        })
    }

    async getAll(filter = {}) {
        const docRef = await this.query.get();
        const documents = docRef.docs
        return documents.map(doc =>{
            return{
                id: document.id,
                ...document.data()
            }
        })
      }
    
      async getById(id) {
        const docRef = this.query.get(id);
        if (!docRef){
            const message = `Resource with id ${id} does not exist in our records`;
            throw new HttpError(HTTP_STATUS.NOT_FOUND, message);
        }
        const document = await docRef.get();
        return document.data();
      }
    
      async save(item) {
        const docRef = this.query.doc();
        return await docRef.set(item)
      }
    
      async update(id, item) {
        const docRef = this.query.doc(id)
        if (!doc){
            const message = `Resource with id ${id} does not exist in our records`;
            throw new HttpError(HTTP_STATUS.NOT_FOUND, message);
        }
        return await docRef.update(item);
      }
    
      async delete(id) {
        return await docRef.delete(id)
      }

}

module.exports = FirebaseContainer
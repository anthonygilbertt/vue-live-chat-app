import { ref } from "@vue/reactivity";
import { projectFirestore } from '../firebase/config'

const getCollection = (collection) => {
    const documents = ref(null)
    const error = ref(null)

    // await projectFirestore.collection(collection).get(doc)
    let collectionRef = projectFirestore.collection(collection)
        .orderBy('createdAt')

    collectionRef.onSnapshot(snap => {
        let results = [] //we're going to have more than 1 result,
        // so we're creating an empty array

        // now we want to cycle through the 'snap' and
        //add each result to the newly created array
        snap.docs.forEach((doc) => {
            // this returns all the results of the document + the id for the document

            doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
        })
        documents.value = results
        error.value = null

    }, (err) => {
        console.log(err.message);
        documents.value = null
        error.value = 'could not fetch the data'
    }) //this is how you set up a real time listener

    return { error, documents }
}

export default getCollection
const { getDatabase } =  require('../database/config')
function getCollection() {
    return getDatabase().collection('articles')
}
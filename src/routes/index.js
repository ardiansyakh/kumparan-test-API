const express = require("express")
const ArticleController = require("../controllers/article")
const route = express.Router()

route.get('/', (req, res, next) => {
    res.status(200).json({sucess: true})
})
route.get('/articles', ArticleController.getAllArticles)
route.post('/articles', ArticleController.addArticle)

module.exports = route
const ArticleService = require("../services/article")

class ArticleController {
    static getAllArticles = async (req, res, next) => {
        try {
            new ArticleService().getAllArticles(req.query)
            .then(data => {
                res.status(200).json({data})
            })
            .catch(err => {
                throw(err)
            })
        } 
        catch (err) {
            next(err)
        }
    }
    static addArticle = async (req, res, next) => {
        try {
            new ArticleService().addArticle(req.body)
            .then(data => {
                res.status(200).json({data})
            })
            .catch(err => {
                throw(err)
            })
        } 
        catch (err) {
            next(err)
        }
    }
}

module.exports = ArticleController
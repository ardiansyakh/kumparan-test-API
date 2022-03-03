const ArticleModel = require("../models/article")

class ArticleService {
    async getAllArticles(params) {
        let { page = 1, limit = 20, query, author } = params
        let filter = {}
        if(query) {
            filter = {
                ...filter,
                $or: [
                    { title : { $regex : `${ '.*' + query + '.*' }`, $options: "i" }},
                    { body : { $regex : `${ '.*' + query + '.*' }`, $options: "i" }},
                ]
            }
        }
        if(author) {
            filter = {
                ...filter,
                author: { $regex : `${ '.*' + author + '.*' }`, $options: "i" }
            }
        }
        const [articles, count] = await Promise.all([
            ArticleModel.getAllArticles({page, limit, filter}),
            ArticleModel.count({limit})
        ])
        return {
            current_page: page,
            count,
            data: articles
        }
    }
    async addArticle(params) {
        const newArticle = ArticleModel.newInstance(params)
        return await ArticleModel.newArticle(newArticle)
    }
}

module.exports = ArticleService
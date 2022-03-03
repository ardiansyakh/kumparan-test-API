const Joi = require('joi')
function getCollection() {
    const {getDatabase} = require('../database/config')
    return getDatabase().collection('articles')
}
class ArticleModel {
    constructor({_id, author, title, body, created}) {
        this._id = _id
        this.author = author
        this.title = title
        this.body = body
        this.created = created
    }
    static newInstance(params) {
        const schema = Joi.object({
            author: Joi.string().required(),
            title: Joi.string().required(),
            body: Joi.string().required(),
        })
        const { error } = schema.validate(params)
        if(error) {
            throw new Error(error)
        }
        params.created = new Date
        return new ArticleModel(params)
    }
    static newArticle = async (params) => {
        const res = await getCollection().insertOne(params)
        if (!res.insertedId) {
            throw new Error("failed to create article");
        }
        return this.getDetailArticle(res.insertedId)
    }
    static getAllArticles = async (params) => {
        let { page, limit, filter } = params
        const skip = ( +(page) - 1 ) * +(limit);
        let articles = await getCollection().aggregate([
            { $match: filter },
            { $sort: { created: -1 }},
            { $limit: +skip + +limit },
            { $skip: skip }
        ]).toArray()
        articles = articles.map(e => { return new ArticleModel(e)})
        return articles
    }
    static count = async (params) => {
        let { filter, limit } = params
        let totalPage = 0
        const articlesCount = await getCollection().aggregate([
          { $match: { filter }},
          { $count: "count_data" }
        ]).toArray();
        if(articlesCount.length > 0) {
          totalPage = Math.ceil(+(articlesCount[0].count_data ) / +limit)
        }
        return totalPage
      }
    static getDetailArticle = async (id) => {
        const article = await getCollection().findOne({_id: id})
        if(article) {
            return new ArticleModel(article)
        }
        else {
            throw new Error ('article not found')
        }
    }
}

module.exports = ArticleModel
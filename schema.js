import {
    GraphQLID,
    GraphQLNonNull,
    GraphQLString,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLList
} from 'graphql'
import Sequelize from 'sequelize'
import db from './db'


const categoriesType =  new GraphQLObjectType({
    name: "categories",
    description: "categories api",
    fields: ()=>({
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        name: {
            type: GraphQLString
        },
        parent_id: {
            type: GraphQLID
        },
        subCategories:{
            type: new GraphQLList(categoriesType),
            resolve(root){
                const { id } = root
                return db.models.categories.findAll({
                    where:{
                        parent_id: id
                    }
                })
            }
        }
    })
})

const articlesType = new GraphQLObjectType({
    name: "articles",
    description: "articles api",
    fields: ()=>({
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        title_vi: {
            type: GraphQLString
        },
        title_en: {
            type: GraphQLString
        },
        image: {
            type: GraphQLString
        },
        summary: {
            type: GraphQLString
        },
        content: {
            type: GraphQLString
        },
        updated_at: {
            type: GraphQLString
        }
    })
})

let Query = new GraphQLObjectType({
    name: "Query",
    description: "this is a root query categories",
    fields: ()=>({
        Categories:{
            type: new GraphQLList(categoriesType),
            resolve(){
                return db.models.categories.findAll({
                    where:{
                        parent_id: 0
                    }
                })
            }
        },
        Articles: {
            type: new GraphQLList(articlesType),
            resolve(){
                return db.models.articles.findAll({
                    order: [
                        ['id', 'DESC']
                    ],
                    limit: 5
                })
            }
        },
        search: {
            type : new GraphQLList(articlesType),
            args: {
                title : {
                    type: GraphQLString
                }
            },
            resolve(_, args){
                return db.models.articles.findAll({
                    where :{
                        title_en : args.title
                    }
                })
            }
        }
    })
})


let schema = new GraphQLSchema({
    query: Query
})

export default schema






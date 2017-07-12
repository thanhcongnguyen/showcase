import Sequelize from 'sequelize'
import _ from 'lodash'
import Faker from 'faker'

const Conn = new Sequelize('graphql', 'postgres', '123456', {
        host: 'localhost',
        dialect: 'postgres',
        poll:{
            max: 10,
            min: 0,
            idle: 30000,
            port: 5432
        }
})

const Categories = Conn.define('categories', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    parent_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
},
{
    timestamps: false,
    underscored: true
})



const Articles = Conn.define('articles', {
    title_vi: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    title_en: {
        type: Sequelize.STRING,
        allowNull: false
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false
    },
    summary: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    }
},
{
    timestamps:true,  
    underscored:true
})



// Conn.sync().then(()=>{
    
//     return Articles.create({
//        title_vi: "Redux Là Gì ?",
//        title_en: "redux",
//        image: "redux.png",
//        summary: "redux là 1 thư viện quản lý trạng thái",
//        content: "nội dung đang được cập nhật"
//     })

// })



export  default  Conn
import express from "express";
import { Sequelize, DataTypes } from "sequelize";

const app = express();

const sequelize = new Sequelize('tienda', 'postgres', '1234', { host: 'localhost', dialect: 'postgres' });

(async () => {
    const Client = sequelize.define('Client', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull:false
        }
    });
    
    const Product = sequelize.define('Product', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },  
        code: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });


    Client.belongsToMany(Product, {through: 'Order'});
    Product.belongsToMany(Client, {through: 'Order'});
    
    await sequelize.sync(); 
})()


app.listen(3000, () => {
    console.log("SERVER ON");
});
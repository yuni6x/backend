function createModelOrder(Sequelize, DataTypes) {
    const Order = Sequelize.define(
      "Order", 
      {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
          },
          permintaan: {
            type: DataTypes.STRING,
            allowNull: false
          },
          biayaPembangunan: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          estimasiWaktu: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          image: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          isAccept: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
          },
          status: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          rating: {
            type: DataTypes.FLOAT,
            allowNull: true,
          },
          review: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          id_penyewa: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          id_pekerja: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
          },
          updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
          },
      },
      {
        tableName: "orders",
      }
    );
    return Order;
}

module.exports = createModelOrder;
module.exports = {
    // sử lý trong trường hợp nhiều document
    multipleMongooseToObject: function (mongoose) {
        return mongoose.map(mongoose => mongoose.toObject());
    },
    // sử dụng trong trường hợp có 1 document
    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
      }
}
module.exports = app => {
  const Article = require("../../../libs/db/models/Article");
  const Tag = require("../../../libs/db/models/Tag");

  app.use("/web/api/news/:id", async (req, res, next) => {
    console.log(2);
    const { id } = req.params;
    console.log(id);

    res.send(id);
  });

  app.use("/web/api/news", async (req, res, next) => {
    const { type = "" } = req.query;
    console.log(type);
    let newsList = [];
    switch (type) {
      case "tag":
        const { name = "", page = 1, limit = 10 } = req.query;
        const skip = (page - 1) * limit;
        const tag = await Tag.findOne({ name });
        newsList = await Article.find({ tags: [tag._id] })
          .populate("author")
          .skip(Number(skip))
          .limit(Number(limit));
        break;

      case "channel":
        break;
      default:
        newsList = [];
        break;
    }
    res.send(newsList);
  });
};

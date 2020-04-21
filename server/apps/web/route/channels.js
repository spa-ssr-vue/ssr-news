module.exports = app => {
  const Channel = require("./../../../libs/db/models/Channel");

  app.use("/web/api/channels", async (req, res, next) => {
    const channels = await Channel.find();
    res.send(channels);
  });

  app.use("/web/api/channels/:id", async (req, res, next) => {
    const { id } = req.params;
    console.log(id);
  });
};

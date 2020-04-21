module.exports = {
  devServer: {
    proxy: {
      "/admin/api": {
        target: "http://localhost:3008",
        ws: true,
        changeOrigin: true,
      },
    },
  },
};

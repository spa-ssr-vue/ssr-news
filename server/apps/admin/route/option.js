module.exports = app => {
  const Channel = require('./../../../libs/db/models/Channel')
  const User = require('./../../../libs/db/models/User')

  app.use('/admin/api/:resource/option', async (req, res, next) => {
    const { resource } = req.params
    let option = null
    switch (resource) {
      case 'users':
        option = {
          title: '用户列表',
          column: [
            { prop: 'username', label: '用户名' },
            { prop: 'password', label: '密码', type: 'password' }
          ]
        };
        break;

      case 'channels':
        const channels = (await Channel.find()).map(item => ({ label: item.name, value: item._id }))
        option = {
          title: '频道列表',
          column: [
            { prop: 'parentChannel', label: '上级频道', type: 'select', dicData: channels, row: true },
            { prop: 'name', label: '频道', row: true },
            { prop: 'alias', label: '别名', row: true },
          ]
        };
        break;

      case 'articles':
        const authors = (await User.find()).map(item => ({ label: item.username, value: item._id }))
        option = {
          title: '文章列表',
          column: [
            { prop: 'author', label: '作者', type: 'select', dicData: authors, row: true, required: true },
            { prop: 'title', label: '文章标题', type: 'input', row: true },
            { prop: 'content', label: '文章内容', formslot: true, row: true, span: 24 },
          ]
        };
        break;

      case 'comments':
        option = {
          title: '评论列表',
          column: [
            { prop: 'article', label: '所属文章', row: true },
            { prop: 'user', label: '用户', row: true },
            { prop: 'content', label: '评论内容', type: 'textarea', row: true, span: 24 },
          ]
        }
        break;

      case 'replies':
        option = {
          title: '回复列表',
          column: [
            { prop: 'article', label: '所属文章', row: true },
            { prop: 'formUser', label: '用户', row: true },
            { prop: 'toUser', label: '被回复用户', row: true },
            { prop: 'content', label: '回复内容', type: 'textarea', row: true, span: 24 },
          ]
        }
        break;

      case 'actions':
        option = {
          title: '操作列表',
          column: [
            { prop: 'user', label: '操作用户', row: true },
            {
              prop: 'type', label: '目标类型', type: 'select', dicData: [
                { label: 'Article', value: 'Article' },
                { label: 'Comment', value: 'Comment' },
                { label: 'Reply', value: 'Reply' },
                { label: 'User', value: 'User' }
              ], row: true
            },
            { prop: 'object', label: '具体目标', row: true },
            { prop: 'name', label: '操作名称', type: 'input', row: true },
          ]
        }
        break;

      default:
        option = {}
        break;
    }

    res.send({
      option
    });
  });





}
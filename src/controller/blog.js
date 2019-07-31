const getList = (author,keyword) => {
  return [
    {
      id: 1,
      title: '标题A',
      content: '内容A',
      createTime: 12312321,
      author: 'asdsad'
    },
    {
      id: 2,
      title: '标题B',
      content: '内容B',
      createTime: 222222221,
      author: 'asdsad'
    }
  ]
}

const getDetail = (id) => {
  return [
    {
      id: 1,
      title: '标题A',
      content: '内容A',
      createTime: 12312321,
      author: 'asdsad'
    }
  ]
}

module.exports = {
  getList,
  getDetail
}
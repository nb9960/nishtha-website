// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async actions => {
    const collection = actions.addCollection('Project')

    const { data } = await axios.get('https://api.github.com/users/erdeminanc/repos?sort=created&direction=asc&accept=application/vnd.github.v3+json')

    for (const item of data) {
      collection.addNode({
        name : item.name,
        private: item.private,
        url : item.html_url,
        description: item.description,
        forked: item.fork,
        created: item.created_at,
        last_update: item.updated_at,
        language: item.language,
      })
    }
  })
}

 


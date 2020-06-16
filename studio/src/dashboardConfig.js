export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ee810ef2a1bf45f642ead3a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-eg5t3dxo',
                  apiId: '57a6a674-d571-4bba-bb58-19411d8e1ab2'
                },
                {
                  buildHookId: '5ee810efd685eb01a09049bd',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-k4y9jp9e',
                  apiId: '150762e9-d91c-439c-9a9a-abed0e9e0f83'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/leepeters0023/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-k4y9jp9e.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

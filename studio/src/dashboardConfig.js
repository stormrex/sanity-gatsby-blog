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
                  buildHookId: '603816d74f9c27567c8dbaa9',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-82bhhyhd',
                  apiId: 'ebe1bb0c-171b-40c7-a8b8-af295adb7db5'
                },
                {
                  buildHookId: '603816d73216ea5d1a5a7e95',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-wkuwt6rb',
                  apiId: '635ffa05-a7f4-4e3a-bf15-fc56caa9a81f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/stormrex/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-wkuwt6rb.netlify.app', category: 'apps' }
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

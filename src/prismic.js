import * as prismic from '@prismicio/client'

export const client = prismic.createClient(process.env.REACT_APP_PRISMIC_REPO_NAME, {
  // If your repository is private, add an access token
  accessToken: process.env.REACT_APP_PRISMIC_ACCESS_TOKEN,

  // This defines how you will structure URL paths in your project.
  // Update the types to match the Custom Types in your project, and edit
  // the paths to match the routing in your project.
  //
  // If you are not using a router in your project, you can change this
  // to an empty array or remove the option entirely.
  /*routes: [
    {
      type: 'homepage',
      path: '/',
    },
  ],*/
})
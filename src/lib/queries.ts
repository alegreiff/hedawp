import { API_BASE_URL } from "./constants";
import type { Node as NodoTags } from '@/interfaces.posts';

export const getWPoptionsMain = async () => {
  const response = await fetch(API_BASE_URL,
    {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        query: `
          query opziones {
           data: opcionesPageMain {
            options: adsOpciones {
              id: adsCompilacion
              copy: adsCopy
            }
          }
        }
        `
      }),
    }); 

    const { data } = await response.json();
    return data.data.options;
  }



export const getAllTags = async () => {


 const response = await fetch(API_BASE_URL,
  {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({
      query: `
        query AllTags {
          tags {
            nodes {
              name
              slug
            }
          }
        }
      `
    }),
  });

  // destructure data from our JSON
	const { data } = await response.json();
  

	//  assign the array of nodes to "posts" variable for usability
	return data.tags.nodes as NodoTags[]
}

export const getPostsByTag = async (tag: string) => {
  const response = await fetch(API_BASE_URL,
    {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        query: `
          query SingleTag($id: ID = "${tag}") {
            tag(idType: SLUG, id: $id) {
              posts(where: {orderby: {field: DATE, order: DESC}}) {
                nodes {
                  date
                  content
                  title
                  slug
                  excerpt
                  featuredImage {
                    node {
                      sourceUrl
                    }
                  }
                }
              }
            }
          }
        `
      }),
    });
  
  // destructure data from our JSON
  const { data } = await response.json();
  
  const posts = data.tag.posts.nodes

  return posts
}
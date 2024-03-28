import { request, gql } from 'graphql-request';
const MASTER_URL = "https://api-ap-south-1.hygraph.com/v2/"+process.env.NEXT_PUBLIC_HYGRAPH_API_KEY+"/master";


const getAllPostList=async()=>{
    const query=gql`
    query MyQuery {
        blogposts(orderBy: id_DESC, first: 54, skip: 1) {
          id
          title
          description
          category
          author
          authorSlug
          date
          slug
          tags
          banner {
            url
          }
        }
      }
    `
    const result=await request(MASTER_URL,query);
    return result;
}



const getCarouselPostList=async()=>{
  const query=gql`
  query MyQuery {
      blogposts(orderBy: id_DESC, first: 1) {
        id
        title
        description
        category
        author
        authorSlug
        date
        slug
        banner {
          url
        }
      }
    }
  `
  const result=await request(MASTER_URL,query);
  return result;
}





const getCategoryPostList=async(slug)=>{
  const query=gql`
  query MyQuery {
      blogposts(where: {category: `+slug+`}) {
        id
        title
        description
        category
        author
        authorSlug
        date
        slug
        banner {
          url
        }
      }
    }
  `
  const result=await request(MASTER_URL,query);
  return result;
}





const getPostBySlug=async(postSlug)=>{
  const query=gql`
  query MyQuery {
    blogposts(where: {slug: "`+postSlug+`"}) {
      id
      title
      description
      category
      author
      authorSlug
      date
      slug
      tags
      content {
        markdown
      }
      banner {
        url
      }
    }
  }
  `
  const result=await request(MASTER_URL,query);
  return result;
}



const getPageBySlug=async(pageSlug)=>{
  const query=gql`
  query MyQuery {
    pages(where: {slug: "`+pageSlug+`"}) {
      id
      name
      slug
      description
      content {
        markdown
      }
    }
  }
  `
  const result=await request(MASTER_URL,query);
  return result;
}


const getPostBySearch=async(searchQuery)=>{
  const query=gql`
  query MyQuery {
    blogposts(where: {_search: "`+searchQuery+`"}) {
      id
      title
      description
      category
      author
      authorSlug
      date
      slug
      banner {
        url
      }
    }
  }
  `
  const result=await request(MASTER_URL,query);
  return result;
}



const getAllTagList=async()=>{
  const query=gql`
  query MyQuery {
      blogposts(orderBy: id_DESC) {
        id
        title
        tags
      }
    }
  `
  const result=await request(MASTER_URL,query);
  return result;
}




const getAuthorPostList=async(authorSlug)=>{
  const query=gql`
  query MyQuery {
      blogposts(where: {authorSlug: "`+authorSlug+`"}) {
        id
        title
        description
        category
        author
        authorSlug
        date
        slug
        banner {
          url
        }
      }
      authorDetails(where: {authorSlug: "`+authorSlug+`"}) {
        id
        authorName
        authorSlug
        authorDescription
        authorPicture {
          id
          url
        }
        instagramHandel
        linkedinHandel
        twitterHandel
      }
    }
  `
  const result=await request(MASTER_URL,query);
  return result;
}











export default{
    getAllPostList,
    getCarouselPostList,
    getCategoryPostList,
    getPostBySlug,
    getPageBySlug,
    getPostBySearch,
    getAllTagList,
    getAuthorPostList
}
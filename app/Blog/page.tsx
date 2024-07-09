import Footer from "../Footer";
import styles from './blog.module.css';
import dynamic from 'next/dynamic';

const ClientComponent = dynamic(() => import('./components/blogComponent'), { ssr: false });

async function getPosts() {
  const query = `
  {
    posts {
      nodes {
        id
        title
        slug
        featuredImage {
          node {
            id
            sourceUrl
          }
        }
        content(format: RENDERED)
        excerpt(format: RENDERED)
        date
      }
    }
  }`;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT}?query=${encodeURIComponent(query)}`,
    {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
      cache: "no-store",
    }
  );

  const { data } = await res.json();
  return data.posts.nodes;
}

interface SearchParams {
  query?: string;
  page?: string;
}

interface BlogPostsProps {
  searchParams: SearchParams;
}

export default async function BlogPosts({ searchParams }: BlogPostsProps) {
  const searchQuery = searchParams?.query || '';
  const currentPage = parseInt(searchParams?.page || '1', 10);
  const postsPerPage = 3;

  const posts = await getPosts();

  return (
    <>
      <header className={styles.header}>
        {/* Header content */}
      </header>
      <div className={styles.blogPage}>
        <ClientComponent
          posts={posts}
          postsPerPage={postsPerPage}
          initialSearchQuery={searchQuery}
          initialCurrentPage={currentPage}
        />
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

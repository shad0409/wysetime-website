import Image from 'next/image';
import Footer from "../../Footer";
import styles from './post.module.css';

async function getPost(slug: string) {
  const query = `
  {
    postBy(slug: "${slug}") {
      id
      title
      content(format: RENDERED)
      excerpt(format: RENDERED)
      date
      featuredImage {
        node {
          id
          sourceUrl
        }
      }
      author {
        node {
          name
        }
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
  return data.postBy;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  return (
    <>
      <header className={styles.hero}>
        {post.featuredImage && post.featuredImage.node && (
          <Image 
            src={post.featuredImage.node.sourceUrl} 
            alt="Post image" 
            layout="fill" 
            objectFit="cover" 
            className={styles.heroImage} 
          />
        )}
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{post.title}</h1>
          <div className={styles.heroExcerpt} dangerouslySetInnerHTML={{ __html: post.excerpt }}></div>
        </div>
      </header>
      <div className={styles.postContainer}>
        <aside className={styles.postInfo}>
          <div className={styles.postAuthor}>
            <i className="fas fa-user"></i>
            <span>{post.author.node.name}</span>
          </div>
          <div className={styles.postDate}>
            <i className="fas fa-calendar-alt"></i>
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
        </aside>
        <div className={styles.postContent} dangerouslySetInnerHTML={{ __html: post.content }}></div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

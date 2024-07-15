"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../blog.module.css';
import Contact from '@/app/HomeV2/Contact';

interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
    };
  };
}

interface ClientComponentProps {
  posts: Post[];
  postsPerPage: number;
  initialSearchQuery: string;
  initialCurrentPage: number;
}

const ClientComponent: React.FC<ClientComponentProps> = ({ posts, postsPerPage, initialSearchQuery, initialCurrentPage }) => {
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [currentPage, setCurrentPage] = useState(initialCurrentPage);
  const [selectedArchive, setSelectedArchive] = useState<string | null>(null);

  const stripParagraphTags = (html: string) => {
    return html.replace(/<\/?p[^>]*>/g, '');
  };

  const filteredPosts = posts.filter(post => {
    const matchesSearchQuery = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesArchive = selectedArchive ? 
      new Date(post.date).toLocaleString('default', { month: 'long', year: 'numeric' }) === selectedArchive : 
      true;
    return matchesSearchQuery && matchesArchive;
  });

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const sixtyDaysAgo = new Date();
  sixtyDaysAgo.setDate(sixtyDaysAgo.getDate() - 60);

  const recentPosts = posts.filter(post => {
    const postDate = new Date(post.date);
    return postDate >= sixtyDaysAgo;
  });

  const archives = posts.reduce<Record<string, number>>((acc, post) => {
    const postDate = new Date(post.date);
    const monthYear = `${postDate.toLocaleString('default', { month: 'long' })} ${postDate.getFullYear()}`;
    if (!acc[monthYear]) {
      acc[monthYear] = 0;
    }
    acc[monthYear]++;
    return acc;
  }, {});

  return (
    <div className={styles.blogPage}>
      <div className={styles.leftColumn}>
        <header className={styles.header}>
          <h1>Blogs</h1>
        </header>
        {currentPosts.map(post => (
          <div key={post.id} className={styles.mb4}>
            {post.featuredImage && post.featuredImage.node && (
              <Image src={post.featuredImage.node.sourceUrl} alt="Post image" className={styles.img} width={500} height={300} />
            )}
            <div className={styles.p4}>
              <span className={styles.bgRed}>Blogs</span>
              <h3 className={styles.title}>{post.title}</h3>
              <p className={styles.textGray} dangerouslySetInnerHTML={{ __html: stripParagraphTags(post.excerpt) }}></p>
              <div className={styles.flexBetween}>
                <span className={styles.textGray}>
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' })}
                </span>
                <Link href={`/Blog/${post.slug}`}>
                  <span className={`${styles.textRed} ${styles.hoverUnderline}`}>Read more &gt;</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
        <div className={styles.pagination}>
          {[...Array(Math.ceil(filteredPosts.length / postsPerPage)).keys()].map((number) => (
            <button
              key={number + 1}
              onClick={() => paginate(number + 1)}
              className={`${styles.pageItem} ${number + 1 === currentPage ? styles.active : ''}`}
            >
              {number + 1}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search posts"
            className={styles.searchInput}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className={styles.recentPosts}>
          <h2 className="text-xl font-bold mb-4">Recent Posts</h2>
          {recentPosts.map(post => (
            <Link key={post.id} href={`/Blog/${post.slug}`} className={styles.recentPostItem}>
              <span>{post.title}</span>
            </Link>
          ))}
        </div>
        <div className={styles.archives}>
          <h2 className="text-xl font-bold mb-4">Archives</h2>
          {Object.entries(archives).map(([archive, count]) => (
            <div
              key={archive}
              className={`${styles.recentPostItem} ${selectedArchive === archive ? styles.activeArchive : ''}`}
              onClick={() => {
                if (selectedArchive === archive) {
                  setSelectedArchive(null);
                } else {
                  setSelectedArchive(archive);
                }
                setCurrentPage(1);
              }}
              style={{ cursor: 'pointer' }}
            >
              <span>{archive} ({count})</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientComponent;

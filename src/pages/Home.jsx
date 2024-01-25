import React from "react";

const dummyPosts = [
  {
    id: 1,
    title: "Pemandangan Indah",
    description: "Nikmati pemandangan alam yang indah dan menenangkan.",
    imageUrl: "https://placekitten.com/800/400",
    date: "Januari 28, 2024",
    author: "John Doe",
  },
  {
    id: 2,
    title: "Tips Belajar Efektif",
    description: "Pelajari cara belajar dengan lebih efektif dan produktif.",
    imageUrl: "https://placekitten.com/800/401",
    date: "Februari 5, 2024",
    author: "Jane Doe",
  },
  {
    id: 3,
    title: "Resep Masakan Sederhana",
    description:
      "Coba resep masakan sederhana dan lezat untuk makan malam Anda.",
    imageUrl: "https://placekitten.com/800/402",
    date: "Maret 12, 2024",
    author: "Alex Johnson",
  },
  {
    id: 4,
    title: "Review Film Terbaru",
    description:
      "Baca ulasan tentang film terbaru yang sedang hits di bioskop.",
    imageUrl: "https://placekitten.com/800/403",
    date: "April 3, 2024",
    author: "Emily Wilson",
  },
  {
    id: 5,
    title: "Tips Kesehatan Mental",
    description: "Jaga kesehatan mental Anda dengan tips-tips sederhana.",
    imageUrl: "https://placekitten.com/800/404",
    date: "Mei 8, 2024",
    author: "David Brown",
  },
];

const Home = () => {
  return (
    <div className="home">
      <div className="posts">
        {dummyPosts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <p>{post.date}</p>
            <p>{post.author}</p>
            <img src={post.imageUrl} className="post-image" alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

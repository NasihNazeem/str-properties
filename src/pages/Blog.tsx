import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      slug: "understanding-calgarys-real-estate-market-2025",
      title: "Understanding Calgary's Real Estate Market in 2025",
      excerpt:
        "An in-depth look at current trends, opportunities, and what buyers and sellers need to know about Calgary's evolving property market.",
      date: "March 15, 2025",
      readTime: "5 min read",
      category: "Market Analysis",
      image: "/blog-placeholder-1.jpg",
    },
    {
      id: 2,
      slug: "5-essential-tips-first-time-property-investors",
      title: "5 Essential Tips for First-Time Property Investors",
      excerpt:
        "Navigate your first investment property with confidence using these expert strategies for success in Calgary's real estate market.",
      date: "March 10, 2025",
      readTime: "7 min read",
      category: "Investment",
      image: "/blog-placeholder-2.jpg",
    },
    {
      id: 3,
      slug: "complete-guide-property-management",
      title: "The Complete Guide to Property Management",
      excerpt:
        "Everything you need to know about managing rental properties, from tenant screening to maintenance planning.",
      date: "March 5, 2025",
      readTime: "10 min read",
      category: "Property Management",
      image: "/blog-placeholder-3.jpg",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary to-primary/80 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/hero-background.jpeg')] bg-cover bg-center"></div>
          </div>
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
              Insights & Updates
            </h1>
            <p className="text-xl text-white/90 animate-slide-up">
              Expert advice, market analysis, and property news
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg shadow-card border border-border overflow-hidden hover:shadow-lg transition-smooth group h-full"
                >
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                      <span className="text-white/60 text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-foreground mb-3">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* Coming Soon Message */}
            <div className="mt-16 text-center">
              <div className="inline-block bg-primary/10 rounded-lg px-8 py-6">
                <p className="text-lg text-foreground/80">
                  More articles coming soon. Stay tuned for expert insights and
                  property updates!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;

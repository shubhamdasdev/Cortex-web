"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample blog posts - in a real implementation, you might fetch these from the Substack API
const BLOG_POSTS = [
  {
    id: 1,
    title: "Introducing Cortex: The Future of AI Integration",
    excerpt: "We're excited to announce the launch of Cortex, our revolutionary platform designed to transform how businesses interact with AI technologies.",
    date: "April 5, 2025",
    url: "https://substack.com/@cortexteller",
    imageUrl: "/images/blog/post1.jpg" // You can add actual images to your public folder
  },
  {
    id: 2,
    title: "How AI is Reshaping Financial Services",
    excerpt: "Financial institutions are leveraging AI to enhance customer experiences, improve risk assessment, and streamline operations. Here's how Cortex is leading the charge.",
    date: "March 22, 2025",
    url: "https://substack.com/@cortexteller",
    imageUrl: "/images/blog/post2.jpg"
  },
  {
    id: 3,
    title: "The Evolution of AI Agents: What's Next?",
    excerpt: "AI agents are becoming increasingly sophisticated, capable of handling complex tasks with minimal human intervention. Discover the latest developments in this rapidly evolving field.",
    date: "March 10, 2025",
    url: "https://substack.com/@cortexteller",
    imageUrl: "/images/blog/post3.jpg"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-cortex-dark-blue">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              Cortex Blog
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Insights, updates, and thought leadership from the Cortex team
            </p>
          </div>
          
          {/* Featured post */}
          <div className="mb-16 bg-cortex-dark-blue/50 rounded-xl overflow-hidden border border-secondary/20 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                    Follow Our Substack for the Latest AI Insights
                  </h2>
                  <p className="text-white/80 mb-6">
                    We regularly publish in-depth articles, analysis, and thought leadership on our Substack. Subscribe to stay updated with the latest trends in AI, machine learning, and how Cortex is transforming businesses.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-secondary hover:bg-secondary/90 text-white">
                      <Link href="https://substack.com/@cortexteller" target="_blank" rel="noopener noreferrer" className="flex items-center">
                        Subscribe to our Substack
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="border-secondary/50 text-white hover:bg-secondary/10">
                      <Link href="https://substack.com/@cortexteller" target="_blank" rel="noopener noreferrer">
                        Read Latest Posts
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  <div className="relative w-full max-w-md aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="text-4xl font-bold text-white mb-2">Cortex</div>
                      <div className="text-xl text-white/80">Substack</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Recent posts */}
          <div>
            <h2 className="text-2xl font-bold mb-8 text-white">Recent Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {BLOG_POSTS.map(post => (
                <Link 
                  key={post.id}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="bg-cortex-dark-blue/50 rounded-lg overflow-hidden border border-secondary/20 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="h-48 bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                      <span className="text-white/70 text-sm">Article Preview</span>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="text-xs text-secondary mb-2">{post.date}</div>
                      <h3 className="text-lg font-medium mb-2 text-white group-hover:text-secondary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-white/70 mb-4 flex-1">{post.excerpt}</p>
                      <div className="flex items-center text-secondary text-sm font-medium">
                        Read on Substack
                        <ArrowUpRight className="ml-1 h-3 w-3" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-white/80 mb-6">Want to stay updated with all our latest content?</p>
            <Button asChild className="bg-secondary hover:bg-secondary/90 text-white">
              <Link href="https://substack.com/@cortexteller" target="_blank" rel="noopener noreferrer" className="flex items-center">
                Visit Our Substack
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

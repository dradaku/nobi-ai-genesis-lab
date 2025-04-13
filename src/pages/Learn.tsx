
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ChevronDown, Play, BookOpen, Lightbulb, Coins, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Learn = () => {
  return (
    <MainLayout>
      <div className="nobi-content-container">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Learn How to Build Generational Wealth</h1>
          <p className="text-xl text-muted-foreground">
            Discover how creators are using Zora Coins to build sustainable income streams and connect with their audiences
          </p>
        </div>
        
        {/* Video Section */}
        <section className="mb-16">
          <div className="nobi-card p-6 md:p-10">
            <div className="aspect-video rounded-lg bg-muted flex items-center justify-center mb-6 relative overflow-hidden">
              {/* This would be a video in production */}
              <div className="absolute inset-0 bg-nobi-gradient opacity-20"></div>
              <Button variant="outline" size="icon" className="h-16 w-16 rounded-full bg-primary/90 hover:bg-primary text-white border-4 border-white">
                <Play className="h-8 w-8 ml-1" />
              </Button>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-bold text-white">What are Zora Coins?</h3>
                <p className="text-white/80">5:32</p>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-2">Introduction to Zora Coins</h2>
            <p className="text-muted-foreground mb-6">
              Learn how Zora Coins work and how they can revolutionize the creator economy by allowing fans to support creators directly.
            </p>
            
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Beginner friendly</span>
              <span className="text-muted-foreground mx-2">•</span>
              <span className="text-sm text-muted-foreground">5 min read</span>
            </div>
          </div>
        </section>
        
        {/* Guides Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Creator Guides</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="nobi-card">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Getting Started</h3>
                <p className="text-muted-foreground mb-4">
                  Learn the basics of creating and selling your first Zora Coin
                </p>
                <Button variant="outline" className="w-full">
                  Read Guide <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            
            <Card className="nobi-card">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                  <Coins className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Monetization Strategies</h3>
                <p className="text-muted-foreground mb-4">
                  Discover different ways to monetize your content with Zora Coins
                </p>
                <Button variant="outline" className="w-full">
                  Read Guide <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            
            <Card className="nobi-card">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                  <ArrowUpRight className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Growing Your Community</h3>
                <p className="text-muted-foreground mb-4">
                  Build a loyal community around your Zora Coins and creative work
                </p>
                <Button variant="outline" className="w-full">
                  Read Guide <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {[
              {
                question: "What are Zora Coins?",
                answer: "Zora Coins are social tokens built on Base that enable creators to tokenize their work, build communities, and create new monetization opportunities. They're like a membership pass that gives fans access to exclusive content and experiences."
              },
              {
                question: "How do I create my first Zora Coin?",
                answer: "Creating your first Zora Coin is easy with Nobi AI. Simply upload an image or use our text-to-image generator, customize your coin details, and mint it to the Base blockchain. Our AI assistant can help guide you through the process."
              },
              {
                question: "What blockchain are Zora Coins built on?",
                answer: "Zora Coins are built on Base, a secure, low-cost, Ethereum L2 blockchain that makes transactions fast and affordable for creators and collectors alike."
              },
              {
                question: "How can I monetize my content with Zora Coins?",
                answer: "There are many ways to monetize with Zora Coins, including selling limited edition content, creating token-gated access to exclusive material, offering premium experiences to coin holders, and building long-term community value that appreciates over time."
              }
            ].map((faq, i) => (
              <div key={i} className="nobi-card p-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">{faq.question}</h3>
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground mt-4">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
        
        {/* CTA Section */}
        <section>
          <div className="nobi-card p-8 md:p-10 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Creating?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Put your knowledge into action and start building generational wealth with your creativity
            </p>
            <Link to="/create">
              <Button className="nobi-button-primary text-lg px-8 py-6">
                Start Creating <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Learn;

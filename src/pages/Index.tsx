
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Image, MessageSquare, Sparkles, Coins } from "lucide-react";
import MainLayout from "@/layouts/MainLayout";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="nobi-content-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Build <span className="nobi-gradient-text">Generational Wealth</span>{" "}
                as a Creator with Zora Coins
              </h1>
              <p className="text-xl text-muted-foreground">
                Nobi AI helps creators leverage the power of AI and Zora Coins to 
                tokenize, monetize, and distribute content like never before.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/create">
                  <Button className="nobi-button-primary text-lg w-full sm:w-auto">
                    Start Creating <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/learn">
                  <Button variant="outline" className="text-lg w-full sm:w-auto">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-[400px] rounded-2xl nobi-card p-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-nobi-gradient opacity-10"></div>
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-nobi-purple opacity-30 blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-nobi-cyan opacity-30 blur-3xl"></div>
                <div className="flex flex-col h-full justify-between">
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <div className="h-8 w-8 rounded-full bg-nobi-gradient flex items-center justify-center">
                        <span className="font-bold text-white text-sm">AI</span>
                      </div>
                      <p className="text-sm">Nobi AI Creator Assistant</p>
                    </div>
                    <div className="mt-2 p-3 bg-background rounded-lg">
                      <p>
                        I see you're a photographer focusing on streetwear culture. 
                        Have you considered creating a coin-gated lookbook with your best work?
                      </p>
                    </div>
                  </div>
                  <div className="p-4 bg-background/60 backdrop-blur-sm rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">Based on your content</p>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="aspect-square rounded-md bg-muted animate-pulse"></div>
                      <div className="aspect-square rounded-md bg-muted animate-pulse delay-100"></div>
                      <div className="aspect-square rounded-md bg-muted animate-pulse delay-200"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 top-8 left-8 right-8 bottom-8 bg-accent/10 rounded-2xl blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-card">
        <div className="nobi-content-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Empowering Creators with AI and Zora Coins
            </h2>
            <p className="text-xl text-muted-foreground">
              Discover how our tools can transform your creative process and help you
              build sustainable income streams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="nobi-card p-6">
              <div className="h-14 w-14 rounded-2xl bg-muted flex items-center justify-center mb-6">
                <MessageSquare className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI Creator Agent</h3>
              <p className="text-muted-foreground">
                Get personalized content ideas and strategies tailored to your unique
                creative style and audience.
              </p>
            </div>

            <div className="nobi-card p-6">
              <div className="h-14 w-14 rounded-2xl bg-muted flex items-center justify-center mb-6">
                <Image className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI Image Remix</h3>
              <p className="text-muted-foreground">
                Transform your existing visuals with our AI tools and create unique
                derivative works ready for tokenization.
              </p>
            </div>

            <div className="nobi-card p-6">
              <div className="h-14 w-14 rounded-2xl bg-muted flex items-center justify-center mb-6">
                <Coins className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Zora Coins Integration</h3>
              <p className="text-muted-foreground">
                Easily mint your creations as Zora Coins and build a sustainable
                economy around your content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="nobi-content-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How Nobi AI Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Three simple steps to transform your creative process and build wealth
              with Zora Coins
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="nobi-card p-6 h-full">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-nobi-gradient text-white font-bold text-xl mb-6">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Learn & Discover</h3>
                <p className="text-muted-foreground">
                  Our AI agent learns about your creative style, audience, and goals to
                  suggest personalized content strategies.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                <ArrowRight className="h-8 w-8 text-muted" />
              </div>
            </div>

            <div className="relative">
              <div className="nobi-card p-6 h-full">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-nobi-gradient text-white font-bold text-xl mb-6">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">Create & Remix</h3>
                <p className="text-muted-foreground">
                  Upload your content or use our text-to-coin feature to generate
                  unique text creations enhanced by AI.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                <ArrowRight className="h-8 w-8 text-muted" />
              </div>
            </div>

            <div className="nobi-card p-6 h-full">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-nobi-gradient text-white font-bold text-xl mb-6">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Monetize & Grow</h3>
              <p className="text-muted-foreground">
                Easily mint your creations as Zora Coins and distribute them to your
                audience, building your creative economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="nobi-content-container">
          <div className="nobi-card p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-nobi-gradient opacity-10"></div>
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-nobi-purple opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-nobi-cyan opacity-20 blur-3xl"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Build Generational Wealth with Your Creativity?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of creators already using Nobi AI to transform their
                creative process and monetize their work with Zora Coins.
              </p>
              <Link to="/create">
                <Button className="nobi-button-primary text-lg">
                  Start Creating Now <Sparkles className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;

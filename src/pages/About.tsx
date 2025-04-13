
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <MainLayout>
      <div className="nobi-content-container">
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">About Nobi AI</h1>
          
          <div className="aspect-video rounded-2xl bg-card p-8 flex items-center justify-center mb-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-nobi-gradient opacity-10"></div>
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-nobi-purple opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-nobi-cyan opacity-20 blur-3xl"></div>
            <div className="text-center relative z-10">
              <div className="h-20 w-20 rounded-full bg-nobi-gradient flex items-center justify-center mx-auto mb-6">
                <span className="font-bold text-white text-3xl">N</span>
              </div>
              <h2 className="text-3xl font-bold mb-2">
                <span className="nobi-gradient-text">Nobi</span> AI
              </h2>
              <p className="text-xl text-muted-foreground">
                Building generational wealth as a creator with Zora coins
              </p>
            </div>
          </div>
          
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-xl text-muted-foreground">
                Nobi AI is on a mission to empower creators with the tools, knowledge, and 
                technology they need to build sustainable income streams and form deeper connections
                with their audiences through Zora Coins on Base.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-4">What We Do</h2>
              <p className="text-xl text-muted-foreground mb-6">
                We combine the power of artificial intelligence with Zora's innovative Coins protocol
                to help creators:
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <div className="h-8 w-8 rounded-full bg-nobi-gradient flex-shrink-0 flex items-center justify-center text-white font-medium">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Generate Unique Content</h3>
                    <p className="text-muted-foreground">
                      Use our AI-powered tools to create and remix visual content that stands out
                    </p>
                  </div>
                </li>
                
                <li className="flex gap-3 items-start">
                  <div className="h-8 w-8 rounded-full bg-nobi-gradient flex-shrink-0 flex items-center justify-center text-white font-medium">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Discover Content Strategies</h3>
                    <p className="text-muted-foreground">
                      Get personalized recommendations from our AI creator assistant about what content to create
                    </p>
                  </div>
                </li>
                
                <li className="flex gap-3 items-start">
                  <div className="h-8 w-8 rounded-full bg-nobi-gradient flex-shrink-0 flex items-center justify-center text-white font-medium">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Mint Zora Coins</h3>
                    <p className="text-muted-foreground">
                      Easily convert your creations into Zora Coins on Base with just a few clicks
                    </p>
                  </div>
                </li>
                
                <li className="flex gap-3 items-start">
                  <div className="h-8 w-8 rounded-full bg-nobi-gradient flex-shrink-0 flex items-center justify-center text-white font-medium">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Build Generational Wealth</h3>
                    <p className="text-muted-foreground">
                      Create sustainable income streams that can grow over time as your creator economy expands
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-4">Why Zora Coins?</h2>
              <p className="text-xl text-muted-foreground mb-6">
                Zora Coins represent a revolutionary approach to creator monetization. Unlike
                traditional platforms that take large cuts of creator earnings, Zora Coins
                enable direct connections between creators and their audiences with:
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <div className="h-2 w-2 rounded-full bg-nobi-gradient flex-shrink-0 mt-2"></div>
                  <p className="text-muted-foreground">
                    <span className="font-bold text-foreground">Ownership:</span> True digital ownership for both creators and collectors
                  </p>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="h-2 w-2 rounded-full bg-nobi-gradient flex-shrink-0 mt-2"></div>
                  <p className="text-muted-foreground">
                    <span className="font-bold text-foreground">Scarcity:</span> Create limited editions that can appreciate in value
                  </p>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="h-2 w-2 rounded-full bg-nobi-gradient flex-shrink-0 mt-2"></div>
                  <p className="text-muted-foreground">
                    <span className="font-bold text-foreground">Programmability:</span> Build unique experiences and utility for coin holders
                  </p>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="h-2 w-2 rounded-full bg-nobi-gradient flex-shrink-0 mt-2"></div>
                  <p className="text-muted-foreground">
                    <span className="font-bold text-foreground">Community:</span> Form deeper connections with your most dedicated fans
                  </p>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-6">Join the Creator Revolution</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start your journey toward building generational wealth with your creativity today
            </p>
            <Link to="/create">
              <Button className="nobi-button-primary text-lg px-8 py-6">
                Start Creating <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;

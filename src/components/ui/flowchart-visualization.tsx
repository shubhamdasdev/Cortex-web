"use client";

import { motion } from "framer-motion";
import { ArcherContainer, ArcherElement } from "react-archer";

const FlowchartVisualization = () => {
  return (
    <section className="py-12 px-4 md:px-8 text-white bg-gradient-to-b from-transparent to-black/10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-5xl mx-auto relative"
      >
        <ArcherContainer strokeColor="rgba(88,160,194,0.5)" strokeWidth={1.5} endMarker={false}>
          {/* Central vertical timeline axis - visual indicator */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-secondary/10 via-secondary/30 to-secondary/10 -translate-x-1/2 z-0"></div>
          
          {/* Row 0: Agents and Copilot (left and right of timeline) */}
          <div className="flex justify-between mb-16 relative z-10">
            <div className="w-1/2 flex justify-end pr-10">
              <ArcherElement
                id="agents"
                relations={[
                  {
                    targetId: 'central-agents',
                    sourceAnchor: 'bottom',
                    targetAnchor: 'top',
                    style: { strokeColor: 'rgba(88,160,194,0.5)', strokeWidth: 1.5 },
                  },
                ]}
              >
                <div className="bg-cortex-dark-blue/60 backdrop-blur-sm border border-white/10 rounded-lg p-5 shadow-lg hover:shadow-secondary/20 transition-all duration-300 hover:-translate-y-0.5 group">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                    <div className="text-white/90 text-sm font-medium">Agents</div>
                  </div>
                  <div className="text-white/70 text-xs text-center">Independent AI systems that operate autonomously</div>
                </div>
              </ArcherElement>
            </div>
            
            <div className="w-1/2 flex justify-start pl-10">
              <ArcherElement
                id="copilot"
                relations={[
                  {
                    targetId: 'central-copilot',
                    sourceAnchor: 'bottom',
                    targetAnchor: 'top',
                    style: { strokeColor: 'rgba(88,160,194,0.5)', strokeWidth: 1.5 },
                  },
                ]}
              >
                <div className="bg-cortex-dark-blue/60 backdrop-blur-sm border border-white/10 rounded-lg p-5 shadow-lg hover:shadow-secondary/20 transition-all duration-300 hover:-translate-y-0.5 group">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    <div className="text-white/90 text-sm font-medium">Copilot</div>
                  </div>
                  <div className="text-white/70 text-xs text-center">Collaborative AI that works alongside humans</div>
                </div>
              </ArcherElement>
            </div>
          </div>
          
          {/* Invisible central connectors for Agents and Copilot */}
          <div className="flex justify-between relative">
            <div className="w-1/2 flex justify-center">
              <ArcherElement
                id="central-agents"
                relations={[
                  {
                    targetId: 'zone',
                    sourceAnchor: 'bottom',
                    targetAnchor: 'top',
                    style: { strokeColor: 'rgba(88,160,194,0.5)', strokeWidth: 1.5 },
                  },
                ]}
              >
                <div className="h-1 w-1"></div>
              </ArcherElement>
            </div>
            <div className="w-1/2 flex justify-center">
              <ArcherElement
                id="central-copilot"
                relations={[
                  {
                    targetId: 'zone',
                    sourceAnchor: 'bottom',
                    targetAnchor: 'top',
                    style: { strokeColor: 'rgba(88,160,194,0.5)', strokeWidth: 1.5 },
                  },
                ]}
              >
                <div className="h-1 w-1"></div>
              </ArcherElement>
            </div>
          </div>
          
          {/* Row 1: Zone (centered on timeline) */}
          <div className="flex justify-center mb-16 relative z-10">
            <ArcherElement
              id="zone"
              relations={[
                {
                  targetId: 'central-1',
                  sourceAnchor: 'bottom',
                  targetAnchor: 'top',
                  style: { strokeColor: 'rgba(88,160,194,0.5)', strokeWidth: 1.5 },
                },
              ]}
            >
              <div className="bg-cortex-dark-blue/60 backdrop-blur-sm border border-white/10 rounded-lg p-5 shadow-lg hover:shadow-secondary/20 transition-all duration-300 hover:-translate-y-0.5 group">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                  <div className="text-white/90 text-sm font-medium">Zone</div>
                </div>
                <div className="text-white/70 text-xs text-center">Copilot-like collaboration merged with agentic independence</div>
              </div>
            </ArcherElement>
          </div>
          
          {/* Invisible central connector to maintain vertical flow */}
          <div className="flex justify-center">
            <ArcherElement
              id="central-1"
              relations={[
                {
                  targetId: 'request',
                  sourceAnchor: 'bottom',
                  targetAnchor: 'top',
                  style: { strokeColor: 'rgba(88,160,194,0.5)', strokeWidth: 1.5 },
                },
              ]}
            >
              <div className="h-1 w-1"></div>
            </ArcherElement>
          </div>
          
          {/* Row 2: User Request (Left side) */}
          <div className="flex mb-16 relative z-10">
            <div className="w-1/2 flex justify-end pr-10">
              <ArcherElement
                id="request"
                relations={[
                  {
                    targetId: 'central-2',
                    sourceAnchor: 'bottom',
                    targetAnchor: 'top',
                    style: { strokeColor: 'rgba(88,160,194,0.5)', strokeWidth: 1.5 },
                  },
                ]}
              >
                <div className="bg-cortex-dark-blue/60 backdrop-blur-sm border border-white/10 rounded-lg p-5 shadow-lg w-72 hover:shadow-secondary/20 transition-all duration-300 hover:-translate-y-0.5 group">
                  <div className="flex items-center gap-2 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                      <path d="M12 20h9"></path>
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                    </svg>
                    <div className="text-white/90 text-sm font-medium">User Request</div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-white/5 rounded-md group-hover:bg-white/10 transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary mt-0.5 flex-shrink-0">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span className="text-white/90 text-xs font-medium">Do Changes in Equity Research Report, as per uploaded document</span>
                  </div>
                </div>
              </ArcherElement>
            </div>
            
            {/* Empty right side for first row */}
            <div className="w-1/2"></div>
          </div>
          
          {/* Invisible central connector */}
          <div className="flex justify-center">
            <ArcherElement
              id="central-2"
              relations={[
                {
                  targetId: 'plan',
                  sourceAnchor: 'top',
                  targetAnchor: 'top',
                  style: { strokeColor: 'rgba(88,160,194,0.5)', strokeWidth: 1.5 },
                },
              ]}
            >
              <div className="h-1 w-1"></div>
            </ArcherElement>
          </div>
          
          {/* Row 3: Copilot Response (Right side) */}
          <div className="flex mb-16 relative z-10">
            {/* Empty left side */}
            <div className="w-1/2"></div>
            
            <div className="w-1/2 flex justify-start pl-10">
              <ArcherElement
                id="plan"
                relations={[
                  {
                    targetId: 'central-3',
                    sourceAnchor: 'bottom',
                    targetAnchor: 'top',
                    style: { strokeColor: 'rgba(88,160,194,0.5)', strokeWidth: 1.5 },
                  },
                ]}
              >
                <div className="bg-cortex-dark-blue/60 backdrop-blur-sm border border-white/10 rounded-lg p-5 shadow-lg w-72 hover:shadow-secondary/20 transition-all duration-300 hover:-translate-y-0.5 group">
                  <div className="flex items-center gap-2 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                      <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path>
                      <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path>
                    </svg>
                    <div className="text-white/90 text-sm font-medium">Zone Response</div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-white/5 rounded-md group-hover:bg-white/10 transition-colors duration-200 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent mt-0.5 flex-shrink-0">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    <span className="text-white/90 text-xs font-medium">Sure, here is the plan</span>
                  </div>
                  <div className="space-y-2 pl-2">
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary/70">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                      <div className="h-1.5 w-24 bg-white/20 rounded group-hover:bg-white/30 transition-colors duration-200"></div>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary/70">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                      <div className="h-1.5 w-32 bg-white/20 rounded group-hover:bg-white/30 transition-colors duration-200"></div>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary/70">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                      <div className="h-1.5 w-20 bg-white/20 rounded group-hover:bg-white/30 transition-colors duration-200"></div>
                    </div>
                  </div>
                </div>
              </ArcherElement>
            </div>
          </div>
          
          {/* Invisible central connector */}
          <div className="flex justify-center">
            <ArcherElement
              id="central-3"
              relations={[
                {
                  targetId: 'code',
                  sourceAnchor: 'bottom',
                  targetAnchor: 'top',
                  style: { strokeColor: 'rgba(88,160,194,0.5)', strokeWidth: 1.5 },
                },
              ]}
            >
              <div className="h-1 w-1"></div>
            </ArcherElement>
          </div>
          
          {/* Row 4: Code Changes (Left side) */}
          <div className="flex mb-16 relative z-10">
            <div className="w-1/2 flex justify-end pr-10">
              <ArcherElement
                id="code"
                relations={[
                  {
                    targetId: 'central-4',
                    sourceAnchor: 'bottom',
                    targetAnchor: 'top',
                    style: { strokeColor: 'rgba(88,160,194,0.5)', strokeWidth: 1.5 },
                  },
                ]}
              >
                <div className="bg-cortex-dark-blue/80 backdrop-blur-sm border border-white/10 rounded-lg p-4 shadow-xl hover:shadow-secondary/10 transition-all duration-300 w-72 transform hover:-translate-y-0.5">
                  <div className="flex items-center gap-3 mb-3 p-1.5 hover:bg-white/5 rounded-md transition-colors">
                    <span className="flex h-3 w-3 rounded-full bg-green-500 flex-shrink-0 animate-pulse"></span>
                    <span className="text-white/90 text-xs font-medium flex-grow">Analyzed Equity Research Report (1-100)</span>
                  </div>
                  <div className="flex items-center gap-3 mb-3 p-1.5 hover:bg-white/5 rounded-md transition-colors">
                    <span className="flex h-3 w-3 rounded-full bg-green-500 flex-shrink-0"></span>
                    <span className="text-white/90 text-xs font-medium flex-grow">Edited Equity Research.xls</span>
                    <div className="flex items-center gap-2 bg-white/5 px-2 py-0.5 rounded">
                      <span className="text-green-400 text-xs font-medium">+48</span>
                      <span className="text-red-400 text-xs font-medium">-12</span>
                    </div>
                    <span className="text-secondary text-xs hover:text-secondary/80 cursor-pointer ml-1 font-medium">Open diff</span>
                  </div>
                  <div className="flex items-center gap-3 p-1.5 hover:bg-white/5 rounded-md transition-colors">
                    <span className="flex h-3 w-3 rounded-full bg-green-500 flex-shrink-0"></span>
                    <span className="text-white/90 text-xs font-medium flex-grow">Edited Equity Research.md</span>
                    <div className="flex items-center gap-2 bg-white/5 px-2 py-0.5 rounded">
                      <span className="text-green-400 text-xs font-medium">+2</span>
                      <span className="text-red-400 text-xs font-medium">-0</span>
                    </div>
                    <span className="text-secondary text-xs hover:text-secondary/80 cursor-pointer ml-1 font-medium">Open diff</span>
                  </div>
                </div>
              </ArcherElement>
            </div>
            
            {/* Empty right side */}
            <div className="w-1/2"></div>
          </div>
          
          {/* Invisible central connector */}
          <div className="flex justify-center">
            <ArcherElement
              id="central-4"
              relations={[
                {
                  targetId: 'actions',
                  sourceAnchor: 'bottom',
                  targetAnchor: 'top',
                  style: { strokeColor: 'rgba(88,160,194,0.5)', strokeWidth: 1.5 },
                },
              ]}
            >
              <div className="h-1 w-1"></div>
            </ArcherElement>
          </div>
          
          {/* Row 5: Actions (Right side) */}
          <div className="flex mb-16 relative z-10">
            {/* Empty left side */}
            <div className="w-1/2"></div>
            
            <div className="w-1/2 flex justify-start pl-10">
              <ArcherElement
                id="actions"
                relations={[
                  {
                    targetId: 'central-5',
                    sourceAnchor: 'bottom',
                    targetAnchor: 'top',
                    style: { strokeColor: 'rgba(88,160,194,0.5)', strokeWidth: 1.5 },
                  },
                ]}
              >
                <div className="bg-cortex-dark-blue/60 backdrop-blur-sm border border-white/10 rounded-lg p-5 shadow-lg w-80 hover:shadow-secondary/20 transition-all duration-300 hover:-translate-y-0.5 group">
                  <div className="flex items-center gap-2 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    <div className="text-white/90 text-sm font-medium">Choose an action</div>
                  </div>
                  <div className="flex flex-wrap gap-3 justify-start">
                    <button className="bg-green-600/80 text-xs px-4 py-1.5 rounded-md font-medium hover:bg-green-500 transition-colors shadow-md hover:shadow-green-500/20 flex items-center gap-1.5 transform hover:scale-105 duration-200">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Accept</span>
                    </button>
                    <button className="bg-red-600/80 text-xs px-4 py-1.5 rounded-md font-medium hover:bg-red-500 transition-colors shadow-md hover:shadow-red-500/20 flex items-center gap-1.5 transform hover:scale-105 duration-200">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                      <span>Reject</span>
                    </button>
                    <button className="bg-cortex-dark-blue/80 text-xs px-4 py-1.5 rounded-md font-medium border border-white/10 hover:bg-cortex-dark-blue/90 transition-colors shadow-md hover:shadow-white/5 flex items-center gap-1.5 transform hover:scale-105 duration-200">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      <span>See Edit option</span>
                    </button>
                    <button className="bg-cortex-dark-blue/80 text-xs px-4 py-1.5 rounded-md font-medium border border-white/10 hover:bg-cortex-dark-blue/90 transition-colors shadow-md hover:shadow-white/5 flex items-center gap-1.5 transform hover:scale-105 duration-200">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                      <span>Continue what I was doing</span>
                    </button>
                  </div>
                </div>
              </ArcherElement>
            </div>
          </div>
          
          {/* Invisible central connector */}
          <div className="flex justify-center">
            <ArcherElement
              id="central-5"
              relations={[
                {
                  targetId: 'syft',
                  sourceAnchor: 'bottom',
                  targetAnchor: 'top',
                  style: { strokeColor: 'rgba(88,160,194,0.5)', strokeWidth: 1.5 },
                },
              ]}
            >
              <div className="h-1 w-1"></div>
            </ArcherElement>
          </div>
          
          {/* Row 6: Syft Edits (Left side) */}
          <div className="flex mb-16 relative z-10">
            <div className="w-1/2 flex justify-end pr-10">
              <ArcherElement
                id="syft"
                relations={[
                  {
                    targetId: 'central-6',
                    sourceAnchor: 'bottom',
                    targetAnchor: 'top',
                    style: { strokeColor: 'rgba(88,160,194,0.5)', strokeWidth: 1.5 },
                  },
                ]}
              >
                <div className="bg-cortex-dark-blue/60 backdrop-blur-sm border border-white/10 rounded-lg p-5 shadow-lg w-72 hover:shadow-secondary/20 transition-all duration-300 hover:-translate-y-0.5 group">
                  <div className="flex items-center gap-2 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                    </svg>
                    <div className="text-white/90 text-sm font-medium">You edited <span className="text-secondary">Equity Research Report</span></div>
                  </div>
                  <div className="mb-2 text-white/90 text-xs font-medium">This is what I will do:</div>
                  <ul className="space-y-2 text-white/80 text-xs">
                    <li className="flex items-center gap-2 group-hover:text-secondary/90 transition-colors duration-200">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary/70">
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                      </svg>
                      <span>Open Directory</span>
                    </li>
                    <li className="flex items-center gap-2 group-hover:text-secondary/90 transition-colors duration-200">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary/70">
                        <polyline points="9 10 4 15 9 20"></polyline>
                        <path d="M20 4v7a4 4 0 0 1-4 4H4"></path>
                      </svg>
                      <span>Save the file</span>
                    </li>
                  </ul>
                </div>
              </ArcherElement>
            </div>
            
            {/* Empty right side */}
            <div className="w-1/2"></div>
          </div>
          
          {/* Invisible central connector */}
          <div className="flex justify-center">
            <ArcherElement
              id="central-6"
              relations={[
                {
                  targetId: 'yn',
                  sourceAnchor: 'bottom',
                  targetAnchor: 'top',
                  style: { strokeColor: 'rgba(88,160,194,0.5)', strokeWidth: 1.5 },
                },
              ]}
            >
              <div className="h-1 w-1"></div>
            </ArcherElement>
          </div>
          
          {/* Row 7: Yes/No Buttons (Right side) */}
          <div className="flex mb-16 relative z-10">
            {/* Empty left side */}
            <div className="w-1/2"></div>
            
            <div className="w-1/2 flex justify-start pl-10">
              <ArcherElement id="yn">
                <div className="bg-cortex-dark-blue/60 backdrop-blur-sm border border-white/10 rounded-lg p-5 shadow-lg hover:shadow-secondary/20 transition-all duration-300 hover:-translate-y-0.5 group">
                  <div className="flex items-center gap-2 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    <div className="text-white/90 text-sm font-medium">Would you like to proceed?</div>
                  </div>
                  <div className="flex gap-3">
                    <button className="bg-green-600/80 text-white text-xs px-4 py-2 rounded-md hover:bg-green-500 transition-colors duration-200 flex items-center gap-1 shadow-md hover:shadow-green-500/20">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Yes</span>
                    </button>
                    <button className="bg-red-600/80 text-white text-xs px-4 py-2 rounded-md hover:bg-red-500 transition-colors duration-200 flex items-center gap-1 shadow-md hover:shadow-red-500/20">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                      <span>No</span>
                    </button>
                  </div>
                </div>
              </ArcherElement>
            </div>
          </div>
        </ArcherContainer>
      </motion.div>
    </section>
  );
};

export default FlowchartVisualization;

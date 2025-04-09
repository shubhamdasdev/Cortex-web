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
              <div className="bg-cortex-dark-blue/60 backdrop-blur-sm border border-white/10 rounded-lg p-4 shadow-xl hover:shadow-secondary/10 transition-shadow duration-300 w-64 text-center transform hover:-translate-y-0.5">
                <div className="text-white/90 text-sm font-medium mb-1">Zone</div>
                <div className="text-white/70 text-xs">Copilot-like collaboration merged with agentic independence</div>
              </div>
            </ArcherElement>
          </div>
          
          {/* Row 0: Agents and Copilot (left and right of timeline) */}
          <div className="flex justify-between mb-16 relative z-10">
            <div className="w-1/2 flex justify-end pr-10">
              <ArcherElement
                id="agents"
                relations={[
                  {
                    targetId: 'zone',
                    sourceAnchor: 'bottom',
                    targetAnchor: 'top',
                    style: { strokeColor: 'rgba(88,160,194,0.5)', strokeWidth: 1.5 },
                  },
                ]}
              >
                <div className="bg-cortex-dark-blue/60 backdrop-blur-sm border border-white/10 rounded-lg p-4 shadow-xl hover:shadow-secondary/10 transition-shadow duration-300 w-64 text-center transform hover:-translate-y-0.5">
                  <div className="text-white/90 text-sm font-medium mb-1">Agents</div>
                  <div className="text-white/70 text-xs">Independent AI systems that operate autonomously</div>
                </div>
              </ArcherElement>
            </div>
            
            <div className="w-1/2 flex justify-start pl-10">
              <ArcherElement
                id="copilot"
                relations={[
                  {
                    targetId: 'zone',
                    sourceAnchor: 'bottom',
                    targetAnchor: 'top',
                    style: { strokeColor: 'rgba(88,160,194,0.5)', strokeWidth: 1.5 },
                  },
                ]}
              >
                <div className="bg-cortex-dark-blue/60 backdrop-blur-sm border border-white/10 rounded-lg p-4 shadow-xl hover:shadow-secondary/10 transition-shadow duration-300 w-64 text-center transform hover:-translate-y-0.5">
                  <div className="text-white/90 text-sm font-medium mb-1">Copilot</div>
                  <div className="text-white/70 text-xs">Collaborative AI that works alongside humans</div>
                </div>
              </ArcherElement>
            </div>
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
                <div className="bg-cortex-dark-blue/60 backdrop-blur-sm border border-white/10 rounded-lg p-3 shadow-lg w-64">
                  <div className="flex items-start gap-2 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary mt-1">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span className="text-white/80 text-xs">Fix up prime numbers to properly do AKS primality testing</span>
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
                <div className="bg-cortex-dark-blue/60 backdrop-blur-sm border border-white/10 rounded-lg p-3 shadow-lg w-64">
                  <div className="flex items-start gap-2 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent mt-1">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span className="text-white/80 text-xs">Sure, here is the plan</span>
                  </div>
                  <div className="pl-6 mt-2">
                    <div className="h-1 w-24 bg-white/20 rounded mb-1"></div>
                    <div className="h-1 w-32 bg-white/20 rounded mb-1"></div>
                    <div className="h-1 w-20 bg-white/20 rounded"></div>
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
                    <span className="text-white/90 text-xs font-medium flex-grow">Analyzed prime_number.py (1-100)</span>
                  </div>
                  <div className="flex items-center gap-3 mb-3 p-1.5 hover:bg-white/5 rounded-md transition-colors">
                    <span className="flex h-3 w-3 rounded-full bg-green-500 flex-shrink-0"></span>
                    <span className="text-white/90 text-xs font-medium flex-grow">Edited prime_number.py</span>
                    <div className="flex items-center gap-2 bg-white/5 px-2 py-0.5 rounded">
                      <span className="text-green-400 text-xs font-medium">+48</span>
                      <span className="text-red-400 text-xs font-medium">-12</span>
                    </div>
                    <span className="text-secondary text-xs hover:text-secondary/80 cursor-pointer ml-1 font-medium">Open diff</span>
                  </div>
                  <div className="flex items-center gap-3 p-1.5 hover:bg-white/5 rounded-md transition-colors">
                    <span className="flex h-3 w-3 rounded-full bg-green-500 flex-shrink-0"></span>
                    <span className="text-white/90 text-xs font-medium flex-grow">Edited aks_primality_test.py</span>
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
                <div className="bg-cortex-dark-blue/60 backdrop-blur-sm border border-white/10 rounded-lg p-4 shadow-lg w-72">
                  <div className="flex flex-wrap gap-3 justify-center">
                    <button className="bg-green-600/80 text-xs px-4 py-1.5 rounded-md font-medium hover:bg-green-600 transition-colors shadow-lg hover:shadow-green-500/20">Accept</button>
                    <button className="bg-red-600/80 text-xs px-4 py-1.5 rounded-md font-medium hover:bg-red-600 transition-colors shadow-lg hover:shadow-red-500/20">Reject</button>
                    <button className="bg-cortex-dark-blue/80 text-xs px-4 py-1.5 rounded-md font-medium border border-white/10 hover:bg-cortex-dark-blue/90 transition-colors shadow-lg hover:shadow-white/5">
                      Dev script/option
                    </button>
                    <button className="bg-cortex-dark-blue/80 text-xs px-4 py-1.5 rounded-md font-medium border border-white/10 hover:bg-cortex-dark-blue/90 transition-colors shadow-lg hover:shadow-white/5">
                      Continue what I was doing
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
                <div className="bg-cortex-dark-blue/60 backdrop-blur-sm border border-white/10 rounded-lg p-4 shadow-lg w-72">
                  <div className="mb-1 text-white/90 text-xs">
                    You edited syft.py. This is what I will do:
                  </div>
                  <ul className="list-disc list-inside ml-2 mt-2 space-y-1 text-white/80 text-xs">
                    <li>Open Dir</li>
                    <li>Run Terminal Command</li>
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
                <div className="flex gap-4">
                  <button className="bg-green-600/80 text-xs px-3 py-1 rounded hover:bg-green-600">
                    Yes
                  </button>
                  <button className="bg-red-600/80 text-xs px-3 py-1 rounded hover:bg-red-600">
                    No
                  </button>
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

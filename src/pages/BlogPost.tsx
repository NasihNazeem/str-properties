// import { useParams, Link } from "react-router-dom";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import { Button } from "@/components/ui/button";
// import { Calendar, Clock, User, ArrowLeft } from "lucide-react";

// // Sample blog post data - in a real app, this would come from a CMS or API
// const blogPostsData: Record<string, any> = {
//   "understanding-calgarys-real-estate-market-2025": {
//     id: 1,
//     title: "Understanding Calgary's Real Estate Market in 2025",
//     author: "Sarah Mitchell",
//     authorRole: "Senior Property Consultant",
//     date: "March 15, 2025",
//     readTime: "5 min read",
//     category: "Market Analysis",
//     image: "/blog-placeholder-1.jpg",
//     content: `
//       <p class="text-xl leading-relaxed">Calgary's real estate market continues to evolve, presenting both opportunities and challenges for buyers, sellers, and investors. As we move through 2025, understanding the current landscape is crucial for making informed property decisions.</p>

//       <hr class="my-8 border-border" />

//       <h2>Current Market Trends</h2>
//       <p>The Calgary market has shown remarkable resilience in recent months. With a balanced approach between supply and demand, we're seeing a stabilization that benefits both buyers and sellers. Interest rates have begun to normalize, creating new opportunities for those who have been waiting on the sidelines.</p>

//       <h3>Key Statistics</h3>
//       <ul>
//         <li><strong>Average home prices</strong> have increased by 3.2% year-over-year</li>
//         <li><strong>Days on market</strong> have decreased to an average of 28 days</li>
//         <li><strong>Inventory levels</strong> remain healthy at approximately 2.5 months</li>
//         <li><strong>New construction starts</strong> are up 15% compared to last year</li>
//       </ul>

//       <h2>What Buyers Need to Know</h2>
//       <p>For prospective buyers, now presents a compelling opportunity. With increased inventory and more reasonable pricing compared to other major Canadian markets, Calgary offers excellent value. However, competition remains strong for well-priced properties in desirable neighborhoods.</p>

//       <div class="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-lg">
//         <h3 class="mt-0 mb-4 text-primary">Essential Tips for Buyers:</h3>
//         <ul class="mb-0">
//           <li>Get pre-approved for financing before starting your search</li>
//           <li>Work with an experienced local consultant who knows the neighborhoods</li>
//           <li>Be prepared to move quickly on properties that meet your criteria</li>
//           <li>Consider both immediate needs and long-term investment potential</li>
//         </ul>
//       </div>

//       <h2>Seller Insights</h2>
//       <p>Sellers in Calgary's market should focus on presentation and pricing. Properties that are well-maintained, professionally staged, and competitively priced are moving quickly. The spring market typically brings increased activity, making this an ideal time to list.</p>

//       <h2>Looking Ahead</h2>
//       <p>Economic indicators suggest continued stability in Calgary's real estate market throughout 2025. Population growth, driven by interprovincial migration and international immigration, continues to support housing demand. Combined with ongoing infrastructure development and a diversifying economy, Calgary's property market remains fundamentally strong.</p>

//       <p><em>Whether you're buying, selling, or investing, understanding these trends and working with knowledgeable professionals can help you achieve your property goals in Calgary's dynamic market.</em></p>
//     `,
//   },
//   "5-essential-tips-first-time-property-investors": {
//     id: 2,
//     title: "5 Essential Tips for First-Time Property Investors",
//     author: "Michael Chen",
//     authorRole: "Investment Property Specialist",
//     date: "March 10, 2025",
//     readTime: "7 min read",
//     category: "Investment",
//     image: "/blog-placeholder-2.jpg",
//     content: `
//       <p class="text-xl leading-relaxed">Stepping into property investment can feel overwhelming, but with the right approach and knowledge, it can be one of the most rewarding financial decisions you'll make. Here are five essential tips to guide your first investment property purchase.</p>

//       <hr class="my-8 border-border" />

//       <h2>1. Start with Clear Investment Goals</h2>
//       <p>Before you begin searching for properties, define what you want to achieve. Are you looking for long-term appreciation, monthly cash flow, or a combination of both? Your goals will influence everything from location selection to property type.</p>

//       <div class="bg-muted/50 p-6 my-6 rounded-lg border border-border">
//         <h3 class="mt-0 mb-4">Questions to Consider:</h3>
//         <ul class="mb-0">
//           <li>What is your investment timeline?</li>
//           <li>How much risk are you comfortable with?</li>
//           <li>Do you want to be a hands-on or hands-off landlord?</li>
//           <li>What returns do you expect from your investment?</li>
//         </ul>
//       </div>

//       <h2>2. Understand the Numbers</h2>
//       <p>Successful property investment is fundamentally about understanding the financial aspects. Calculate your potential returns carefully and realistically.</p>

//       <h3>Key Metrics to Analyze:</h3>
//       <ul>
//         <li><strong>Cash Flow:</strong> Monthly rental income minus all expenses</li>
//         <li><strong>Cap Rate:</strong> Annual net operating income divided by property price</li>
//         <li><strong>Cash-on-Cash Return:</strong> Annual pre-tax cash flow divided by total cash invested</li>
//         <li><strong>Gross Rent Multiplier:</strong> Property price divided by gross annual rental income</li>
//       </ul>

//       <h2>3. Location is Everything</h2>
//       <p>The old real estate adage holds especially true for investment properties. Research neighborhoods thoroughly, considering factors like:</p>
//       <ul>
//         <li>Proximity to employment centers, schools, and amenities</li>
//         <li>Public transportation access</li>
//         <li>Crime rates and neighborhood safety</li>
//         <li>Future development plans</li>
//         <li>Historical appreciation rates</li>
//       </ul>

//       <h2>4. Factor in All Costs</h2>
//       <p>Many first-time investors underestimate the true cost of property ownership. Beyond the mortgage, budget for:</p>

//       <div class="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-lg">
//         <h3 class="mt-0 mb-4 text-primary">Hidden Costs to Consider:</h3>
//         <ul class="mb-0">
//           <li>Property taxes and insurance</li>
//           <li>Maintenance and repairs (typically 1% of property value annually)</li>
//           <li>Property management fees (if applicable)</li>
//           <li>Vacancy periods</li>
//           <li>Utilities (if included in rent)</li>
//           <li>HOA or condo fees</li>
//         </ul>
//       </div>

//       <h2>5. Build a Strong Team</h2>
//       <p>Don't go it alone. Successful investors surround themselves with experienced professionals:</p>
//       <ul>
//         <li><strong>Property Consultant:</strong> Helps find and evaluate properties</li>
//         <li><strong>Mortgage Broker:</strong> Secures favorable financing</li>
//         <li><strong>Property Inspector:</strong> Identifies potential issues</li>
//         <li><strong>Accountant:</strong> Optimizes tax strategy</li>
//         <li><strong>Property Manager:</strong> Handles day-to-day operations</li>
//         <li><strong>Lawyer:</strong> Reviews contracts and handles legal matters</li>
//       </ul>

//       <hr class="my-8 border-border" />

//       <h2>Final Thoughts</h2>
//       <p>Property investment can build significant wealth over time, but success requires education, patience, and strategic thinking. Start small, learn from experience, and scale your portfolio as you gain confidence and expertise.</p>

//       <p><em>Remember, every successful property investor was once a first-time buyer. With careful planning and the right guidance, you can achieve your investment goals and build lasting financial security.</em></p>
//     `,
//   },
//   "complete-guide-property-management": {
//     id: 3,
//     title: "The Complete Guide to Property Management",
//     author: "Jennifer Park",
//     authorRole: "Property Management Director",
//     date: "March 5, 2025",
//     readTime: "10 min read",
//     category: "Property Management",
//     image: "/blog-placeholder-3.jpg",
//     content: `
//       <p class="text-xl leading-relaxed">Effective property management is the cornerstone of successful real estate investment. Whether you're managing your own properties or considering professional management services, understanding the fundamentals is essential.</p>

//       <hr class="my-8 border-border" />

//       <h2>Tenant Screening: Your First Line of Defense</h2>
//       <p>Quality tenants make all the difference. A thorough screening process should include:</p>

//       <div class="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-lg">
//         <h3 class="mt-0 mb-4 text-primary">Essential Screening Steps:</h3>
//         <ul class="mb-0">
//           <li><strong>Credit Check:</strong> Review credit history and score</li>
//           <li><strong>Employment Verification:</strong> Confirm stable income (typically 3x rent)</li>
//           <li><strong>Rental History:</strong> Contact previous landlords</li>
//           <li><strong>Criminal Background Check:</strong> Ensure safety and compliance</li>
//           <li><strong>References:</strong> Speak with professional and personal references</li>
//         </ul>
//       </div>

//       <p><em>Always apply consistent screening criteria to all applicants to ensure fair housing compliance.</em></p>

//       <h2>Setting the Right Rent</h2>
//       <p>Pricing your rental correctly balances maximizing income with minimizing vacancy. Consider:</p>
//       <ul>
//         <li>Comparable rental rates in your area</li>
//         <li>Property condition and amenities</li>
//         <li>Market demand and seasonal factors</li>
//         <li>Your expenses and desired return</li>
//       </ul>

//       <p>Review and adjust rent annually, giving proper notice as required by local regulations.</p>

//       <h2>Maintenance Planning</h2>
//       <p>Proactive maintenance preserves property value and keeps tenants satisfied.</p>

//       <div class="bg-muted/50 p-6 my-6 rounded-lg border border-border">
//         <h3 class="mt-0 mb-4">Regular Maintenance Schedule:</h3>
//         <ul class="mb-0">
//           <li><strong>Monthly:</strong> HVAC filter changes, landscaping</li>
//           <li><strong>Quarterly:</strong> Gutter cleaning, pest control</li>
//           <li><strong>Semi-Annually:</strong> HVAC servicing, smoke detector testing</li>
//           <li><strong>Annually:</strong> Deep cleaning, appliance inspection, roof inspection</li>
//         </ul>
//       </div>

//       <h3>Emergency Procedures</h3>
//       <p>Establish clear protocols for handling emergencies:</p>
//       <ul>
//         <li>Maintain a list of reliable 24/7 contractors</li>
//         <li>Provide tenants with emergency contact information</li>
//         <li>Define what constitutes a maintenance emergency</li>
//         <li>Set expectations for response times</li>
//       </ul>

//       <h2>Legal Compliance</h2>
//       <p>Stay current with landlord-tenant laws, including:</p>
//       <ul>
//         <li>Fair housing regulations</li>
//         <li>Security deposit requirements</li>
//         <li>Eviction procedures</li>
//         <li>Property safety standards</li>
//         <li>Privacy and entry notice requirements</li>
//       </ul>

//       <h2>Financial Management</h2>
//       <p>Maintain meticulous financial records:</p>

//       <div class="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-lg">
//         <h3 class="mt-0 mb-4 text-primary">Essential Documentation:</h3>
//         <ul class="mb-0">
//           <li>Rent collection records</li>
//           <li>Expense receipts and invoices</li>
//           <li>Tax-related documents</li>
//           <li>Lease agreements and renewals</li>
//           <li>Maintenance and repair logs</li>
//         </ul>
//       </div>

//       <p><em>Consider using property management software to streamline accounting and generate reports.</em></p>

//       <h2>Communication Best Practices</h2>
//       <p>Clear communication prevents misunderstandings and builds positive tenant relationships:</p>
//       <ul>
//         <li>Respond to inquiries promptly (within 24-48 hours)</li>
//         <li>Document all communications in writing</li>
//         <li>Be professional and respectful</li>
//         <li>Set clear expectations upfront</li>
//         <li>Provide multiple communication channels</li>
//       </ul>

//       <h2>When to Hire Professional Management</h2>
//       <p>Consider professional property management if:</p>
//       <ul>
//         <li>You own multiple properties</li>
//         <li>Your property is far from where you live</li>
//         <li>You don't have time for day-to-day management</li>
//         <li>You lack maintenance or legal expertise</li>
//         <li>The cost is justified by your time savings and reduced stress</li>
//       </ul>

//       <hr class="my-8 border-border" />

//       <h2>Conclusion</h2>
//       <p>Successful property management requires dedication, organization, and attention to detail. Whether you choose to manage properties yourself or hire professionals, understanding these fundamentals will help you make informed decisions and maximize your investment returns.</p>

//       <p><em>Remember, good property management is not just about collecting rent—it's about protecting your investment, maintaining property value, and creating positive experiences for your tenants.</em></p>
//     `,
//   },
// };

// const BlogPost = () => {
//   const { slug } = useParams<{ slug: string }>();
//   const post = slug ? blogPostsData[slug] : null;

//   if (!post) {
//     return (
//       <div className="min-h-screen">
//         <Header />
//         <main className="py-20">
//           <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
//             <h1 className="text-4xl font-bold text-foreground mb-4">
//               Post Not Found
//             </h1>
//             <p className="text-muted-foreground mb-8">
//               The blog post you're looking for doesn't exist.
//             </p>
//             <Link to="/blog">
//               <Button variant="default">
//                 <ArrowLeft className="mr-2 h-4 w-4" />
//                 Back to Blog
//               </Button>
//             </Link>
//           </div>
//         </main>
//         <Footer />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen">
//       <Header />
//       <main>
//         {/* Hero Section */}
//         <section className="relative py-20 bg-gradient-to-br from-primary to-primary/80 overflow-hidden">
//           <div className="absolute inset-0 opacity-10">
//             <div className="absolute inset-0 bg-[url('/hero-background.jpeg')] bg-cover bg-center"></div>
//           </div>
//           <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
//             <Link
//               to="/blog"
//               className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-smooth"
//             >
//               <ArrowLeft className="mr-2 h-4 w-4" />
//               Back to Blog
//             </Link>
//             <div className=" mx-4 inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full mb-4">
//               <span className="text-white text-sm font-medium">
//                 {post.category}
//               </span>
//             </div>
//             <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-up">
//               {post.title}
//             </h1>
//             <div className="flex flex-wrap items-center gap-6 text-white/90">
//               <div className="flex items-center gap-2">
//                 <User className="h-5 w-5" />
//                 <div>
//                   <div className="font-medium">{post.author}</div>
//                   <div className="text-sm text-white/70">{post.authorRole}</div>
//                 </div>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Calendar className="h-4 w-4" />
//                 <span>{post.date}</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Clock className="h-4 w-4" />
//                 <span>{post.readTime}</span>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Article Content */}
//         <article className="py-16 bg-background">
//           <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
//             <div
//               className="prose prose-lg max-w-none
//                 prose-headings:font-bold prose-headings:text-foreground
//                 prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-border
//                 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-primary
//                 prose-p:text-foreground/90 prose-p:leading-relaxed prose-p:mb-6
//                 prose-a:text-primary prose-a:no-underline hover:prose-a:underline
//                 prose-strong:text-foreground prose-strong:font-semibold
//                 prose-em:text-foreground/80 prose-em:not-italic
//                 prose-ul:my-6 prose-ul:text-foreground/90
//                 prose-li:my-2 prose-li:leading-relaxed
//                 prose-ol:my-6 prose-ol:text-foreground/90
//                 prose-hr:border-border prose-hr:my-8"
//               dangerouslySetInnerHTML={{ __html: post.content }}
//             />

//             {/* Author Bio */}
//             <div className="mt-12 pt-8 border-t border-border">
//               <div className="bg-muted/50 rounded-lg p-6">
//                 <div className="flex items-start gap-4">
//                   <div className="bg-primary/10 rounded-full p-4">
//                     <User className="h-8 w-8 text-primary" />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-foreground mb-1">
//                       About {post.author}
//                     </h3>
//                     <p className="text-sm text-primary mb-2">
//                       {post.authorRole}
//                     </p>
//                     <p className="text-muted-foreground">
//                       {post.author} is a dedicated professional at Kraven
//                       Properties, bringing years of expertise and local market
//                       knowledge to help clients achieve their property goals.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Back to Blog CTA */}
//             <div className="mt-12 text-center">
//               <Link to="/blog">
//                 <Button variant="outline" size="lg">
//                   <ArrowLeft className="mr-2 h-4 w-4" />
//                   Read More Articles
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         </article>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default BlogPost;

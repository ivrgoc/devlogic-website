import type { BlogPostPreview, BlogPostData, RelatedPostData } from '@/components/blog';

// Mock blog posts - will be replaced with Sanity CMS data
export const blogPosts: BlogPostPreview[] = [
  {
    slug: 'building-scalable-applications',
    title: 'Building Scalable Applications with Next.js 14',
    excerpt:
      'Learn best practices for building performant and scalable web applications using the latest Next.js features including App Router, Server Components, and more.',
    category: 'development',
    date: '2024-01-15',
    readTime: 8,
    featured: true,
    image: null,
  },
  {
    slug: 'modern-devops-practices',
    title: 'Modern DevOps Practices for 2024',
    excerpt:
      'Explore the latest trends in DevOps, including GitOps, platform engineering, and infrastructure as code.',
    category: 'devops',
    date: '2024-01-10',
    readTime: 6,
    featured: false,
    image: null,
  },
  {
    slug: 'design-systems-guide',
    title: 'The Complete Guide to Design Systems',
    excerpt:
      'How to create and maintain a design system that scales with your organization and improves developer productivity.',
    category: 'design',
    date: '2024-01-05',
    readTime: 10,
    featured: false,
    image: null,
  },
  {
    slug: 'ai-in-software-development',
    title: 'How AI is Transforming Software Development',
    excerpt:
      'From code completion to automated testing, discover how artificial intelligence is revolutionizing the way we build software.',
    category: 'ai',
    date: '2024-01-03',
    readTime: 7,
    featured: false,
    image: null,
  },
  {
    slug: 'react-server-components',
    title: 'Understanding React Server Components',
    excerpt:
      'A deep dive into React Server Components, how they work, and when to use them in your applications.',
    category: 'development',
    date: '2023-12-28',
    readTime: 12,
    featured: false,
    image: null,
  },
  {
    slug: 'ux-principles-for-developers',
    title: 'Essential UX Principles Every Developer Should Know',
    excerpt:
      'Improve your applications by understanding fundamental user experience principles and applying them to your code.',
    category: 'design',
    date: '2023-12-20',
    readTime: 9,
    featured: false,
    image: null,
  },
  {
    slug: 'kubernetes-best-practices',
    title: 'Kubernetes Best Practices for Production',
    excerpt:
      'Learn how to run Kubernetes in production with confidence using proven patterns and practices.',
    category: 'devops',
    date: '2023-12-15',
    readTime: 11,
    featured: false,
    image: null,
  },
  {
    slug: 'building-saas-products',
    title: 'From Idea to Launch: Building SaaS Products',
    excerpt:
      'A comprehensive guide to building and launching successful SaaS products, from validation to growth.',
    category: 'business',
    date: '2023-12-10',
    readTime: 15,
    featured: false,
    image: null,
  },
  {
    slug: 'typescript-advanced-patterns',
    title: 'Advanced TypeScript Patterns for Large Applications',
    excerpt:
      'Master advanced TypeScript patterns that will help you build more maintainable and type-safe applications.',
    category: 'tutorials',
    date: '2023-12-05',
    readTime: 14,
    featured: false,
    image: null,
  },
];

// Full blog post content
export const blogPostsContent: Record<string, BlogPostData> = {
  'building-scalable-applications': {
    slug: 'building-scalable-applications',
    title: 'Building Scalable Applications with Next.js 14',
    excerpt:
      'Learn best practices for building performant and scalable web applications using the latest Next.js features including App Router, Server Components, and more.',
    category: 'development',
    date: '2024-01-15',
    readTime: 8,
    image: null,
    content: [
      'Next.js 14 brings revolutionary changes to how we build web applications. With the stable App Router, Server Components, and improved developer experience, creating scalable applications has never been easier.',
      '## The Power of Server Components',
      'React Server Components allow you to render components on the server, reducing the amount of JavaScript sent to the client. This results in faster initial page loads and better SEO.',
      'With Next.js 14, Server Components are the default, meaning you get these benefits out of the box. You only need to add the "use client" directive when you need client-side interactivity.',
      '## Optimizing Data Fetching',
      'One of the biggest improvements in Next.js 14 is the way data fetching works. You can now fetch data directly in your components using async/await, and Next.js will automatically deduplicate requests and cache results.',
      '## Streaming and Suspense',
      'Next.js 14 fully embraces React 18 features like Streaming and Suspense. This means you can progressively render parts of your page as data becomes available, improving perceived performance.',
      '## Best Practices for Scaling',
      '1. Use Server Components by default\n2. Implement proper caching strategies\n3. Optimize images with next/image\n4. Use route groups for organization\n5. Implement proper error boundaries',
      '## Conclusion',
      'Next.js 14 provides all the tools you need to build scalable, performant web applications. By following best practices and leveraging the framework features, you can create exceptional user experiences.',
    ],
  },
  'modern-devops-practices': {
    slug: 'modern-devops-practices',
    title: 'Modern DevOps Practices for 2024',
    excerpt:
      'Explore the latest trends in DevOps, including GitOps, platform engineering, and infrastructure as code.',
    category: 'devops',
    date: '2024-01-10',
    readTime: 6,
    image: null,
    content: [
      'DevOps has evolved significantly over the past few years. In 2024, we are seeing new practices and tools that are changing how teams build, deploy, and operate software.',
      '## GitOps: The New Standard',
      'GitOps uses Git as the single source of truth for declarative infrastructure and applications. With GitOps, any change to the system is made through pull requests, providing a complete audit trail and easy rollbacks.',
      '## Platform Engineering',
      'Platform engineering is about building internal developer platforms (IDPs) that provide self-service capabilities for development teams. This reduces cognitive load and allows developers to focus on building features.',
      '## Infrastructure as Code (IaC)',
      'Tools like Terraform, Pulumi, and AWS CDK have matured significantly. In 2024, we are seeing more organizations adopt IaC not just for cloud resources but for entire application stacks.',
      '## Observability 2.0',
      'Modern observability goes beyond metrics, logs, and traces. We now have tools that provide automatic instrumentation, AI-powered anomaly detection, and unified observability platforms.',
      '## Security Shift-Left',
      'Security is no longer an afterthought. DevSecOps practices integrate security checks throughout the development pipeline, from code scanning to runtime protection.',
    ],
  },
  'design-systems-guide': {
    slug: 'design-systems-guide',
    title: 'The Complete Guide to Design Systems',
    excerpt:
      'How to create and maintain a design system that scales with your organization and improves developer productivity.',
    category: 'design',
    date: '2024-01-05',
    readTime: 10,
    image: null,
    content: [
      'A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications.',
      '## Why Design Systems Matter',
      'Design systems provide consistency, improve collaboration between designers and developers, and significantly speed up the development process.',
      '## Core Components of a Design System',
      'A comprehensive design system includes:\n- Design tokens (colors, typography, spacing)\n- Component library\n- Documentation\n- Guidelines and patterns',
      '## Building Your First Design System',
      'Start small. Begin with the most commonly used components and gradually expand. Focus on quality over quantity.',
      '## Maintaining and Evolving',
      'A design system is never "done." Plan for regular updates, gather feedback from users, and iterate based on real-world usage.',
      '## Tools and Technologies',
      'Popular tools for building design systems include Figma for design, Storybook for component documentation, and various CSS-in-JS solutions for implementation.',
    ],
  },
  'ai-in-software-development': {
    slug: 'ai-in-software-development',
    title: 'How AI is Transforming Software Development',
    excerpt:
      'From code completion to automated testing, discover how artificial intelligence is revolutionizing the way we build software.',
    category: 'ai',
    date: '2024-01-03',
    readTime: 7,
    image: null,
    content: [
      'Artificial intelligence is fundamentally changing how we write, test, and deploy software. From intelligent code completion to automated bug detection, AI tools are becoming indispensable for modern developers.',
      '## AI-Powered Code Completion',
      'Tools like GitHub Copilot and similar AI assistants can understand context and generate entire functions, tests, and even documentation. These tools are trained on billions of lines of code and can significantly speed up development.',
      '## Automated Code Review',
      'AI can analyze pull requests for potential bugs, security vulnerabilities, and code style issues. This helps catch problems early and frees up senior developers for more complex reviews.',
      '## Intelligent Testing',
      'AI is revolutionizing testing by automatically generating test cases, identifying edge cases, and predicting where bugs are most likely to occur in the codebase.',
      '## Natural Language to Code',
      'The ability to describe what you want in natural language and have AI generate the corresponding code is becoming increasingly sophisticated. This lowers the barrier to entry for programming.',
      '## The Future of AI in Development',
      'We are only at the beginning of the AI revolution in software development. Expect to see more sophisticated tools that can understand entire codebases and assist with architectural decisions.',
    ],
  },
  'react-server-components': {
    slug: 'react-server-components',
    title: 'Understanding React Server Components',
    excerpt:
      'A deep dive into React Server Components, how they work, and when to use them in your applications.',
    category: 'development',
    date: '2023-12-28',
    readTime: 12,
    image: null,
    content: [
      'React Server Components (RSC) represent a fundamental shift in how we think about React applications. They allow components to run exclusively on the server, with zero JavaScript sent to the client.',
      '## What Are Server Components?',
      'Server Components are React components that render only on the server. Unlike traditional components, they never run in the browser, which means they can directly access server-side resources like databases and file systems.',
      '## Server vs Client Components',
      'The key distinction is simple: Server Components run on the server and send HTML to the client. Client Components are the traditional React components that run in the browser and handle interactivity.',
      '## Benefits of Server Components',
      '1. Zero bundle size for server-rendered content\n2. Direct access to backend resources\n3. Automatic code splitting\n4. Improved initial load performance\n5. Better SEO out of the box',
      '## When to Use Each Type',
      'Use Server Components for: data fetching, accessing backend resources, keeping sensitive data on server.\nUse Client Components for: interactivity, browser APIs, state and effects.',
      '## Patterns and Best Practices',
      'Keep your component tree primarily server components, and lift client components to the edges where interactivity is needed. This maximizes the benefits of RSC.',
    ],
  },
  'ux-principles-for-developers': {
    slug: 'ux-principles-for-developers',
    title: 'Essential UX Principles Every Developer Should Know',
    excerpt:
      'Improve your applications by understanding fundamental user experience principles and applying them to your code.',
    category: 'design',
    date: '2023-12-20',
    readTime: 9,
    image: null,
    content: [
      'Understanding UX principles is crucial for developers who want to build applications that users love. Even without a dedicated designer, applying these principles can dramatically improve your work.',
      '## The Psychology of User Experience',
      'Good UX is rooted in understanding how humans think and behave. Cognitive load, mental models, and user expectations all play a role in how people interact with your application.',
      '## Key UX Principles',
      '1. Consistency - Keep similar actions and elements consistent throughout your app\n2. Feedback - Always let users know what is happening\n3. Affordance - Make clickable things look clickable\n4. Hierarchy - Guide users with visual hierarchy\n5. Accessibility - Design for everyone',
      '## Performance is UX',
      'A slow application is a bad user experience. Optimize load times, reduce unnecessary animations, and provide skeleton screens during data fetching.',
      '## Error Handling Done Right',
      'Errors will happen. The key is handling them gracefully with clear messages, recovery options, and never losing user data.',
      '## Testing with Real Users',
      'The best way to improve UX is to watch real users interact with your application. Tools like session recording and user testing can reveal issues you never noticed.',
    ],
  },
  'kubernetes-best-practices': {
    slug: 'kubernetes-best-practices',
    title: 'Kubernetes Best Practices for Production',
    excerpt:
      'Learn how to run Kubernetes in production with confidence using proven patterns and practices.',
    category: 'devops',
    date: '2023-12-15',
    readTime: 11,
    image: null,
    content: [
      'Kubernetes has become the de facto standard for container orchestration, but running it in production requires careful planning and adherence to best practices.',
      '## Resource Management',
      'Always set resource requests and limits for your containers. This helps the scheduler make better decisions and prevents resource contention between pods.',
      '## Health Checks',
      'Implement both liveness and readiness probes. Liveness probes tell Kubernetes when to restart a container. Readiness probes tell when a container is ready to accept traffic.',
      '## Security Best Practices',
      '1. Use non-root users in containers\n2. Implement network policies\n3. Use RBAC for access control\n4. Scan images for vulnerabilities\n5. Keep secrets encrypted',
      '## High Availability',
      'Deploy multiple replicas of your applications, use pod disruption budgets, and spread pods across nodes and availability zones.',
      '## Observability',
      'Implement comprehensive logging, metrics, and tracing. Use tools like Prometheus, Grafana, and Jaeger to gain visibility into your cluster.',
      '## Continuous Deployment',
      'Use GitOps tools like ArgoCD or Flux to manage deployments. This provides a complete audit trail and makes rollbacks trivial.',
    ],
  },
  'building-saas-products': {
    slug: 'building-saas-products',
    title: 'From Idea to Launch: Building SaaS Products',
    excerpt:
      'A comprehensive guide to building and launching successful SaaS products, from validation to growth.',
    category: 'business',
    date: '2023-12-10',
    readTime: 15,
    image: null,
    content: [
      'Building a successful SaaS product requires more than just technical skills. This guide covers the entire journey from idea validation to launch and growth.',
      '## Validating Your Idea',
      'Before writing any code, validate that people actually want what you are building. Talk to potential customers, run landing page tests, and gather evidence of demand.',
      '## Choosing Your Tech Stack',
      'Select technologies that allow you to move fast without accumulating too much technical debt. Consider your teams expertise, community support, and long-term scalability.',
      '## MVP Development',
      'Build the minimum viable product that solves the core problem. Resist the urge to add features. Launch quickly and iterate based on real user feedback.',
      '## Pricing Strategy',
      'Pricing is one of the hardest parts of SaaS. Start simple, offer annual discounts, and do not be afraid to experiment. Value-based pricing often outperforms cost-plus.',
      '## Launch Strategy',
      'A successful launch is about building momentum. Use beta testers for early feedback, leverage Product Hunt and similar platforms, and have your marketing ready before launch.',
      '## Measuring Success',
      'Track the right metrics: MRR, churn rate, LTV, CAC, and NPS. These numbers tell you if your business is healthy and where to focus your efforts.',
    ],
  },
  'typescript-advanced-patterns': {
    slug: 'typescript-advanced-patterns',
    title: 'Advanced TypeScript Patterns for Large Applications',
    excerpt:
      'Master advanced TypeScript patterns that will help you build more maintainable and type-safe applications.',
    category: 'tutorials',
    date: '2023-12-05',
    readTime: 14,
    image: null,
    content: [
      'TypeScript is more than just adding types to JavaScript. Its type system is incredibly powerful and enables patterns that make large applications more maintainable.',
      '## Generic Types and Constraints',
      'Generics allow you to write reusable code while maintaining type safety. Use constraints to ensure generics meet certain requirements.',
      '## Conditional Types',
      'Conditional types let you create types that depend on other types. This is powerful for building flexible APIs that adapt to different inputs.',
      '## Template Literal Types',
      'TypeScript 4.1 introduced template literal types, which allow you to create types from string patterns. This is useful for APIs that follow naming conventions.',
      '## Mapped Types',
      'Mapped types let you transform existing types into new ones. Use them to create readonly versions, optional versions, or completely transformed types.',
      '## Type Guards and Narrowing',
      'Write custom type guards to help TypeScript understand your code better. This reduces the need for type assertions and makes code safer.',
      '## Utility Types',
      'Master built-in utility types like Partial, Required, Pick, Omit, and Record. These are building blocks for more complex type transformations.',
      '## Best Practices',
      '1. Prefer interfaces for object shapes\n2. Use type for unions and complex types\n3. Avoid any - use unknown instead\n4. Enable strict mode\n5. Document complex types with JSDoc',
    ],
  },
};

export const categories = ['development', 'design', 'devops', 'ai', 'business', 'tutorials'];

export function getBlogPost(slug: string): BlogPostData | null {
  return blogPostsContent[slug] || null;
}

export function getRelatedPosts(currentSlug: string, category: string): RelatedPostData[] {
  return blogPosts
    .filter((p) => p.slug !== currentSlug)
    .sort((a, b) => {
      if (a.category === category && b.category !== category) return -1;
      if (b.category === category && a.category !== category) return 1;
      return 0;
    })
    .slice(0, 3)
    .map((p) => ({
      slug: p.slug,
      title: p.title,
      category: p.category,
      date: p.date,
      readTime: p.readTime,
    }));
}

export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}

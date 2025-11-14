import { PortableText as BasePortableText } from '@portabletext/react';
import { urlFor } from '@/lib/sanity';

// Custom components for rendering Portable Text
const components = {
  block: {
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-bold mt-12 mb-6 pb-3 border-b border-border">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-bold mt-8 mb-4 text-primary">
        {children}
      </h3>
    ),
    normal: ({ children }: any) => (
      <p className="text-foreground/90 leading-relaxed mb-6">
        {children}
      </p>
    ),
    blockquote: ({ children }: any) => (
      <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-lg">
        {children}
      </div>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em className="text-foreground/80">{children}</em>
    ),
    link: ({ children, value }: any) => (
      <a
        href={value.href}
        className="text-primary no-underline hover:underline"
        target={value.blank ? '_blank' : undefined}
        rel={value.blank ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="my-6 text-foreground/90 space-y-2">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="my-6 text-foreground/90 space-y-2 list-decimal">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="leading-relaxed ml-6">{children}</li>
    ),
    number: ({ children }: any) => (
      <li className="leading-relaxed ml-6">{children}</li>
    ),
  },
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="my-8">
          <img
            src={urlFor(value).width(800).url()}
            alt={value.alt || ' '}
            className="rounded-lg w-full"
          />
          {value.alt && (
            <p className="text-sm text-muted-foreground text-center mt-2">
              {value.alt}
            </p>
          )}
        </div>
      );
    },
  },
};

interface PortableTextProps {
  value: any[];
}

export default function PortableText({ value }: PortableTextProps) {
  return <BasePortableText value={value} components={components} />;
}

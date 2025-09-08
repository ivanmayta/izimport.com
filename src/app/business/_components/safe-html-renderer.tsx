// components/SafeHTMLRenderer.tsx
interface SafeHTMLRendererProps {
    html: string;
    className?: string;
  }
  
  export function SafeHTMLRenderer({ html, className = '' }: SafeHTMLRendererProps) {
    return (
      <div 
        className={`prose prose-gray max-w-none ${className}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Example App Private",
  description: "Next js example app",
};

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>{children}</>  
                
      
    
  );
}

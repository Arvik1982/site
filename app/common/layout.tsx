import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Example App Common",
  description: "Next js example app",
};

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
        {children}
      </>  
                
      
    
  );
}

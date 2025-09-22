type Props = {
  Children: React.ReactNode;
};

const MarketingLayount = ({ children }: Props) => {
    return(
        <div className="min-h-screen flex flex-col">
            <header/>
            <main className="flex-1 flex flex-col items-center justify-center">
                {children}
            </main>
            <footer/>
        </div>
    ); 
};

export default MarketingLayount;
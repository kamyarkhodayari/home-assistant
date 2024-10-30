interface LayoutProps {
    children: React.ReactNode
}

const MainLayout = ({ children }: LayoutProps) => {
    return (
        <div className="p-5">
            <div className="mb-5">
                <h1 className="text-2xl font-bold">Hey Kamyar!</h1>
                <p>Welcome home!</p>
            </div>
            
            <div className="flex gap-4">
                {children}
            </div>
        </div>
    )
}

export default MainLayout
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
            
            <div className="grid grid-cols-4 gap-4">
                {children}
            </div>
        </div>
    )
}

export default MainLayout
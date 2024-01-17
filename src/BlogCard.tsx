import React from "react";

interface BlogCardProps {
    title: string;
    description: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({ title, description}) => {
    return (
        <div className="blog-card">
            <div className="main">
                <div className="title">{title}</div>
                <div className="description">{description}</div>
            </div>
        </div>
    )
}
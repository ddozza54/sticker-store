import { Link } from 'gatsby';
import React from 'react';

interface ILayoutProps {
    children: any,
    title: string
}

export default function Layout({ children, title }: ILayoutProps) {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        {/* Link 는 리액트 라우터에서 온 게 아니라, Gatsby 자체에서 온 것 */}
                        <Link to="/">Go Home</Link>
                    </li>
                    <li>
                        <Link to="/about-us">Aboun Us</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h1>{title}</h1>
                {children}</main>
        </div>
    );
}


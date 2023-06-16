import React from 'react';
import Layout from '../components/Layout';

export default function blog() {
    return (
        <Layout title="Blog">
            <p>The most recent news from my shop.</p>
        </Layout>

    );
}

export function Head(){
    return <title>Blog</title>
}


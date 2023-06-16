import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

//gatsby 는 이름은 신경쓰지 않는다.
export default function AboutUs() {
    return (
        <Layout title="About us">
            <p>We are the happiest sticker store.</p>
        </Layout>
    );
}

export const Head = () => <Seo title="About us" />;

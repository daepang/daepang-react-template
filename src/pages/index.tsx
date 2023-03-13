import React from 'react';
import Link from 'next/link';

const Index = () => {
  return (
    <>
      <section style={{ padding: '50px' }}>
        <h1 style={{ textAlign: 'center', fontSize: '28px' }}>Daepang React Tempalate</h1>

        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <Link href={'/'}>
            <a style={{ fontSize: '20px' }}>👉 프로젝트 살펴보기</a>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;

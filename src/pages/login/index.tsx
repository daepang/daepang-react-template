import React from 'react';

import PageLayout from 'src/common/components/templates/PageLayout';

import Login from 'src/login/components/templates/Login';

const Index = () => {
  return (
    <>
      <PageLayout>
        <Login />
      </PageLayout>
    </>
  );
};

export default Index;

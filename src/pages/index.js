import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import ParkSign from '../components/ParkSign/ParkSign.jsx'

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.tagline}`}
      description="The neighborhood operating system for Driving Park, Ohio">
      <main>
				<div className='sign-wrapper'>
					<ParkSign />
				</div>
      </main>
    </Layout>
  );
}

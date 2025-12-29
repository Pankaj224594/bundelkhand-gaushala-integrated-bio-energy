
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import TemplatePage from './pages/TemplatePage';
import { pagesData } from './data/pagesData';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gaushala" element={<TemplatePage data={pagesData['gaushala']} />} />
          <Route path="/nandi-rath" element={<TemplatePage data={pagesData['nandi-rath']} />} />
          <Route path="/biogas" element={<TemplatePage data={pagesData['biogas']} />} />
          <Route path="/by-products" element={<TemplatePage data={pagesData['by-products']} />} />
          <Route path="/dairy" element={<TemplatePage data={pagesData['dairy']} />} />
          <Route path="/waste" element={<TemplatePage data={pagesData['waste']} />} />
          <Route path="/renewables" element={<TemplatePage data={pagesData['renewables']} />} />
          <Route path="/future" element={<TemplatePage data={pagesData['future']} />} />
          <Route path="/model" element={<TemplatePage data={pagesData['model']} />} />
          <Route path="/validation" element={<TemplatePage data={pagesData['validation']} />} />
          <Route path="/media" element={<TemplatePage data={pagesData['media']} />} />
          <Route path="/contact" element={<TemplatePage data={pagesData['contact']} />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;


import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Leaf, Download, FileArchive, Loader2 } from 'lucide-react';
import { NAVIGATION, SITE_NAME, ORG_NAME } from '../constants';
import { pagesData } from '../data/pagesData';
import JSZip from 'jszip';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isZipping, setIsZipping] = useState(false);
  const location = useLocation();

  const handleQuickDownload = () => {
    const summary = `PROJECT SUMMARY: ${SITE_NAME}\n\nOrganization: ${ORG_NAME}\nFocus: Integrated circular renewable energy model utilizing Gaushalas.\n\nKey Modules:\n- Nandi Rath: Bull Treadmill Energy\n- Biogas & Bio-CNG Digesters\n- Organic Bio-Fertilizers\n- Waste-to-Wealth (Pyrolysis)\n\nVisit: https://bundelkhandbiopower.in/ (Mock)`;
    const blob = new Blob([summary], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Bundelkhand_BioPower_Summary.txt';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const handleZipDownload = async () => {
    setIsZipping(true);
    try {
      const zip = new JSZip();
      
      // Add README
      zip.file("README.md", `# ${SITE_NAME}\n\nThis archive contains all technical reports and whitepapers from the Bundelkhand Bio Power integrated pilot project research portal.\n\nGenerated on: ${new Date().toLocaleDateString()}`);

      // Gather all downloadData from all pages
      Object.values(pagesData).forEach(page => {
        const folder = zip.folder(page.title.replace(/[^a-z0-9]/gi, '_'));
        page.sections.forEach(section => {
          if (section.downloadData) {
            folder?.file(section.downloadData.filename, section.downloadData.content);
          }
        });
      });

      const content = await zip.generateAsync({ type: "blob" });
      const url = window.URL.createObjectURL(content);
      const a = document.createElement('a');
      a.href = url;
      a.download = "BBP_Project_Archive.zip";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("ZIP generation failed", error);
    } finally {
      setIsZipping(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Navigation */}
      <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <Leaf className="h-8 w-8 text-green-700" />
                <div className="hidden md:block">
                  <h1 className="text-sm font-bold text-slate-800 leading-tight uppercase tracking-wider">{SITE_NAME}</h1>
                  <p className="text-[10px] text-slate-500 font-medium">Bundelkhand Bio Power Pvt Ltd</p>
                </div>
              </Link>
            </div>
            
            <div className="hidden lg:flex items-center space-x-1">
              {NAVIGATION.slice(0, 7).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 text-xs font-semibold rounded-md transition-colors ${
                    location.pathname === item.path ? 'bg-green-50 text-green-800' : 'text-slate-600 hover:text-green-700'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="relative group mr-4">
                <button className="px-3 py-2 text-xs font-semibold text-slate-600 hover:text-green-700 flex items-center">
                  More <ChevronRight className="h-3 w-3 ml-1 transform group-hover:rotate-90 transition-transform" />
                </button>
                <div className="absolute right-0 w-48 bg-white border shadow-lg rounded-md hidden group-hover:block z-50">
                   {NAVIGATION.slice(7).map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-3 text-xs font-semibold text-slate-600 hover:bg-green-50 hover:text-green-800"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button 
                  onClick={handleQuickDownload}
                  className="flex items-center px-4 py-2 bg-slate-100 text-slate-800 text-[10px] font-bold uppercase tracking-widest rounded hover:bg-slate-200 transition-colors border"
                >
                  <Download className="h-3 w-3 mr-2" />
                  Brochure
                </button>
                <button 
                  onClick={handleZipDownload}
                  disabled={isZipping}
                  className="flex items-center px-4 py-2 bg-green-700 text-white text-[10px] font-bold uppercase tracking-widest rounded hover:bg-green-800 transition-colors shadow-sm disabled:opacity-50"
                >
                  {isZipping ? <Loader2 className="h-3 w-3 mr-2 animate-spin" /> : <FileArchive className="h-3 w-3 mr-2" />}
                  Full Kit (ZIP)
                </button>
              </div>
            </div>

            <div className="flex lg:hidden items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t p-4 flex flex-col space-y-2">
            {NAVIGATION.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  location.pathname === item.path ? 'bg-green-50 text-green-800' : 'text-slate-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-2 mt-4">
              <button 
                  onClick={handleQuickDownload}
                  className="flex items-center justify-center px-4 py-3 bg-slate-100 border text-slate-800 text-xs font-bold uppercase tracking-widest rounded hover:bg-slate-200 transition-colors"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Brochure
              </button>
              <button 
                  onClick={handleZipDownload}
                  disabled={isZipping}
                  className="flex items-center justify-center px-4 py-3 bg-green-700 text-white text-xs font-bold uppercase tracking-widest rounded hover:bg-green-800 transition-colors"
                >
                  {isZipping ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <FileArchive className="h-4 w-4 mr-2" />}
                  Archive
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 text-white mb-4">
                <Leaf className="h-6 w-6 text-green-500" />
                <span className="font-bold text-sm tracking-widest uppercase">{ORG_NAME}</span>
              </div>
              <p className="text-xs leading-relaxed">
                A non-commercial pilot project site dedicated to validating integrated circular renewable energy models in rural livestock contexts.
              </p>
            </div>
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Pilot Modules</h4>
              <ul className="text-xs space-y-2">
                <li>Nandi Rath Energy (Treadmill)</li>
                <li>Biogas & Bio-CNG Digesters</li>
                <li>Plastic Pyrolysis Module</li>
                <li>Organic Bio-Fertilizers</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Legal & Research</h4>
              <ul className="text-xs space-y-2">
                <li>Academic Collaboration</li>
                <li>Policy Review Submissions</li>
                <li>Zero-Waste Certification</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest font-semibold">
            <p>&copy; {new Date().getFullYear()} {ORG_NAME}. All Rights Reserved.</p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
               <button onClick={handleZipDownload} className="text-green-500 hover:text-green-400 flex items-center">
                 <FileArchive className="h-3 w-3 mr-1" />
                 Download Full Research kit
               </button>
               <p>Research-Oriented Pilot Project - Phase I</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

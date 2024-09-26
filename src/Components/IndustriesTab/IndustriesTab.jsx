import React, { useState } from 'react'
import './IndustriesTab.css'
import TabCard from './TabCard/TabCard';

const IndustriesTab = () => {
    const [activeTab, setActiveTab] = useState('finance');
    return (
        <div className='container py-5'>
            <ul className="nav" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button
                        className={`nav-link fs-5 ${activeTab === 'finance' ? 'active' : ''}`}
                        id="finance-tab"
                        data-bs-toggle="tab"
                        role="tab"
                        aria-controls="finance"
                        aria-selected={activeTab === 'finance'}
                        onClick={() => setActiveTab('finance')}>Finance</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className={`nav-link fs-5 ${activeTab === 'education' ? 'active' : ''}`}
                        id="education-tab"
                        data-bs-toggle="tab"
                        role="tab"
                        aria-controls="education"
                        aria-selected={activeTab === 'education'}
                        onClick={() => setActiveTab('education')}
                    >  Education
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className={`nav-link fs-5 ${activeTab === 'medical' ? 'active' : ''}`}
                        id="medical-tab"
                        data-bs-toggle="tab"
                        role="tab"
                        aria-controls="medical"
                        aria-selected={activeTab === 'medical'}
                        onClick={() => setActiveTab('medical')}
                    >  Medical
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className={`nav-link fs-5 ${activeTab === 'energy' ? 'active' : ''}`}
                        id="energy-tab"
                        data-bs-toggle="tab"
                        role="tab"
                        aria-controls="energy"
                        aria-selected={activeTab === 'energy'}
                        onClick={() => setActiveTab('energy')}
                    >  Energy
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className={`nav-link fs-5 ${activeTab === 'transportation' ? 'active' : ''}`}
                        id="transportation-tab"
                        data-bs-toggle="tab"
                        role="tab"
                        aria-controls="transportation"
                        aria-selected={activeTab === 'transportation'}
                        onClick={() => setActiveTab('transportation')}
                    >  Transportation
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className={`nav-link fs-5 ${activeTab === 'fmcg' ? 'active' : ''}`}
                        id="fmcg-tab"
                        data-bs-toggle="tab"
                        role="tab"
                        aria-controls="fmcg"
                        aria-selected={activeTab === 'fmcg'}
                        onClick={() => setActiveTab('fmcg')}
                    >  FMCG
                    </button>
                </li>
            </ul>

            <div className="tab-content pt-3" id="myTabContent">
                <div
                    className={`tab-pane fade ${activeTab === 'finance' ? 'show active' : ''}`}
                    id="finance"
                    role="tabpanel"
                    aria-labelledby="finance-tab"
                >
                    <div className='d-flex'>
                        <TabCard
                            heading="Finance"
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo odio quis arcu bibendum ullamcorper. Suspendisse sed arcu nec ante convallis semper. Quisque facilisis et arcu sit amet semper." />
                        <TabCard
                            heading="Finance"
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo odio quis arcu bibendum ullamcorper. Suspendisse sed arcu nec ante convallis semper. Quisque facilisis et arcu sit amet semper." />
                        <TabCard
                            heading="Finance"
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo odio quis arcu bibendum ullamcorper. Suspendisse sed arcu nec ante convallis semper. Quisque facilisis et arcu sit amet semper." />

                    </div>
                </div>
                <div
                    className={`tab-pane fade ${activeTab === 'education' ? 'show active' : ''}`}
                    id="education"
                    role="tabpanel"
                    aria-labelledby="education-tab" >
                    <div className='d-flex'>
                        <TabCard
                            heading="Education"
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo odio quis arcu bibendum ullamcorper. Suspendisse sed arcu nec ante convallis semper. Quisque facilisis et arcu sit amet semper." />
                        <TabCard
                            heading="Education"
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo odio quis arcu bibendum ullamcorper. Suspendisse sed arcu nec ante convallis semper. Quisque facilisis et arcu sit amet semper." />


                    </div>
                </div>
                <div
                    className={`tab-pane fade ${activeTab === 'medical' ? 'show active' : ''}`}
                    id="medical"
                    role="tabpanel"
                    aria-labelledby="medical-tab" >
                    <div className='d-flex'>
                        <TabCard
                            heading="Medical"
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo odio quis arcu bibendum ullamcorper. Suspendisse sed arcu nec ante convallis semper. Quisque facilisis et arcu sit amet semper." />
                        <TabCard
                            heading="Medical"
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo odio quis arcu bibendum ullamcorper. Suspendisse sed arcu nec ante convallis semper. Quisque facilisis et arcu sit amet semper." />
                        <TabCard
                            heading="Medical"
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo odio quis arcu bibendum ullamcorper. Suspendisse sed arcu nec ante convallis semper. Quisque facilisis et arcu sit amet semper." />
                    </div>
                </div>
                <div
                    className={`tab-pane fade ${activeTab === 'energy' ? 'show active' : ''}`}
                    id="energy"
                    role="tabpanel"
                    aria-labelledby="energy-tab" >
                    <div className="d-flex">
                        <TabCard
                            heading="Energy"
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo odio quis arcu bibendum ullamcorper. Suspendisse sed arcu nec ante convallis semper. Quisque facilisis et arcu sit amet semper." />
                    </div>
                </div>
                <div
                    className={`tab-pane fade ${activeTab === 'transportation' ? 'show active' : ''}`}
                    id="transportation"
                    role="tabpanel"
                    aria-labelledby="transportation-tab" >
                    <div className='d-flex'>
                        <TabCard
                            heading="Transportation"
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo odio quis arcu bibendum ullamcorper. Suspendisse sed arcu nec ante convallis semper. Quisque facilisis et arcu sit amet semper." />
                        <TabCard
                            heading="Transportation"
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo odio quis arcu bibendum ullamcorper. Suspendisse sed arcu nec ante convallis semper. Quisque facilisis et arcu sit amet semper." />
                        <TabCard
                            heading="Transportation"
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo odio quis arcu bibendum ullamcorper. Suspendisse sed arcu nec ante convallis semper. Quisque facilisis et arcu sit amet semper." />

                    </div>
                </div>
                <div
                    className={`tab-pane fade ${activeTab === 'fmcg' ? 'show active' : ''}`}
                    id="fmcg"
                    role="tabpanel"
                    aria-labelledby="fmcg-tab" >
                    <div className='d-flex'>
                        <TabCard
                            heading="FMCG"
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo odio quis arcu bibendum ullamcorper. Suspendisse sed arcu nec ante convallis semper. Quisque facilisis et arcu sit amet semper." />
                        <TabCard
                            heading="FMCG"
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo odio quis arcu bibendum ullamcorper. Suspendisse sed arcu nec ante convallis semper. Quisque facilisis et arcu sit amet semper." />

                    </div>
                </div>

            </div>
        </div>
    )
}

export default IndustriesTab

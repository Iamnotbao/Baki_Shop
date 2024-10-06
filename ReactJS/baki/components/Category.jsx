import React from "react"


const Category = () => {
    return (
        <section className="category-section section-spacing">
            <div className="w-layout-blockcontainer container w-container">
                <div className="section-title">
                    <h2>Find your perfect bag</h2>
                </div>
                <div className="w-dyn-list">
                    <div className="grid-category w-dyn-items">
                        <div role="listitem" className="w-dyn-item">
                            <a href="/category/handbag" className="category-item w-inline-block">
                                <div className="category-image-wrap">
                                    <img
                                        alt=""
                                        loading="eager"
                                        src="https://assets-global.website-files.com/6525219c7b775fea747a58c5/6527b790491bf4f4109e6ad3_category-2.jpg"
                                        className="category-image"
                                    />
                                </div>
                                <div className="category-hover-content">
                                    <div className="category-title">Handbag</div>
                                </div>
                            </a>
                        </div>
                        <div role="listitem" className="w-dyn-item">
                            <a href="/category/shoulder-bags" className="category-item w-inline-block">
                                <div className="category-image-wrap">
                                    <img
                                        alt=""
                                        loading="eager"
                                        src="https://assets-global.website-files.com/6525219c7b775fea747a58c5/6527b790491bf4f4109e6ad3_category-2.jpg"
                                        className="category-image"
                                    />
                                </div>
                                <div className="category-hover-content">
                                    <div className="category-title">Shoulder bags</div>
                                </div>
                            </a>
                        </div>
                        <div role="listitem" className="w-dyn-item">
                            <a href="/category/wallet-clutch" className="category-item w-inline-block">
                                <div className="category-image-wrap">
                                    <img
                                        alt=""
                                        loading="eager"
                                        src="https://assets-global.website-files.com/6525219c7b775fea747a58c5/6527b799100b7faa4f485859_category-3.jpg"
                                        className="category-image"
                                    />
                                </div>
                                <div className="category-hover-content">
                                    <div className="category-title">Wallet &amp; Clutch</div>
                                </div>
                            </a>
                        </div>
                        <div role="listitem" className="w-dyn-item">
                            <a href="/category/backpacks" className="category-item w-inline-block">
                                <div className="category-image-wrap">
                                    <img
                                        alt=""
                                        loading="eager"
                                        src="https://assets-global.website-files.com/6525219c7b775fea747a58c5/6565a9ff30a333ce298e990e_category-6.jpg"
                                        className="category-image"
                                    />
                                </div>
                                <div className="category-hover-content">
                                    <div className="category-title">Backpacks</div>
                                </div>
                            </a>
                        </div>
                        <div role="listitem" className="w-dyn-item">
                            <a href="/category/mini-bags" className="category-item w-inline-block">
                                <div className="category-image-wrap">
                                    <img
                                        alt=""
                                        loading="eager"
                                        src="https://assets-global.website-files.com/6525219c7b775fea747a58c5/6527b7ab963464209d093a4c_category-5.jpg"
                                        className="category-image"
                                    />
                                </div>
                                <div className="category-hover-content">
                                    <div className="category-title">Mini bags</div>
                                </div>
                            </a>
                        </div>
                        <div role="listitem" className="w-dyn-item">
                            <a href="/category/business-bags" className="category-item w-inline-block">
                                <div className="category-image-wrap">
                                    <img
                                        alt=""
                                        loading="eager"
                                        src="https://assets-global.website-files.com/6525219c7b775fea747a58c5/6527b7a3cd5ef92c30287ecf_category-4.jpg"
                                        className="category-image"
                                    />
                                </div>
                                <div className="category-hover-content">
                                    <div className="category-title">Business bags</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Category;

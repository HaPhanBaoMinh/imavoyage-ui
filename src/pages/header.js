import React, { useEffect, useState } from 'react'

function Header() {
    const [isTop, setIsTop] = useState(true);

    useEffect(() => {
        document.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 0) {
                setIsTop(false);
            } else {
                setIsTop(true);
            }
        });
    }, []);

    return (
        <>
            <nav class="navbar  top-0 position-fixed w-100 navbar-expand-lg navbar-light bg-light p-0 bg-gray ">
                <div class="container-fluid bg-white">
                    <div class="collapse navbar-collapse px-2" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto w-50 mw-50 mb-2 gap-3 align-item-center mb-lg-0">
                            <li class="nav-item m-0 text-uppercase fw-normal h6">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>

                            <li class="nav-item m-0 text-uppercase fw-normal h6">
                                <a class="nav-link active" aria-current="page" href="#">About</a>
                            </li>

                            <li class="nav-item m-0 text-uppercase fw-normal h6">
                                <a class="nav-link active" aria-current="page" href="#">Tour</a>
                            </li>

                            <li class="nav-item m-0 text-uppercase fw-normal h6">
                                <a class="nav-link active" aria-current="page" href="#">Blog</a>
                            </li>
                        </ul>

                        <div class="bg-primary rounded-circle mt-5 position-absolute start-50"
                            style={isTop ? { width: "140px", height: "140px", transform: "translate(-50%, -50%)", top: "40px" } : { top: "20px", width: "100px", height: "100px", transform: "translate(-50 %, -50 %)" }}>
                        </div>

                        <ul class="navbar-nav me-auto h-100 w-50 mw-50 justify-content-end mb-2 gap-3 align-item-center mb-lg-0">
                            <li class="nav-item m-0 text-uppercase align-items-center d-flex justify-content-center fw-normal h6">
                                <a class="nav-link active fw-bold" aria-current="page" href="#">0921 782 832</a>
                            </li>
                            <li class="nav-item m-0 text-uppercase fw-normal h6">
                                <div className='text-uppercase px-3 py-3 h6 m-0 hover fw-bold text-white bg-primary h-100'>
                                    Have your trip created
                                </div>
                            </li>
                        </ul>


                    </div>
                </div>
            </nav>
            <div className="w-100 bg-dark" style={{ height: '1000px', marginTop: '52px' }}  >
                s
            </div>
        </>
    )
}

export default Header
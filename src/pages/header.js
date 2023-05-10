import React, { useEffect, useState } from 'react'
import Link from "next/link"
function Header() {
    const [isTop, setIsTop] = useState(true);
    const [isShowMenu, setIsShowMenu] = useState(false);

    const onChangeShowMenu = () => {
        setIsShowMenu(!isShowMenu)
    }

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
            <nav class="navbar z-2 top-0 position-fixed w-100 navbar-expand-lg navbar-light bg-light p-0 bg-gray">
                <div class="container-fluid bg-white">
                    <button onClick={onChangeShowMenu} class="navbar-toggler my-2 rounded-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class={`navbar-collapse ${isShowMenu ? 'navbar-collapse-open' : 'navbar-collapse-close'} px-2 header-mobile-navbar`} id="navbarTogglerDemo01">
                        <ul class="navbar-nav me-auto w-50 mw-50 mb-2 gap-3 align-item-center mb-lg-0">
                            <li class="nav-item m-0 text-uppercase fw-normal h6">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>

                            <li class="nav-item m-0 text-uppercase fw-normal h6">
                                <a class="nav-link active" aria-current="page" href="#">About</a>
                            </li>

                            <li class="nav-item m-0 text-uppercase fw-normal h6">
                                <Link class="nav-link active" aria-current="page" href="/nation">Tour</Link>
                            </li>

                            <li class="nav-item m-0 text-uppercase fw-normal h6">
                                <a class="nav-link active" aria-current="page" href="#">Blog</a>
                            </li>
                        </ul>

                        <div class="bg-primary rounded-circle mt-5 position-absolute start-50 header-mobile-hidden"
                            style={isTop ? { width: "130px", height: "130px", transform: "translate(-50%, -50%)", top: "30px" } : { top: "10px", width: "100px", height: "100px", transform: "translate(-50 %, -50 %)" }}>
                        </div>

                        <ul class="navbar-nav header-mobile-hidden me-auto h-100 w-50 mw-50 justify-content-end mb-2 gap-3 align-item-center mb-lg-0">
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
        </>
    )
}

export default Header
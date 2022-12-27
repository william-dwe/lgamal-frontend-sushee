import React, { useEffect } from 'react'
import "./index.scss"
import MenuCard from '../../components/MenuCard'
import { useMenusQuery } from '../../features/menuSlice/menuApiSlice'
import Loader from '../../components/Loader'

const Menu = (): JSX.Element => {
    const hero1 = "https://res.cloudinary.com/dgr6o89ym/image/upload/c_scale,h_1080,w_1920/v1672109205/sources/wallpaperflare.com_wallpaper_wtqler.jpg"
    const hero2 = "https://res.cloudinary.com/dgr6o89ym/image/upload/c_scale,h_1080,w_1920/v1672122757/sources/wallpaperflare.com_wallpaper_1_nekcbo.jpg"
    const hero3 = "https://res.cloudinary.com/dgr6o89ym/image/upload/c_scale,h_1080,w_1920/v1672122755/sources/wallpaperflare.com_wallpaper_2_vhqq27.jpg"

    const { data, error, isLoading } = useMenusQuery()

    const content = (
        <>
            <section className="hero">
                <div id="menuHeroCarousel" className="carousel slide" data-bs-ride="carousel" data-interval="3000" data-bs-touch="false">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src={hero1} className="d-block w-100" alt="slide 1"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Fine sushi dining in one-click away</h5>
                            <p>Experience your favorite japanese meals at its finest.</p>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img src={hero2} className="d-block w-100" alt="slide 2"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img src={hero3} className="d-block w-100" alt="slide 3"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="promotion">
                <h2>Special for you!</h2>

            </section>


            <section className="menu">
                <h2>Check our specialties!</h2>
                <div className="row">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="menu-flters">
                        <li data-filter="*" className="filter-active">Show All</li>
                        <li data-filter=".filter-starters">Starters</li>
                        <li data-filter=".filter-salads">Salads</li>
                        <li data-filter=".filter-specialty">Specialty</li>
                        </ul>
                    </div>
                </div>
                <div className="container">
                    <div className="row menu-container">
                        {
                            !isLoading && data 
                            ?  data.data.menus.map((val, i) => {
                                return (
                                    <div key={i} className="col-lg-3 mt-1 mb-1 menu-item filter-starters">
                                        <MenuCard
                                            menuName={val.MenuName}
                                            avgRating={val.AvgRating}
                                            numberOfFavorites={val.NumberOfFavorites}
                                            price={val.Price}
                                            menuPhoto={val.MenuPhoto}
                                            categoryId={val.CategoryId}
                                        />
                                    </div>
                                )
                            })
                            :<Loader/>
                        }
                    </div>
                </div>
                

            </section>
        </>
    )

    return content
}

export default Menu
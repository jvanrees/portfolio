import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { EffectCards, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../img/android_app/Screenshot_20181103-203245_Rocky Mountain Arsenal History.jpg';
import img2 from '../img/android_app/Screenshot_20181103-203534_Rocky Mountain Arsenal History.jpg';
import img3 from '../img/android_app/Screenshot_20181103-203554_Rocky Mountain Arsenal History.jpg';
import img4 from '../img/android_app/Screenshot_20181103-204001_Rocky Mountain Arsenal History.jpg';
import img5 from '../img/android_app/Screenshot_20181103-204113_Rocky Mountain Arsenal History.jpg';
import styles from '../styles/ProjectPage.module.css';

const images = [img1, img2, img3, img4, img5];
const images2x = [...images, ...images];

export function RmaAndroidMedia() {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className={styles.imageCarouselContainer}>
            <div className={styles.mainCardsContainer}>
                <Swiper
                    effect={'cards'}
                    autoHeight={false}
                    grabCursor={true}
                    navigation={true}
                    // bring autoplay back
                    modules={[EffectCards, Thumbs, Navigation]}
                    centeredSlides={true}
                    slidesPerView={1}
                    className={styles.rmaSwiper}
                    thumbs={{ swiper: thumbsSwiper }}
                    loop={true}
                    // autoplay={{
                    //     delay: 5000,
                    //     disableOnInteraction: false,
                    // }}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    // style={{
                    //     width: '100%',
                    //     height: '50%',
                    // }}
                    cardsEffect={{
                        perSlideOffset: 32,
                        rotate: false,
                        slideShadows: false,
                    }}
                >
                    {images2x.map((img, index) => (
                        <SwiperSlide key={index}>
                            <div className={styles.slideContainer}>
                                <img
                                    src={img}
                                    alt={`Rocky Mountain Arsenal: History Android app Screen ${index + 1}`}
                                    className={styles.slideImage}
                                    style={{
                                        border: activeIndex === index ? '1px solid' : '1px solid',
                                        borderColor: activeIndex === index ? 'hsla(0, 0%, 25%, 0.56)' : 'transparent',
                                        opacity: index === activeIndex ? 1 : 0.9,
                                        filter: index === activeIndex ? 'none' : 'blur(1px)',
                                    }}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Thumbnail Navigation */}
            <div className={styles.thumbnailNavContainer}>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={8}
                    slidesPerView={4}
                    modules={[Thumbs]}
                    watchSlidesProgress={true}
                    style={{
                        padding: '5px 0',
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 3,
                            spaceBetween: 5
                        },
                        480: {
                            slidesPerView: 4,
                            spaceBetween: 6
                        },
                        640: {
                            slidesPerView: 4,
                            spaceBetween: 8
                        }
                    }}
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className={styles.thumbnailImage}
                                style={{
                                    border: activeIndex === index ? '3px solid #007bff' : '3px solid transparent',
                                    boxShadow: activeIndex === index
                                        ? '0 4px 12px rgba(0,123,255,0.3)'
                                        : '0 2px 8px rgba(0,0,0,0.1)',
                                    opacity: activeIndex === index ? 1 : 0.7,
                                    transform: activeIndex === index ? 'scale(1.05)' : 'scale(1)'
                                }}
                            >
                                <img
                                    src={img}
                                    alt={`Thumbnail ${index + 1}`}
                                    className={styles.thumbnailImg}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </div>
    );
}

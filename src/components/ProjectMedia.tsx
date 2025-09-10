import { Paper } from '@mantine/core';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { EffectCoverflow, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../img/android_app/Screenshot_20181103-203245_Rocky Mountain Arsenal History.jpg';
import img2 from '../img/android_app/Screenshot_20181103-203534_Rocky Mountain Arsenal History.jpg';
import img3 from '../img/android_app/Screenshot_20181103-203554_Rocky Mountain Arsenal History.jpg';
import img4 from '../img/android_app/Screenshot_20181103-204001_Rocky Mountain Arsenal History.jpg';
import img5 from '../img/android_app/Screenshot_20181103-204113_Rocky Mountain Arsenal History.jpg';
import styles from '../styles/ProjectPage.module.css';

const images = [img1, img2, img3, img4, img5];
const images2x = [...images, ...images];

export function ProjectMedia() {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [mainSwiper, setMainSwiper] = useState<any>(null);

    const handleSlideClick = (clickedIndex: number) => {
        if (!mainSwiper) {
            console.log('Swiper not ready');
            return;
        }

        console.log('Clicked slide:', clickedIndex, 'Active:', activeIndex);

        if (clickedIndex === activeIndex) {
            console.log('Clicked active slide, ignoring');
            return;
        }

        mainSwiper.slideToLoop(clickedIndex);
    };

    return (
        <div className={styles.imageCarouselContainer}>
            <div className={styles.mainCardsContainer}>
                <Swiper
                    effect={'coverflow'}
                    slideToClickedSlide={true}
                    // loopAdditionalSlides={images2x.length}
                    // watchSlidesProgress={true}
                    autoHeight={false}
                    grabCursor={true}
                    // bring autoplay back
                    modules={[EffectCoverflow, Thumbs]}
                    centeredSlides={true}
                    slidesPerView={3}
                    className={styles.rmaSwiper}
                    thumbs={{ swiper: thumbsSwiper }}
                    loop={true}
                    onSwiper={setMainSwiper}
                    onClick={(swiper) => console.log(swiper.clickedSlide)}
                    spaceBetween={-75}

                    // autoplay={{
                    //     delay: 5000,
                    //     disableOnInteraction: false,
                    // }}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    // style={{
                    //     width: '100%',
                    //     height: '50%',
                    // }}
                    coverflowEffect={{
                        slideShadows: false,
                        rotate: 0,
                        stretch: 0,
                        depth: 0,
                        scale: 0.95,
                    }}
                >
                    {images2x.map((img, index) => {
                        const mappedIndex = index % images.length;
                        // console.log(`Rendering slide ${index}, mapped to image ${mappedIndex}`);
                        return (
                            <SwiperSlide key={index}>
                                <div className={styles.slideContainer} onClick={() => handleSlideClick(index)}>
                                    <img
                                        src={img}
                                        alt={`Rocky Mountain Arsenal: History Android app Screen ${index + 1}`}
                                        className={styles.slideImage}
                                        style={{
                                            border: (activeIndex % images2x.length) === index ? '1px solid' : '1px solid',
                                            borderColor: (activeIndex % images2x.length) === index ? 'hsla(0, 0%, 25%, 0.56)' : 'transparent',
                                            opacity: (activeIndex % images2x.length) === index ? 1 : 0.9,
                                            filter: (activeIndex % images2x.length) === index ? 'none' : 'blur(1px)',
                                            cursor: (activeIndex % images2x.length) !== index ? 'pointer' : 'default',
                                        }}
                                    />
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>

            {/* Thumbnail Navigation */}
            <Paper className={styles.thumbnailNavContainer}>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={4}
                    slidesPerView={5}
                    modules={[Thumbs]}
                    watchSlidesProgress={true}
                    breakpoints={{
                        320: {
                            slidesPerView: 3,
                            spaceBetween: 5
                        },
                        480: {
                            slidesPerView: 4,
                            spaceBetween: 6
                        },
                        900: {
                            slidesPerView: 5,
                            spaceBetween: 6
                        }
                    }}
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className={styles.thumbnailImage}
                                style={{
                                    border: (activeIndex % images.length) === index ? '2px solid hsl(193, 95%, 68%)' : '2px solid transparent',
                                    boxShadow: (activeIndex % images.length) === index
                                        ? '0 2px 6px  hsla(193, 45%, 27%, 0.3)'
                                        : '0 1px 4px hsla(193, 45%, 27%, 0.1)',
                                    opacity: (activeIndex % images.length) === index ? 1 : 0.7,
                                    transform: (activeIndex % images.length) === index ? 'scale(1.05)' : 'scale(1)'
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
            </Paper>
        </div>
    );
}

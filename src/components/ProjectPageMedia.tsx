import { Paper } from '@mantine/core';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { EffectCoverflow, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../styles/ProjectPage.module.css';


function ensureImageArrayLengthForLoop(images: string[]) {
    // Ensure the returned array has at least 12 items by repeating
    // the source images as many times as necessary.
    if (images.length >= 12) return images;

    const repeatCount = Math.ceil(12 / images.length);
    const out: string[] = [];
    for (let i = 0; i < repeatCount; i++) {
        out.push(...images);
    }
    return out;
}

export interface ProjectMediaProps {
    images?: string[];
    title?: string;
}

export function ProjectMedia({ images, title }: ProjectMediaProps) {
    const imagesExtended = ensureImageArrayLengthForLoop(images);
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className={styles.imageCarouselContainer}>
            <div className={styles.mainCardsContainer}>
                <Swiper
                    effect={'coverflow'}
                    slideToClickedSlide={true}
                    autoHeight={false}
                    grabCursor={true}
                    autoplay={{
                        delay: 5000,
                    }}
                    modules={[EffectCoverflow, Thumbs]}
                    centeredSlides={true}
                    slidesPerView={3}
                    className={styles.rmaSwiper}
                    thumbs={{ swiper: thumbsSwiper }}
                    loop={true}
                    onClick={(swiper) => console.log(swiper.clickedSlide)}
                    spaceBetween={-75}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    coverflowEffect={{
                        slideShadows: false,
                        rotate: 0,
                        stretch: 0,
                        depth: 0,
                        scale: 0.95,
                    }}
                >
                    {imagesExtended.map((img, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className={styles.slideContainer} >
                                    <img
                                        src={img}
                                        alt={`${title} Screen ${index + 1}`}
                                        className={styles.slideImage}
                                        style={{
                                            border: (activeIndex % imagesExtended.length) === index ? '1px solid' : '1px solid',
                                            borderColor: (activeIndex % imagesExtended.length) === index ? 'hsla(0, 0%, 25%, 0.56)' : 'transparent',
                                            opacity: (activeIndex % imagesExtended.length) === index ? 1 : 0.9,
                                            filter: (activeIndex % imagesExtended.length) === index ? 'none' : 'blur(1px)',
                                            cursor: (activeIndex % imagesExtended.length) !== index ? 'pointer' : 'default',
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

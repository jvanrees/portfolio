import { useState } from "react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import { EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import projectPageStyles from "../styles/ProjectPage.module.css";

function ensureImageArrayLengthForLoop(images: any[]) {
	// Ensure the returned array has at least 12 items by repeating the source images as many times as necessary.
	if (images.length >= 12) return images;

	const repeatCount = Math.ceil(12 / images.length);
	const out: string[] = [];
	for (let i = 0; i < repeatCount; i++) {
		out.push(...images);
	}
	return out;
}

export interface ProjectMediaProps {
	images: any[];
	title: string;
}

export function ProjectMedia({ images, title }: ProjectMediaProps) {
	const imagesExtended = ensureImageArrayLengthForLoop(images);
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<div className={projectPageStyles.imageCarouselContainer}>
			<div className={projectPageStyles.mainCardsContainer}>
				<Swiper
					effect={"coverflow"}
					slideToClickedSlide={true}
					autoHeight={false}
					grabCursor={true}
					autoplay={{
						delay: 3000,
					}}
					modules={[EffectCoverflow]}
					centeredSlides={true}
					slidesPerView={3}
					className={projectPageStyles.rmaSwiper}
					loop={true}
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
								<div className={projectPageStyles.slideContainer}>
									<img
										src={img}
										alt={`${title} Screen ${index + 1}`}
										className={projectPageStyles.slideImage}
										style={{
											border:
												activeIndex % imagesExtended.length === index
													? "1px solid"
													: "1px solid",
											borderColor:
												activeIndex % imagesExtended.length === index
													? "hsla(0, 0%, 25%, 0.56)"
													: "transparent",
											opacity:
												activeIndex % imagesExtended.length === index ? 1 : 0.9,
											filter:
												activeIndex % imagesExtended.length === index
													? "none"
													: "blur(1px)",
											cursor:
												activeIndex % imagesExtended.length !== index
													? "pointer"
													: "default",
										}}
									/>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</div>
	);
}

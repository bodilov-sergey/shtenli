import Swiper, { Navigation, Thumbs } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/navigation'

Swiper.use([Navigation, Thumbs])

const swiperInit = () => {

	const swipers = document.querySelectorAll('.my-card__slider');

	swipers.forEach((e, index) => {
		const swiperCatalogThumbArr = e.querySelector('.swiper-catalog-thumbs'),
			swiperCatalogArr = e.querySelector('.swiper-catalog-main'),
			nextArr = e.querySelector(".swiper-button-next"),
			prevArr = e.querySelector(".swiper-button-prev");


		nextArr.classList.add("swiper-button-next" + index);
		prevArr.classList.add("swiper-button-prev" + index);

		const swiper = new Swiper(swiperCatalogThumbArr, {
			spaceBetween: 10,
			slidesPerView: 2,
			freeMode: true,
			watchSlidesProgress: true,
			breakpoints: {
				376: {
					slidesPerView: 3
				},
			},
		});

		new Swiper(swiperCatalogArr, {
			spaceBetween: 10,
			navigation: {
				nextEl: ".swiper-button-next" + index,
				prevEl: ".swiper-button-prev" + index,
			},
			thumbs: {
				swiper: swiper,
			},
		});

	});
}
export default swiperInit
import { PREFIX } from '../../../shared/api';
import { StudentCourseDescription } from '../model/course.model';

export const API = {
	my: `${PREFIX}/course/my/`,
};

export const cards = [
    {
        id: 1,
        shortTitle: 'ByNeBy',
        image: 'https://babyimages.ru/kartinki/mashina-kartinka-07.jpg',
        title: 'Проект на svelte',
        alias: 'не знаю зачем это',
        length: 5,
        avgRating: 5,
        price: 1000,
        courseOnDirection: [{ direction: {'name': 'svelte'} },{ direction: {'name': 'python'} }],
        tariffs: {
            // id: 4,
            name: 'тариф',
            price: 1000,
            type: 'basic',
            lengthInMonth: 3,
            // courseId: 1,
            createdAt: '20.06.2014',
            videoUuid: 'adsfasdgfafgdsfgsdfg',
        }
        // progress: Progress;
    },
    {
        id: 2,
        shortTitle: 'TeamIT',
        image: 'https://babyimages.ru/kartinki/mashina-kartinka-07.jpg',
        title: 'Проект на aiogram',
        alias: 'не знаю зачем это',
        length: 5,
        avgRating: 5,
        price: 1000,
        courseOnDirection: [{ direction: {name: 'aiogram' }}],
        tariffs: {
            // id: 5,
            name: 'тариф',
            price: 1000,
            type: 'basic',
            lengthInMonth: 3,
            // courseId: 2,
            createdAt: '20.06.2014',
            videoUuid: 'adsfasdgfafgdsfgsdfg',
        }
        // progress: Progress;
    },,
    {
        id: 3,
        shortTitle: 'Важно',
        image: 'https://babyimages.ru/kartinki/mashina-kartinka-07.jpg',
        title: 'Проект на aiogram',
        alias: 'не знаю зачем это',
        length: 5,
        avgRating: 5,
        price: 1000,
        courseOnDirection: [{ direction: {name: 'aiogram' }}],
        tariffs: {
            // id: 6,
            name: 'тариф',
            price: 1000,
            type: 'basic',
            lengthInMonth: 3,
            // courseId: 3,
            createdAt: '20.06.2014',
            videoUuid: 'adsfasdgfafgdsfgsdfg',
        }
        // progress: Progress;
    },
]
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   options: [
//     {
//       id: 1,
//       position: 0,
//       isOpenSelect: true,
//       сategory: null,
//       values: ["Uy", "Bog'"],
//     },
//     {
//       id: 2,
//       position: 1,
//       isOpenSelect: false,
//       сategory: "Uy",
//       values: [
//         "Mebel",
//         "Interyer jihozlari",
//         "Xona o'simliklari",
//         "Kanstovarlar-chiqim materiallari",
//         "Oziq-ovqat / Ichimliklar",
//         "Idish-tovoq, oshxona anjomlari",
//         "Uy uchun boshqa mahsulotlar",
//       ],
//     },
//     {
//       id: 3,
//       position: 2,
//       isOpenSelect: false,
//       сategory: "Mebel",
//       values: [
//         "Mehmonxona uchun mebel",
//         "Yotoqxona uchun mebel",
//         "Dahliz uchun mebel",
//         "Oshxona mebeli",
//         "Vannaxona mebeli",
//         "Ofis mebeli",
//         "Pristavkalarni ta'mirlash",
//         "Bog‘ mebeli",
//         "Maxsus mebel",
//       ],
//     },
//     {
//       id: 4,
//       position: 2,
//       isOpenSelect: false,
//       сategory: "Interyer jihozlari",
//       values: [
//         "Chiroqlar",
//         "Tekistil",
//         "Derazalar dekori",
//         "Interyer uchun boshqa narsalar",
//       ],
//     },
//     {
//       id: 5,
//       position: 2,
//       isOpenSelect: false,
//       category: "Xona o'simliklari",
//       values: [],
//     },
//     {
//       id: 6,
//       position: 2,
//       isOpenSelect: false,
//       category: "Kanstovarlar-chiqim materiallari",
//       values: [],
//     },
//     {
//       id: 7,
//       position: 1,
//       isOpenSelect: false,
//       сategory: "Bog'",
//       values: [
//         "Bog‘-tomorqa",
//         "Qurilish / tamirlash uchun tovarlar",
//         "Jihozlar",
//         "Bog‘ anjomlari",
//         "Xo‘jalik jihozlari, maishiy kimyo",
//       ],
//     },
//     {
//       id: 8,
//       position: 2,
//       isOpenSelect: false,
//       сategory: "Qurilish / tamirlash uchun tovarlar",
//       values: [
//         "Santexnika",
//         "Ventilyatsiya",
//         "Isitish",
//         "Elektrika",
//         "Arra materiallari",
//         "Pardozlash materiallari",
//         "Deraza va oynalar",
//         "Lak-bo'yoq materiallari",
//         "Metalloprokat-armatura",
//         "Biriktirish elementlari",
//         "G'isht, betoni, penobloklar",
//         "Boshqa qurilish materiallari",
//       ],
//     },
//     {
//       id: 9,
//       position: 2,
//       isOpenSelect: false,
//       сategory: "Jihozlar",
//       values: [
//         "Qo'l jihozlari",
//         "Benzoinstrument",
//         "Elektr jihozlar",
//         "Pnevmoinstrument",
//         "Boshqa jihozlar",
//       ],
//     },
//   ],
//   chips: [],
// };

// const selectValue = createSlice({
//   name: "selectValue",
//   initialState,
//   reducers: {
//     openSelect(state, action) {
//       const { title } = action.payload;
//       const activeElement = state.options.find(
//         (element) => element.сategory === title
//       );
//       state.chips.length = 0;
//       state.options = state.options.map((element) => {
//         if (activeElement?.position <= element.position) {
//           element.isOpenSelect = false;
//         }
//         if (element.сategory === title) {
//           element.isOpenSelect = true;
//         }
//         if (element.isOpenSelect) {
//           state.chips.push(element.сategory);
//         }
//         return element;
//       });
//     },
//   },
// });

// export const { openSelect } = selectValue.actions;
// export default selectValue.reducer;
export const dom = [
  {
    id: 1,
    name: "Uy",
  },
  {
    id: 2,
    name: "Bog‘",
  },
];
export function state() {
  return dom;
}
// mebel
export const mebel = [
  {
    id: 3,
    name: "Mebel",
  },
  {
    id: 4,
    name: "Interyer jihozlari",
  },
  {
    id: 5,
    name: "Xona o'simliklari",
  },
  {
    id: 6,
    name: "Kanstovarlar-chiqim materiallari",
  },
  {
    id: 7,
    name: "Oziq-ovqat / Ichimliklar",
  },
  {
    id: 8,
    name: "Idish-tovoq, oshxona anjomlari",
  },
  {
    id: 9,
    name: "Uy uchun boshqa mahsulotlar",
  },
];
// mehmonxona
export const mehmonxona = [
  {
    id: 10,
    name: "Mehmonxona uchun mebel",
  },
  {
    id: 11,
    name: "Yotoqxona uchun mebel",
  },
  {
    id: 12,
    name: "Dahliz uchun mebel",
  },
  {
    id: 13,
    name: "Oshxona mebeli",
  },
  {
    id: 14,
    name: "Vannaxona mebeli",
  },
  {
    id: 15,
    name: "Ofis mebeli",
  },
  {
    id: 16,
    name: "Pristavkalarni ta'mirlash",
  },
  {
    id: 17,
    name: "Bog‘ mebeli",
  },
  {
    id: 18,
    name: "Maxsus mebel",
  },
];
//Interyer jihozlari
export const interyer = [
  {
    id: 19,
    name: "Chiroqlar",
  },
  {
    id: 20,
    name: "Tekistil",
  },
  {
    id: 21,
    name: "Derazalar dekori",
  },
  {
    id: 22,
    name: "Interyer uchun boshqa narsalar",
  },
];
// bog'
export const garden = [
  {
    id: 23,
    name: "Bog‘-tomorqa",
  },
  {
    id: 24,
    name: "Qurilish / tamirlash uchun tovarlar",
  },
  {
    id: 25,
    name: "Jihozlar",
  },
  {
    id: 26,
    name: "Bog‘ anjomlari",
  },
  {
    id: 27,
    name: "Xo‘jalik jihozlari, maishiy kimyo",
  },
];
// qurilish
export const qurilish = [
  {
    id: 28,
    name: "Santexnika",
  },
  {
    id: 29,
    name: "Ventilyatsiya",
  },
  {
    id: 30,
    name: "Isitish",
  },
  {
    id: 31,
    name: "Elektrika",
  },
  {
    id: 32,
    name: "Arra materiallari",
    active: false,
  },
  {
    id: 33,
    name: "Pardozlash materiallari",
  },
  {
    id: 34,
    name: "Deraza va oynalar",
  },
  {
    id: 35,
    name: "Lak-bo'yoq materiallari",
  },
  {
    id: 36,
    name: "Metalloprokat-armatura",
  },
  {
    id: 37,
    name: "Biriktirish elementlari",
  },
  {
    id: 38,
    name: "G'isht, betoni, penobloklar",
  },
  {
    id: 39,
    name: "Boshqa qurilish materiallari",
  },
  {
    id: 40,
    name: "Boshqa qurilish materiallari",
  },
];
// jihozlar
export const jihozlar = [
  {
    id: 41,
    name: "Qol jihozlari",
  },
  {
    id: 42,
    name: "Benzoinstrument",
  },
  {
    id: 43,
    name: "Elektr jihozlar",
  },
  {
    id: 44,
    name: "Pnevmoinstrument",
  },
  {
    id: 45,
    name: "Boshqa jihozlar",
  },
];

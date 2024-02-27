import {
  bigFormError,
  fixErrFitch,
  errorFitch,
  errorPrice,
  fixBigFormError,
  fixErrorPrice,
  fixUserError,
  peculiarityUseState,
  useStateUseEffect,
  userError
} from './data'

export const items = {
  fetch: [
    {
      id: 1,
      teg: 'error',
      title: 'Fitch',
      code: errorFitch,
      desc1: '1. Применялся код в Next.js-14 с TS',
      desc2:
        '2. TypeError: Cannot read properties of undefined (reading title)',
      desc3: '3. <h1>{product.title}</h1>'
    },
    {
      id: 2,
      teg: 'fix',
      title: 'Fitch',
      code: fixErrFitch,
      desc1:
        '1. В product.title и product.description после product ставим "?".',
      desc2:
        '2. const [product, setProduct] = useState() если мы предполагаем что product изначально пустой то использовать undefined не верно, использовать null',
      desc3: '3. Можем добавить State для ЗАГРУЗКИ [loading, setLoading]'
    }
  ],
  price: [
    {
      id: 1,
      teg: 'error',
      title: 'Price',
      code: errorPrice,
      desc1: '',
      desc2: '',
      desc3: ''
    },
    {
      id: 2,
      teg: 'fix',
      title: 'Price',
      code: fixErrorPrice,
      desc1: '',
      desc2: '',
      desc3: ''
    }
  ],
  user: [
    {
      id: 1,
      teg: 'error',
      title: 'User',
      code: userError,
      desc1: '',
      desc2: '',
      desc3: ''
    },
    {
      id: 2,
      teg: 'fix',
      title: 'User',
      code: fixUserError,
      desc1: '',
      desc2: '',
      desc3: ''
    }
  ],
  form: [
    {
      id: 1,
      teg: 'error',
      title: 'Form',
      code: bigFormError,
      desc1: '',
      desc2: '',
      desc3: ''
    },
    {
      id: 1,
      teg: 'error',
      title: 'Form',
      code: bigFormError,
      desc1: '',
      desc2: '',
      desc3: ''
    }
  ],
  render: [
    {
      id: 1,
      teg: 'no',
      title: 'Render',
      code: peculiarityUseState,
      desc1: '',
      desc2: '',
      desc3: ''
    }
  ],
  render2: [
    {
      id: 1,
      teg: 'no',
      title: 'Render2',
      code: useStateUseEffect,
      desc1: '',
      desc2: '',
      desc3: ''
    }
  ]
}
// export const itemsError = {
//   fetch: {
//     id: 1,
//     teg: 'error',
//     title: '',
//     code: errorFitch,
//     desc: '',
//     desc2: ''
//   },
//   price: {
//     id: 1,
//     teg: 'error',
//     title: '',
//     code: errorPrice,
//     desc: '',
//     desc2: ''
//   },
//   user: {
//     id: 1,
//     teg: 'error',
//     title: '',
//     code: userError,
//     desc: '',
//     desc2: ''
//   },
//   form: {
//     id: 1,
//     teg: 'error',
//     title: '',
//     code: bigFormError,
//     desc: '',
//     desc2: ''
//   },
//   render: {
//     id: 1,
//     teg: '',
//     title: '',
//     code: peculiarityUseState,
//     desc: '',
//     desc2: ''
//   },
//   render2: {
//     id: 1,
//     teg: '',
//     title: '',
//     code: useStateUseEffect,
//     desc: '',
//     desc2: ''
//   }
// }

// export const itemsErrorFix = {
//   fetch: {
//     id: 2,
//     teg: 'fix',
//     title: '',
//     code: fixErrFitch,
//     desc: '',
//     desc2: ''
//   },
//   prise: {
//     id: 2,
//     teg: 'fix',
//     title: '',
//     code: fixErrorPrice,
//     desc: '',
//     desc2: ''
//   },
//   user: {
//     id: 2,
//     teg: 'fix',
//     title: '',
//     code: fixUserError,
//     desc: '',
//     desc2: ''
//   },
//   form: {
//     id: 2,
//     teg: 'fix',
//     title: '',
//     code: fixBigFormError,
//     desc: '',
//     desc2: ''
//   }
// }

import {
  bigFormError,
  bugFixed,
  errorData,
  errorPrice,
  fixBigFormError,
  fixErrorPrice,
  fixUserError,
  peculiarityUseState,
  useStateUseEffect,
  userError
} from './data'

const itemsError = {
  fetch: {
    id: 1,
    teg: 'error',
    title: '',
    code: errorData,
    desc: '',
    desc2: ''
  },
  price: {
    id: 1,
    teg: 'error',
    title: '',
    code: errorPrice,
    desc: '',
    desc2: ''
  },
  user: {
    id: 1,
    teg: 'error',
    title: '',
    code: userError,
    desc: '',
    desc2: ''
  },
  form: {
    id: 1,
    teg: 'error',
    title: '',
    code: bigFormError,
    desc: '',
    desc2: ''
  },
  render: {
    id: 1,
    teg: '',
    title: '',
    code: peculiarityUseState,
    desc: '',
    desc2: ''
  },
  render2: {
    id: 1,
    teg: '',
    title: '',
    code: useStateUseEffect,
    desc: '',
    desc2: ''
  }
}

const itemsErrorFix = {
  fetch: {
    id: 2,
    teg: 'fix',
    title: '',
    code: bugFixed,
    desc: '',
    desc2: ''
  },
  prise: {
    id: 2,
    teg: 'fix',
    title: '',
    code: fixErrorPrice,
    desc: '',
    desc2: ''
  },
  user: {
    id: 2,
    teg: 'fix',
    title: '',
    code: fixUserError,
    desc: '',
    desc2: ''
  },
  form: {
    id: 2,
    teg: 'fix',
    title: '',
    code: fixBigFormError,
    desc: '',
    desc2: ''
  }
}

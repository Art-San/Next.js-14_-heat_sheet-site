// import axios from 'axios'

// const apiClient = axios.create({
//   baseURL: 'https://jsonplaceholder.typicode.com'
// })

// export const mainInstance = {
//   get<T>(url: string): Promise<{ data: T }> {
//     return apiClient.get(url).then((response) => ({
//       data: response.data
//     }))
//   }
// }

import axios, { AxiosRequestConfig } from 'axios'

const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

export const mainInstance = {
  get<T>(url: string, config?: AxiosRequestConfig): Promise<{ data: T }> {
    return apiClient.get(url, config).then((response) => ({
      data: response.data
    }))
  }
}

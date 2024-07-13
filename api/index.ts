// modules/api/index.ts

import axios from 'axios'
import { User } from '../types/user.types'

const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com' // Предполагаемый базовый URL сервера
})

export const mainInstance = {
  get<T>(url: string): Promise<{ data: T }> {
    return apiClient.get(url).then((response) => ({
      data: response.data
    }))
  }
}

import { ref } from 'vue'
import { get } from '@/utils/request'
export function product() {
  const allProduct = ref([])

  async function getAllProduct() {
    const resp = await get({
      url: '/product/all',
    })
    allProduct.value = resp.data
  }

  return {
    allProduct,
    getAllProduct,
  }
}

import { ref } from 'vue'
import { get } from '@/utils/request'
export function order() {
  const currentPlanName = ref('')

  async function getCurrentPlanName() {
    const resp = await get({
      url: '/order/current',
    })
    currentPlanName.value = resp.data.product
  }

  return {
    currentPlanName,
    getCurrentPlanName,
  }
}

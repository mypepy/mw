//当前这个模块：API统一管理
import mockRequests from './mockRequest';

export const reqType = () => mockRequests({ url: '/type', method: 'get' })

export const reqMaterials = () => mockRequests({ url: '/materials', method: 'get' })

export const reqAddMaterials = (data) => mockRequests({ url: '/addMaterials',data, method: 'post' })

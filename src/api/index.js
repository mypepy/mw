//当前这个模块：API统一管理
import mockRequests from './mockRequest';

export const reqMaterials = () => mockRequests({ url: '/materials', method: 'get' })

export const reqAddMaterials = (data) => mockRequests({ url: '/addMaterials', method: 'post',data })

export const reqEditMaterials = (data) => mockRequests({ url: '/editMaterials', method: 'post',data })

export const reqDelMaterials = (data) => mockRequests({ url: '/delMaterials', method: 'post',data })

//引入mockjs模块
import Mock from "mockjs";
//把json数据引进来
//webpack默认对外暴露的：图片，JSON数据格式
import materials from './materials.json';

//mock数据:第一个参数请求地址；第二个参数：请求数据
Mock.mock(RegExp('mock/materials'), 'get', (options) => {
    return {
      code: 200,
      success: true,
      message: '获取材料列表成功',
      data:materials,
   
    }
  })
//   添加
Mock.mock(RegExp('mock/addMaterials'), 'post', (options) => {
    const params = JSON.parse(options.body)
    materials.unshift(
      Mock.mock({
        mid: 1+'@increment',
        mName: params.mName,
        outSum: params.outSum,
        remarks: params.remarks,
        sum:params.sum,
        type:params.type,
        unit:params.unit
      })
    )
    return {
      code: 200,
      success: true,
      message: '材料添加成功'
    }
  })
  
//  修改
Mock.mock(RegExp('mock/editMaterials'), 'post', (options) => {
  const params = JSON.parse(options.body)
  for (let i = 0; i < materials.length; i++) {
    if (materials[i].mid === params.mid) {
      materials[i] = params
    }
  }
  return {
    code: 200,
    success: true,
    message: '材料修改成功'
  }
})

// 清空
Mock.mock(RegExp('mock/delMaterials'), 'post', (options) => {
  const params = JSON.parse(options.body)
  const deleteIndex = materials.findIndex((item) => {
    return item.mid === params.mid
  })
  materials.splice(deleteIndex, 1)
  return {
    code: 200,
    success: true,
    message: '材料清空成功'
  }
})


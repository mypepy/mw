//引入mockjs模块
import Mock from "mockjs";
//把json数据引进来
//webpack默认对外暴露的：图片，JSON数据格式
import materials from './materials.json';
import mType from './type.json';

//mock数据:第一个参数请求地址；第二个参数：请求数据
// Mock.mock("/mock/materials",{code:200,data:materials});
Mock.mock(RegExp('mock/materials'), 'get', (options) => {
    console.log(options)
    return {
      code: 200,
      success: true,
      message: '获取用户列表成功',
      data:materials,
   
    }
  })
//   添加
Mock.mock(RegExp('mock/addMaterials'), 'post', (options) => {
    const params = JSON.parse(options.body)
    console.log(options)
    materials.unshift(
      Mock.mock({
        mid: '@increment',
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
      message: '用户添加成功'
    }
  })
  
 
Mock.mock("/mock/type",{code:200,data:mType});


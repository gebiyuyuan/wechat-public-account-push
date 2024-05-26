/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx7ca957713c68b616',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'af5f78ab35b62f5810d578f2b07ae528',

  PROVINCE: '山东',
  CITY: '泰安',

  USERS: [
    {
      // 想要发送的人的名字
      name: '于鸢',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o4jNN6xUbbKOyjVsV4r5JXUWuD9U',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'VbnvT58qh4MlPJ7RQle-j4Zx9RLiC11ptT0OK515BKE',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '04-10',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '于鸢', year: '2003', date: '03-09',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '隔壁于鸢', year: '2003', date: '04-10',
        },
        {
          type: '节日', name: '六一儿童节', year: '2024', date: '06-01',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2024-09-08' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2024-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'PvU4L9cqS_ftZzgbVYq4cp-5-E8oK4-mQeVWwplLXvo',

  CALLBACK_USERS: [
    {
      name: '隔壁班的鸢会长',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o4jNN6xUbbKOyjVsV4r5JXUWuD9U',
    }
  ],

}

module.exports = USER_CONFIG

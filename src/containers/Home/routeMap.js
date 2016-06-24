/**
 * [routeMap description] 服务器返回的url与本地url映射
 */
export const routeMap = {
    merchantFindSalesOrder: 'order', // 订单查询
    merchantCarPackgeUrl: 'qcode', // 获取二维码
    merchantCouponList: 'verification', // 核销消费券
    merchantCouponUsage: 'couponUsage', //消费券使用情况
    carPackgeUrl: 'qcode', // 获取二维码
    findSalesOrder: 'order', // 订单查询
    registSalesRelation: 'registSales', // 注册二级业务员
    registMerchant: 'registMerchant', // 二级业务员信息
    childSalesmanRelations: 'childSalesman', // 注册二级商户
    merchantByEmployee: 'childMerchant' // 二级商户信息
}

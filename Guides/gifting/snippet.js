let wreq; webpackChunkdiscord_app.push([ [Symbol()], {}, (r) => wreq = r ])
const openCollectiblesPaymentModal = wreq(Object.keys(wreq.m).find(chunk=> wreq.m[chunk].toString().includes("\"payment-modal\""))).default

/** config **/
const skuId = "1158572275507937342" // the sku id of the product, default is Dark Omens
const isGift = true // true if you want it to be a gift, false if you want to buy it for yourself

openCollectiblesPaymentModal({
    skuId,
    isGift,
    analyticsLocations: "nowhere"
})

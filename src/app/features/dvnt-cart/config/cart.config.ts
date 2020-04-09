const cartTranslationOverwrites = {
  en: {
    cart: {
      cartDetails: {
        total: 'Total items: {{count}}',
        goToCheckout: 'Go to checkout',
        discount: 'Discount',
        grandTotal: 'Grand total',
        shippingAndHandling: 'Shipping & Handling (flat rate - fixed)',
        subtotal: 'Subtotal',
        tax: 'Tax',
        emptySlogan:
          'Looks like you haven’t added any items to the bag yet. Start shopping to fill it in.',
        startShopping: 'Start shopping',
        emptytitle: 'Your bag is empty',
      },
    },
  },
};

export const cartTranslationsConfig = {
  i18n: {
    resources: cartTranslationOverwrites,
  },
};

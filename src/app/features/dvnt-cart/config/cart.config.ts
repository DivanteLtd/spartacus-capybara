import { translationChunksConfig } from '@spartacus/assets';

const cartTranslationOverwrites = {
  en: {
    cart: {
      cartColumn: {
        discount: 'Discount',
        grandTotal: 'Grand total',
        shippingAndHandling: 'Shipping & Handling (flat rate - fixed)',
        subtotal: 'Subtotal',
        tax: 'Tax',
      },
      empty: {
        slogan:
          'Looks like you haven’t added any items to the bag yet. Start shopping to fill it in.',
        startShopping: 'Start shopping',
        title: 'Your bag is empty',
      },
      filled: {
        total: 'Total items: {{count}}',
        goToCheckout: 'Go to checkout',
      },
    },
  },
};

export const cartTranslationsConfig = {
  i18n: {
    resources: cartTranslationOverwrites,
    chunks: {
      common: translationChunksConfig.cart.push(
        'cartColumn',
        'empty',
        'filled'
      ),
    },
  },
};

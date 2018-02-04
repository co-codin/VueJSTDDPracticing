import { mount } from 'vue-test-utils';
import expect from 'expect';
import CouponCode from '../src/components/CouponCode.vue';

describe ('CouponCode', () => {

  it ('accepts a coupon code', () => {
    let wrapper = mount(CouponCode);

    expect(wrapper.contains('input.coupon-code')).toBe(true)
  });

  it ('validates a user-provided coupon code', () => {
    let wrapper = mount(CouponCode);

    let couponCode = wrapper.find('input.coupon-code');

    couponCode.element.value = '50OFF';
    couponCode.trigger('input');

    expect(wrapper.vm.valid).toBe(true)
    expect(wrapper.html()).toContain('Coupon Redeemed: 50% Off!');
  });
});

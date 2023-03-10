import { CouponModel} from "../Models/Model";

export class CustomersAppState {
    public coupons: CouponModel[] = [];
}

export enum ActionType {
    GOT_ALL_CUSTOMER_COUPONS = "GOT_ALL_CUSTOMER_COUPONS",
    PURCHASE_COUPON = "PURCHASE_COUPON",
    REMOVED_CUSTOMER_COUPONS = "REMOVED_CUSTOMER_COUPONS",
}

export interface CustomerAction {
    type: ActionType;
    payload: any;
}

export function gotAllCustomerPurchasedCouponsAction(
    coupons: CouponModel[]
): CustomerAction {
    return {
        type: ActionType.GOT_ALL_CUSTOMER_COUPONS,
        payload: coupons,
    };
}

export function PurchasedCouponAction(coupon: CouponModel): CustomerAction {
    return {
        type: ActionType.PURCHASE_COUPON,
        payload: coupon,
    };
}

export function removeCustomerCoupons(): CustomerAction {
    return {
        type: ActionType.REMOVED_CUSTOMER_COUPONS,
        payload: {},
    };
}

export function customerReducer(
    currentState: CustomersAppState = new CustomersAppState(),
    action: CustomerAction
): CustomersAppState {
    const newState = { ...currentState };
    switch (action.type) {
        case ActionType.GOT_ALL_CUSTOMER_COUPONS: {
            newState.coupons = action.payload;
            break;
        }
        case ActionType.PURCHASE_COUPON: {
            newState.coupons.push(action.payload);
            break;
        }
        case ActionType.REMOVED_CUSTOMER_COUPONS: {
            newState.coupons = [];
            break;
        }
    }
    return newState;
}

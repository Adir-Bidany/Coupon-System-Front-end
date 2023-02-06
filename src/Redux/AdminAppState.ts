import { CompanyModel, CustomerModel } from "../Models/Model";

export class AdminAppState {
    // Step 1 - create the app state object
    public companies: CompanyModel[] = [];
    public customers: CustomerModel[] = [];
}

// Step 2 - define all required actions
export enum ActionType {
    GOT_ALL_COMPANIES = "GOT_ALL_COMPANIES",
    GOT_SINGLE_COMPANY = "GOT_SINGLE_COMPANY",
    ADDED_COMPANY = "ADDED_COMPANY",
    UPDATED_COMPANY = "UPDATED_COMPANY",
    DELETED_COMPANY = "DELETED_COMPANY",
    REMOVED_COMPANY = "REMOVED_COMPANY",
}

// Step 3 - define what is action in terms of data
export interface CompanyAction {
    type: ActionType;
    payload: any;
}

// Step 4 - creator functions - gets payload regarding the action
export function gotAllTasksAction(companies: CompanyModel[]): CompanyAction {
    return {
        type: ActionType.GOT_ALL_COMPANIES,
        payload: companies,
    };
}

export function gotSingleCompanyAction(company: CompanyModel): CompanyAction {
    return {
        type: ActionType.GOT_SINGLE_COMPANY,
        payload: company,
    };
}

export function addedTaskAction(task: CompanyModel): CompanyAction {
    return {
        type: ActionType.ADDED_COMPANY,
        payload: task,
    };
}

export function updatedTaskACtion(task: CompanyModel): CompanyAction {
    return {
        type: ActionType.UPDATED_COMPANY,
        payload: task,
    };
}

export function deletedTaskAction(id: number): CompanyAction {
    return {
        type: ActionType.DELETED_COMPANY,
        payload: id,
    };
}

export function removeTasks(): CompanyAction {
    return {
        type: ActionType.REMOVED_COMPANY,
        payload: {},
    };
}

// Step 5 - Reducer function perform the required action
export function tasksReducer(
    currentState: AdminAppState = new AdminAppState(),
    action: CompanyAction
): AdminAppState {
    const newState = { ...currentState }; //Spread Operator // Copy
    switch (action.type) {
        case ActionType.GOT_ALL_COMPANIES: {
            newState.companies = action.payload;
            break;
        }
        case ActionType.ADDED_COMPANY: {
            newState.companies.push(action.payload);
            break;
        }
        case ActionType.UPDATED_COMPANY: {
            console.log(newState.companies);
            const idx = newState.companies.findIndex(
                (company) => company.id === action.payload.id
            );
            newState.companies[idx] = action.payload;
            console.log(newState.companies);
            break;
        }

        case ActionType.DELETED_COMPANY: {
            newState.companies = newState.companies.filter(
                (company) => company.id !== action.payload
            );
            break;
        }
        case ActionType.REMOVED_COMPANY: {
            newState.companies = [];
            break;
        }
    }
    return newState;
}
import {create} from 'zustand';

interface Transaction {
    date: string;
    amount: number;
    type: 'deposit' | 'withdraw';
}

interface AppState {
    isAuthenticated: boolean;
    balance: number;
    activePage: string;
    amount: number;
    phoneNumber: string;
    password: string;
    transactions: Transaction[];
    activeTab: 'deposit' | 'withdraw'
    login: () => void;
    logout: () => void;
    updateBalance: (amount: number) => void;
    setActivePage: (page: string) => void;
    setAmount: (amount: number) => void;
    setPhoneNumber: (number: string) => void;
    setPassword: (password: string) => void;
    addTransaction: (transaction: Transaction) => void;
    setActiveTab: (tab: 'deposit' | 'withdraw') => void;
}

export const useAppStore = create<AppState>((set) => ({
    isAuthenticated: false,
    balance: 0,
    activePage: 'home',
    amount: 0,
    phoneNumber: '',
    password: '',
    transactions: [],
    activeTab: 'deposit',

    login: () => set({isAuthenticated: true}),

    logout: () => set({
        isAuthenticated: false,
        balance: 0,
        phoneNumber: '',
        password: '',
        transactions: []
    }),

    updateBalance: (amount) => set((state) => ({balance: state.balance + amount})),

    setActivePage: (page: string) => set({activePage: page}),

    setAmount: (amount: number) => set({amount}),

    setPhoneNumber: (number: string) => set({phoneNumber: number}),

    setPassword: (password: string) => set({password}),

    addTransaction: (transaction) => set((state) => ({
        transactions: [...state.transactions, transaction]
    })),

    setActiveTab: (tab)=> set({ activeTab: tab}),
}));

export interface IProduct {
    id: number,
    name: string,
    description: string,
    price: number,
    stock: number,
    image: string,
    categoryId: number
}

export interface IProductListProps {
    products: IProduct[];
}

export interface IUser {
    name: string,
    email: string,
    password: string,
    address: string,
    phone: string,
    id: number,
}

export interface IOrderResponse {
    id: number,
    status: string,
    date: string,
    user: IUser,
    products: IProduct[]
}

export interface IOrderProps {
    order: IOrderResponse
}

export interface IRegister {
    name: string,
    email: string,
    password: string,
    address: string,
    phone: string
}

export interface ILogin {
    email: string,
    password: string
}

export interface IUserResponse {
    login: boolean,
    user: Partial<IUser> | null,
    token: string
}

export interface IUserContextType {
    user: Partial<IUserResponse> | null;
    setUser: React.Dispatch<React.SetStateAction<Partial<IUserResponse> | null>>;
    isLogged: boolean;
    setIsLogged: (isLogged: boolean) => void;
    login: (credentials: ILogin) => Promise<boolean>;
    register: (user: Omit<IUser, "id">) => Promise<boolean>;
    getOrders: () => void;
    orders: IOrderResponse[] | [];
    logOut: () => void;
}

export interface ICartContextType {
    cartItems: IProduct[];
    addToCart: (product: number) => void;
    removeFromCart: (product: number) => void;
    total: number;
    proceedToCheckout: () => void;
}
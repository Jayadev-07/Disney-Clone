import { create } from "zustand";

const Store = create<IuserData>()((set) => ({
  IsLogin: false,
  UserData: {} as IUserDataType,
  setUserData: (data: IUserDataType) => set({ UserData: data }),
  setIsLogin: (data: boolean) => set({ IsLogin: data }),
}));
interface IuserData {
  IsLogin: boolean;
  UserData: IUserDataType;
  setUserData: (data: IUserDataType) => void;
  setIsLogin: (data: boolean) => void;
}

export interface IUserDataType {
  phoneNo: string;
  Otp: string;
  expTime: string;
  id?: string;
  username?: string;
}

export default Store;

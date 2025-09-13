import { defineStore } from "pinia";
import Cookies from "js-cookie";
import type { Nullable } from "@/types/common";

interface UserInfo {
  id: string;
  login: string;
  firstName: string;
  lastName: string;
  middleName: string;
  jshshir: string;
  avatar: string;
  card: string;
  workerId: string;
  birthDay: string;
  sex: string;
  phone: string[];
}

export const useUserStore = defineStore("user", {
  state: () => ({
    loaded: false,
    userInfo: null as Nullable<UserInfo>,
    isAuthenticated: Cookies.get("isAuthenticated") === "true",
    loading: false,
    darkMode: false,
    userRole: "",
    userRoles: [],
    // gate flag (used by middleware / layout)
    forbidden: false,
  }),
  actions: {
    setForbidden(value: boolean) {
      this.forbidden = value;
    },
    setUserInfo(userInfo: UserInfo | null) {
      this.userInfo = userInfo;
    },
    setUserLogin(value: boolean) {
      this.isAuthenticated = value;
      Cookies.set("isAuthenticated", value.toString());
    },
    setUserRole(role: string) {
      this.userRole = role;
      Cookies.set("userRole", role);
    },
    setUserRoles(roles: any) {
      this.userRoles = roles;
    },
    clearUser() {
      this.userInfo = null;

      Cookies.remove("access_token");
      Cookies.remove("refresh_token");
      Cookies.remove("isAuthenticated");
    },
    setLoading(value: boolean) {
      this.loading = value;
    },
  },
});

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axiosInstance from "../app/axiosInstance";
import { setDataToLocalStorage } from "../utils/helperFunction";
import { STRING } from "../constant/string";

interface User {
	id: string;
	username: string;
	email: string;
	firstName: string;
	lastName: string;
	gender: string;
	token: string;
}

interface AuthState {
	loading: boolean;
	error: string | null;
	user: Array<User>;
}

/* The `initialState` constant is defining the initial state of the `AuthState` slice of the Redux
store. It has three properties: */

const initialState: AuthState = {
	loading: false,
	error: null,
	user: [],
};

/* The `export const loginUser = createAsyncThunk()` function is creating an asynchronous thunk action
creator called `loginUser`. Thunk actions are a way to handle asynchronous logic in Redux. */

export const loginUser = createAsyncThunk(
	"userLogin",
	async (loginCredential: { username: string; password: string }) => {
		const { data } = await axiosInstance.post("/login", loginCredential);
		setDataToLocalStorage(STRING.USERDETAILS, data);
		return data;
	},
);

const authSlice = createSlice({
	name: STRING.USER,
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(loginUser.pending, (state) => {
				state.loading = true;
				state.user = [];
				state.error = null;
			})
			.addCase(loginUser.fulfilled, (state, action: PayloadAction<Array<User>>) => {
				toast.success("Login Successfully");
				state.loading = false;
				state.user = action.payload;
				state.error = null;
			})
			.addCase(loginUser.rejected, (state, action) => {
				state.loading = false;
				state.user = [];
				if (action.error.message === STRING.REQUESTFAILED400) {
					state.error = STRING.ACCESSDENIED;
					toast.error(STRING.ACCESSDENIED);
				} else {
					toast.error(action.error.message);
					state.error = action.error.message || null;
				}
			});
	},
	reducers: {},
});

export default authSlice.reducer;

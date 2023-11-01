import { LogLevel } from "../utils/globalLogger";

export const STRING = {
	HOME: "home",
	USERDETAILS: "userDetails",
	LOGIN: "login",
	ADMIN: "admin",
	AUTHORIZATION: "Authorization",
	AUTHTOKEN: "authToken",
	REQUESTFAILED400: "Request failed with status code 400",
	ACCESSDENIED: "Access Denied! Invalid Credentials",
	USER: "user",
	CREATE: "create",
	ISSIDEBAROPEN: "isSidebarOpen",
	TRUE: "true",
	SIDEBAR: "sidebar",
};

export const BOOLEANS = {
	TRUE: true,
	FALSE: false,
};

export type Environment = "development" | "production";

export const APP_ENV: Environment = process.env.REACT_APP_SERVER_NAME === "production" ? "production" : "development";
export const LOG_LEVEL: LogLevel = APP_ENV === "production" ? "warn" : "log";

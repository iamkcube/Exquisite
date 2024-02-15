import {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/config/firebase";

interface AuthContextProps {
	userLoggedIn: boolean;
	currentUser: User | null;
	setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function useAuth() {
	const context = useContext(AuthContext);
	if (!context) {
	  throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
}

interface childrenProps {
	children: ReactNode;
}

export function AuthProvider({ children }: childrenProps) {
	const [currentUser, setCurrentUser] = useState<User | null>(null);
	const [userLoggedIn, setUserLoggedIn] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, initializeUser);
		return unsubscribe;
	}, []);

	async function initializeUser(user: User | null) {
		if (user) {
			setCurrentUser({ ...user });
			setUserLoggedIn(true);
		} else {
			setCurrentUser(null);
			setUserLoggedIn(false);
		}

		setLoading(false);
	}

	const value = {
		userLoggedIn,
		currentUser,
		setCurrentUser,
	};

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
}

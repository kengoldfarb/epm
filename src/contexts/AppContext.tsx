import { ethers } from 'ethers'
import React, {
	createContext,
	useMemo,
	useContext,
	ReactNode,
	useEffect,
	useCallback,
	useState
} from 'react'
import { Id } from '../lib/id'
import { useAuth } from './AuthContext'

export interface IAppContextState {
	/** Login method that calls id.login(...) and automatically manages signatures */
	login: (options: {
		/** The message that will appear in the user's wallet to sign */
		message: string

		/** The signer */
		signer: ethers.providers.JsonRpcSigner

		/** The chainId */
		chainId: number

		/** The URI where the login is taking place */
		uri: string
	}) => Promise<{
		/** The signature */
		signature: string

		/** The full built SIWE message */
		messageToSign: string

		/** The JWT token */
		jwt: string
	}>

	id: Id
}

const AppContext = createContext({} as IAppContextState)
AppContext.displayName = 'AppContext'

export interface ISDKProps {
	children?: ReactNode
}

export const AppProvider: React.FC<ISDKProps> = ({ ...props }: ISDKProps) => {
	const { jwt, setJwt } = useAuth()

	const [hasSetJWT, setHasSetJWT] = useState(false)
	const [id] = useState<Id>(new Id({ jwt }))

	const login = useCallback(
		async (options: {
			/** The message that will appear in the user's wallet to sign */
			message: string

			/** The signer */
			signer: ethers.providers.JsonRpcSigner

			/** The chainId */
			chainId: number

			/** The URI where the login is taking place */
			uri: string
		}) => {
			const result = await id.login(options)

			id.setJwt(result.jwt)
			setJwt(result.jwt)

			return result
		},
		[id, setJwt]
	)

	useEffect(() => {
		id.setJwt(jwt)
		if (jwt) {
			setHasSetJWT(true)
		}
	}, [jwt, id, hasSetJWT])

	useEffect(() => {
		id.hasInitialized = true
	}, [id])

	const value = useMemo(
		() => ({
			id,
			login
		}),
		[id, login]
	)

	return <AppContext.Provider value={value} {...props} />
}

export function useApp() {
	const context = useContext(AppContext)

	if (typeof context === 'undefined') {
		throw new Error(`useApp must be used within an AppProvider`)
	}

	return context
}

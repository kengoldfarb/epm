import { gql } from '@apollo/client/core'

export const GET_ME_QUERY = gql`
	query GetMe($walletAddress: String) {
		Users(where: { Wallets: { address: { _ilike: $walletAddress } } }) {
			id
			profilePicUrl
			displayName
			DefaultWallet {
				address
				ens
			}
		}
	}
`

import { Text, Space, Title } from '@mantine/core'
import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { Page } from '../../styles/Page'
import { AddressContracts } from './AddressContracts'

export interface IProps {
	address: string
	title: string
	description: string
}

export const MyContractsContainer: React.FC<IProps> = () => {
	const { accounts } = useAuth()

	return (
		<Page>
			<Title>My Contracts</Title>
			<Space h={8} />
			<Text>All the contracts you&apos;ve deployed or tracked</Text>
			<Space h={8} />
			{accounts && accounts[0] && (
				<AddressContracts address={accounts[0]} />
			)}
		</Page>
	)
}

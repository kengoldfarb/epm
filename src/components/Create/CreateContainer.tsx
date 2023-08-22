import log from '@kengoldfarb/log'
import {
	Text,
	Center,
	Button,
	Textarea,
	TextInput,
	Space,
	Select,
	JsonInput,
	Title
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { showNotification } from '@mantine/notifications'
import Link from 'next/link'
import React, { useState } from 'react'
import { API } from '../../generated/api.generated'
import { makeFetcher } from '../../lib/fetcher'
import { Page } from '../../styles/Page'

export const CreateContainer: React.FC = () => {
	const [isSubmitting, setIsSubmitting] = useState(false)

	const form = useForm({
		initialValues: {
			name: '',
			description: '',
			address: '',
			abi: '',
			bytecode: '',
			chainId: '',
			contractType: ''
		},
		validate: {
			name: val => (val.length > 0 ? null : 'Name is required')
		}
	})

	return (
		<Page>
			<Title>Create Contract</Title>
			<Space h={8} />
			<Text>
				Upload your contract to easily deploy and manage instances of
				it.
			</Text>
			<Space h={8} />
			<form
				onSubmit={form.onSubmit(async values => {
					try {
						setIsSubmitting(true)
						const createContract = makeFetcher<
							API.v1.CreateContract.IQueryParams,
							API.v1.CreateContract.IRequestBody,
							API.v1.CreateContract.IResponseBody
						>({
							method: API.v1.CreateContract.method
						})

						const { contractId } = await createContract(
							API.v1.CreateContract.path(),
							undefined,
							{
								...values,
								contractType:
									values.contractType as API.ContractType,
								abi: JSON.parse(values.abi)
							}
						)

						form.reset()

						showNotification({
							title: 'Contract created',
							message: (
								<p>
									The contract was saved and can now be
									deployed.{' '}
									<Link
										href={{
											pathname: '/contracts',
											query: {
												contractId
											}
										}}
									>
										<a target="_blank">View Contract</a>
									</Link>
								</p>
							),
							color: 'green'
						})
					} catch (e) {
						log.crit(e)
					}
					setIsSubmitting(false)
				})}
			>
				<Select
					label="Contract Type"
					placeholder="Pick one"
					required
					data={[
						{
							value: API.ContractType.Regular,
							label: 'Regular Contract'
						},
						{
							value: API.ContractType.DiamondProxy,
							label: 'Diamond Proxy (EIP-2535)'
						},
						{
							value: API.ContractType.DiamondFacet,
							label: 'Diamond Facet (EIP-2535)'
						}
					]}
					{...form.getInputProps('contractType')}
				/>

				<TextInput
					label="Name"
					radius="lg"
					size="md"
					maxLength={140}
					placeholder="Permissions"
					required
					{...form.getInputProps('name')}
				/>

				<Space h={8} />

				<Textarea
					label="Description"
					radius="lg"
					size="md"
					autosize
					minRows={3}
					maxRows={5}
					maxLength={5000}
					placeholder="This contract does something..."
					required
					{...form.getInputProps('description')}
				/>

				<JsonInput
					radius="lg"
					label="ABI"
					size="md"
					autosize
					required
					minRows={5}
					maxRows={6}
					placeholder={`[
	{
		"inputs": [
		{
			"internalType": "address",
			"name": "owner",
			"type": "address"
		}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
]`}
					{...form.getInputProps('abi')}
				/>

				<Textarea
					label="Bytecode"
					required
					radius="lg"
					size="md"
					autosize
					minRows={5}
					maxRows={6}
					placeholder="0x..."
					{...form.getInputProps('bytecode')}
				/>
				<Space h={24} />

				<Center>
					<Button type="submit" loading={isSubmitting}>
						Continue
					</Button>
				</Center>
			</form>
		</Page>
	)
}

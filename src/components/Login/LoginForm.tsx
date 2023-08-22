import { Text, Space, Modal, Image, Center } from '@mantine/core'
import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useTheme } from './Theme'

export interface ILoginModalProps {
	/** Whether the modal is open */
	isOpen: boolean

	/** Called when the modal is requesting that it be closed */
	onRequestClose: () => any

	/** Will connect the currently logged in user with a new identity */
	isLoginForced?: boolean
}

export interface ILoginFormProps {
	/** Called when the modal is requesting that it be closed */
	onRequestClose?: () => any
}

export const LoginForm: React.FC<ILoginFormProps> = ({ onRequestClose }) => {
	const { connectWallet } = useAuth()
	const { classes } = useTheme()

	return (
		<>
			<div>
				<Center>
					<div className={classes.rowResponsive}>
						<div
							className={classes.connectMethodGridItem}
							style={{
								position: 'relative'
							}}
							onClick={() => {
								connectWallet('injected')
								if (onRequestClose) {
									onRequestClose()
								}
							}}
						>
							<div
								className={classes.connectMethodGridItemContent}
							>
								<Center>
									<Image
										src={`/connect-metamask.svg`}
										height={24}
										fit={'contain'}
									/>
								</Center>

								<Space h={16} />

								<Center>
									<Text className={classes.tSmallBold}>
										Metamask
									</Text>
								</Center>
							</div>
						</div>
						<Space w={24} />
						<Space h={16} />
						<div
							className={classes.connectMethodGridItem}
							style={{
								position: 'relative'
							}}
							onClick={() => {
								connectWallet('walletconnect')
								if (onRequestClose) {
									onRequestClose()
								}
							}}
						>
							<div
								className={classes.connectMethodGridItemContent}
							>
								<Center>
									<Image
										src={`/connect-walletconnect.png`}
										height={24}
										width={24}
										fit={'contain'}
									/>
								</Center>

								<Space h={16} />
								<Center>
									<Text className={classes.tSmallBold}>
										WalletConnect
									</Text>
								</Center>
							</div>
						</div>
						<Space w={24} />
						<Space h={16} />
						<div
							className={classes.connectMethodGridItem}
							style={{
								position: 'relative'
							}}
							onClick={() => {
								connectWallet('magic')
								if (onRequestClose) {
									onRequestClose()
								}
							}}
						>
							<div
								className={classes.connectMethodGridItemContent}
							>
								<Center>
									<Image
										src={`/connect-email.png`}
										height={24}
										width={24}
										fit={'contain'}
									/>
								</Center>

								<Space h={16} />
								<Center>
									<Text className={classes.tSmallBold}>
										Email / Google
									</Text>
								</Center>
							</div>
						</div>
					</div>
				</Center>
			</div>
		</>
	)
}

export const LoginModal: React.FC<ILoginModalProps> = ({
	isOpen,
	onRequestClose,
	isLoginForced
}) => {
	const { classes } = useTheme()

	return (
		<>
			<Modal
				centered
				radius={16}
				overlayBlur={8}
				withCloseButton={!isLoginForced}
				closeOnClickOutside={!isLoginForced}
				padding={'lg'}
				size={'60%'}
				opened={isOpen}
				className={classes.visibleDesktopOnly}
				title={<Text className={classes.tMediumBold}>{'Connect'}</Text>}
				onClose={async () => {
					onRequestClose()
				}}
			>
				<LoginForm />
			</Modal>
			<Modal
				centered
				radius={16}
				overlayBlur={8}
				withCloseButton={!isLoginForced}
				closeOnClickOutside={!isLoginForced}
				padding={'lg'}
				opened={isOpen}
				className={classes.visibleMobileOnly}
				title={<Text className={classes.tMediumBold}>{'Connect'}</Text>}
				onClose={async () => {
					onRequestClose()
				}}
			>
				<LoginForm />
			</Modal>
		</>
	)
}

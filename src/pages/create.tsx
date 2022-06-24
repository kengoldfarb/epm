import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { CreateContainer } from '../components/Create/CreateContainer'
import { HeaderMenu } from '../components/Header/Header'

const CreatePage: NextPage = () => {
	return (
		<>
			<HeaderMenu />
			<CreateContainer />
		</>
	)
}

export default CreatePage

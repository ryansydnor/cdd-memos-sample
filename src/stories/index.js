import React from 'react';
import { users } from '../graphql/mocks'
import { storiesOf } from '@storybook/react';
import { UserDetailsLayout } from '../ComponentDriven/UserDetailsContainer';

storiesOf('UserDetailsLayout', module)
	.add('doug', () => (
		<UserDetailsLayout {...users.doug} />
	));
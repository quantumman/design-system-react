/* eslint-disable no-console, react/prop-types */
import React from 'react';

// Higher Order Components such as `react-onclickoutside` use the DOM and Jest snapshot testing must be DOMless
import Navigation from '~/components/navigation';
import IconSettings from '~/components/iconSettings';

import { sampleReportCategories } from '../../utilities/sample-data/navigation';

const Example = React.createClass({
	displayName: 'NavigationExample',

	render () {
		return (
			<IconSettings iconPath="/assets/icons">
				<Navigation
					id="sample-navigation"
					categories={sampleReportCategories}
					{...this.props}
				/>
			</IconSettings>
		);
	}
});

export default Example;
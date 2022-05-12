import React from 'react';
import './entity.scss';

export default function EntityCount({ entity }) {
	return (
		<div className='entity-block'>
			<span>{entity}</span>
		</div>
	)
}

import React from 'react'
import { Link } from 'react-router-dom'

interface ErrorDisplayProps {
	title: string
	description: string
	href: string
	linkText: string
}

export const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ title, description, href, linkText }) => {
	return (
		<div className="py-20 text-center">
			<h3 className="text-5xl font-bold">{title}</h3>
			<p>{description}</p>
			<Link to={href} className="text-primary underline">
				{linkText}
			</Link>
		</div>
	)
}

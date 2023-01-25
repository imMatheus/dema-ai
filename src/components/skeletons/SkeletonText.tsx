import React from 'react'
import classNames from 'classnames'

interface SkeletonTextProps {
	className: React.HTMLAttributes<HTMLDivElement>['className']
}

const SkeletonText: React.FC<SkeletonTextProps> = ({ className }) => {
	return <div className={classNames('rounded-md bg-gray-200', className)} />
}

export default SkeletonText

import React from 'react'
import classNames from 'classnames'

interface SkeletonImageProps {
	className?: React.HTMLAttributes<HTMLDivElement>['className']
}

const SkeletonImage: React.FC<SkeletonImageProps> = ({ className }) => {
	return <div className={classNames('h-full w-full rounded-md bg-gray-200', className)} />
}

export default SkeletonImage

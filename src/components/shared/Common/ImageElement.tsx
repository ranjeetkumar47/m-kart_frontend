import React, { useState } from "react";

interface ImageProps {
	src: string;
	alt: string;
	className?: string;
	width?: number;
	height?: number;
	placeholderSrc?: string;
}
const ImageElement: React.FC<ImageProps> = ({ src, alt, className, width, height, placeholderSrc }) => {
	const [error, setError] = useState(false);

	/**
	 * The function `handleImageError` sets an error state to true.
	 */
	const handleImageError = () => {
		setError(true);
	};

	return (
		<>
			{error ? (
				<img src={placeholderSrc || ""} alt="Placeholder" className={className} width={width} height={height} />
			) : (
				<img src={src} alt={alt} className={className} width={width} height={height} onError={handleImageError} />
			)}
		</>
	);
};

export default ImageElement;

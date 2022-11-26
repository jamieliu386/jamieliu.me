import React from 'react';
import { GatsbyImage, GatsbyImageProps } from 'gatsby-plugin-image';

export type SVGImgProps = Omit<GatsbyImageProps, 'alt' | 'image'> & {
	alt?: string,
	width: number,
	height: number,
	src: string,
};

/*
 * A version of gatsby-image's React component that works with SVGs. Only the
 * URL needs to be provided, and there is no need to go though the GraphQL
 * steps to generate such an image.
 *
 * Most of the time, if the SVG is small, then it should just be inlined using
 * SVGR:
 *
 *     import { ReactComponent as MySVGElement } from './image.svg';
 *
 * This component is useful for larger SVG images that should be loaded lazily.
 */

// width and height should be gotten from the <svg> element in the SVG files.
export default function SVGImg({ alt = '', width, height, src, ...props }: SVGImgProps) {
	return (
		<GatsbyImage
			alt={alt}
			image={{
				layout: 'fullWidth',
				width,
				height,
				images: {
					sources: [
						{
							srcSet: src,
							type: 'image/svg+xml'
						}
					]
				}
			}}
			{...props}
		/>
	);
}

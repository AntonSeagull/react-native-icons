import {
  G,
  Path,
  Svg,
  Line,
  Circle,
  Polyline,
  Polygon,
  Rect,
  Ellipse
} from 'react-native-svg';
import type { IconProps } from '../../types';

export const PiHandsPrayingLight = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m233.9 181.42-36.59-36.6L160.71 24A19.75 19.75 0 0 0 128 15.62 19.75 19.75 0 0 0 95.29 24l-36.6 120.82-36.59 36.6a14 14 0 0 0 0 19.79l32.69 32.69a14 14 0 0 0 19.79 0l48.29-48.28a38 38 0 0 0 5.13-6.38 38 38 0 0 0 5.13 6.38l48.29 48.28a14 14 0 0 0 19.79 0l32.69-32.69a14 14 0 0 0 0-19.79m-167.8 44a2 2 0 0 1-2.83 0l-32.69-32.69a2 2 0 0 1 0-2.83l14.11-14.1 35.51 35.51Zm48.28-48.29-25.69 25.7-35.52-35.52 15.07-15.07a6 6 0 0 0 1.5-2.5l37-122.22A7.78 7.78 0 0 1 122 29.78v129a25.83 25.83 0 0 1-7.62 18.35M134 158.75v-129a7.78 7.78 0 0 1 15.22-2.26l37 122.22a6 6 0 0 0 1.5 2.5l15.93 15.94-36.28 34.74-25.79-25.79a25.83 25.83 0 0 1-7.58-18.35m91.42 34-32.69 32.69a2 2 0 0 1-2.83 0l-14-14 36.29-34.74 13.24 13.23a2 2 0 0 1-.01 2.8Z" />
      </G>
    </Svg>
  );
};
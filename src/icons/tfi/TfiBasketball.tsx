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

export const TfiBasketball = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M8.516 0c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5S13.202 0 8.516 0m4.473 8a7.5 7.5 0 0 1 1.497-4.02A7.45 7.45 0 0 1 15.99 8zm3.001 1a7.45 7.45 0 0 1-1.505 4.021A7.5 7.5 0 0 1 12.99 9zm-2.164-5.791A8.48 8.48 0 0 0 11.989 8H9V1.024a7.48 7.48 0 0 1 4.826 2.185M8 1.026V8H5.04a8.46 8.46 0 0 0-1.834-4.791A7.47 7.47 0 0 1 8 1.026M1.041 8a7.45 7.45 0 0 1 1.505-4.021A7.5 7.5 0 0 1 4.041 8zM4.04 9a7.47 7.47 0 0 1-1.494 4.021A7.45 7.45 0 0 1 1.041 9zm-.835 4.791A8.45 8.45 0 0 0 5.04 9H8v6.974a7.48 7.48 0 0 1-4.795-2.183M9 15.976V9h2.99a8.48 8.48 0 0 0 1.835 4.792A7.49 7.49 0 0 1 9 15.976" />
      </G>
    </Svg>
  );
};
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

export const TbBrandAlgolia = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M15.5 11c-.414-1.477-1.886-2.5-3.5-2.5A3.47 3.47 0 0 0 8.5 12a3.47 3.47 0 0 0 3.5 3.5c.974 0 1.861-.357 2.5-1L19 19V4h-7c-4.386 0-8 3.582-8 8s3.614 8 8 8a7.6 7.6 0 0 0 2.998-.614" />
      </G>
    </Svg>
  );
};
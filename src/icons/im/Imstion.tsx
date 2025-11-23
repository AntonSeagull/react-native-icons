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

export const Imstion = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M7 11h2v2H7zm4-7a1 1 0 0 1 1 1v3l-3 2H7V9l3-2V6H5V4zM8 1.5c-1.736 0-3.369.676-4.596 1.904S1.5 6.264 1.5 8s.676 3.369 1.904 4.596S6.264 14.5 8 14.5s3.369-.676 4.596-1.904S14.5 9.736 14.5 8s-.676-3.369-1.904-4.596S9.736 1.5 8 1.5M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0" />
      </G>
    </Svg>
  );
};
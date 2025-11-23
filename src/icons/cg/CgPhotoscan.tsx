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

export const CgPhotoscan = (props: IconProps) => {
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
        <Path fill="currentColor" d="M9 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
        <Path fill="currentColor" fillRule="evenodd" d="M17 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-4.535 2H17v11H7v-5.535A4 4 0 0 0 12.465 5M9 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clipRule="evenodd" />
      </G>
    </Svg>
  );
};
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

export const CgMore = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M5 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2M22 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-2 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" clipRule="evenodd" />
      </G>
    </Svg>
  );
};
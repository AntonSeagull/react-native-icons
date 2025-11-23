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

export const CgClapperBoard = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="m20.17 3-.004.005A3 3 0 0 1 23 6v12a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm-9.694 2h6L13.09 9h-6zM5.09 9l3.387-4H4a1 1 0 0 0-1 1v3zM3 11v7a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-7zm18-2V6a1 1 0 0 0-1-1h-1.524L15.09 9z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};
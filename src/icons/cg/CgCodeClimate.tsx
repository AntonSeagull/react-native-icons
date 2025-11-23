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

export const CgCodeClimate = (props: IconProps) => {
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
        <Path fill="currentColor" d="m9.495 8.11-6.364 6.365 1.414 1.414 4.95-4.95 4.95 4.95 1.414-1.414zM14.505 8.11l-1.973 1.974 1.418 1.41.555-.555 4.95 4.95 1.414-1.414z" />
      </G>
    </Svg>
  );
};
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

export const CiPill = (props: IconProps) => {
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
        <Path d="M19.31 4.691a5.5 5.5 0 0 0-7.78 0l-6.84 6.84a5.5 5.5 0 0 0 3.89 9.39 5.52 5.52 0 0 0 3.89-1.61l6.84-6.84a5.5 5.5 0 0 0 0-7.78m-.71 7.07-3.42 3.42-6.36-6.36L12.24 5.4a4.5 4.5 0 0 1 7.68 3.17 4.43 4.43 0 0 1-1.32 3.191" />
      </G>
    </Svg>
  );
};
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

export const HiMiniEquals = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 10, 10)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M3.75 6a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5zm0 7.5a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5z" />
      </G>
    </Svg>
  );
};
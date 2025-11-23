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

export const LiaSuitcaseRollingSolid = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M14 3c-1.654 0-3 1.346-3 3v3h2V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3h2V6c0-1.654-1.346-3-3-3zm-7 8v15h2v2h2v-2h10v2h2v-2h2V11zm2 2h14v11H9zm2 3v2h10v-2zm0 4v2h10v-2z" />
      </G>
    </Svg>
  );
};
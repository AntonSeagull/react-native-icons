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

export const LuGitCompareArrows = (props: IconProps) => {
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
        <Circle cx={5} cy={6} r={3} />
        <Path d="M12 6h5a2 2 0 0 1 2 2v7" />
        <Path d="m15 9-3-3 3-3" />
        <Circle cx={19} cy={18} r={3} />
        <Path d="M12 18H7a2 2 0 0 1-2-2V9" />
        <Path d="m9 15 3 3-3 3" />
      </G>
    </Svg>
  );
};
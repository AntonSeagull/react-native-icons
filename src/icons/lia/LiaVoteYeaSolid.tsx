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

export const LiaVoteYeaSolid = (props: IconProps) => {
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
        <Path d="M8 5v16h16V5zm2 2h12v12H10zm9.3 2.9L15 14.2l-2.3-2.3-1.4 1.5 3 3 .7.7.7-.7 5-5zM2 19v8h2v-6h2v-2zm24 0v2h2v6h2v-8zM6 23v2h20v-2z" />
      </G>
    </Svg>
  );
};
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

export const CiRouter = (props: IconProps) => {
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
        <Path d="M19.44 10.94h-1.51v-6.4a.5.5 0 0 0-1 0v6.4H7.06V7a.5.5 0 0 0-1 0v3.94h-1.5a2.507 2.507 0 0 0-2.5 2.5v4a2.514 2.514 0 0 0 2.5 2.5h14.88a2.507 2.507 0 0 0 2.5-2.5v-4a2.5 2.5 0 0 0-2.5-2.5m1.5 6.5a1.5 1.5 0 0 1-1.5 1.5H4.56a1.51 1.51 0 0 1-1.5-1.5v-4a1.5 1.5 0 0 1 1.5-1.5h14.88a1.5 1.5 0 0 1 1.5 1.5Z" />
        <Circle cx={4.75} cy={15.436} r={0.75} />
        <Circle cx={8.25} cy={15.436} r={0.75} />
        <Path d="M18.5 16.936h-5a1.5 1.5 0 1 1 0-3h5a1.5 1.5 0 0 1 0 3m-5-2a.5.5 0 1 0 0 1h5a.5.5 0 0 0 0-1Z" />
      </G>
    </Svg>
  );
};
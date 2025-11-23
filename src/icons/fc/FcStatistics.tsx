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

export const FcStatistics = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 24, 24)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M23 5h2v36h-2z" />
        <Path d="m25.817 32.772 1.414 1.414-10.04 10.04-1.414-1.414z" />
        <Path d="m32.259 42.824-1.414 1.414-10.04-10.04 1.414-1.414z" />
        <Path fill="#CFD8DC" d="M4 8h40v28H4z" />
        <Path d="M3 7h42v4H3zM3 35h42v2H3z" />
        <Circle cx={31.5} cy={43.5} r={1.5} />
        <Circle cx={16.5} cy={43.5} r={1.5} />
        <Path d="m31.9 18.9-5.9 6-6-6-8.1 8 2.2 2.2 5.9-6 6 6 8.1-8z" />
        <Path d="m36 24-7-7h7z" />
      </G>
    </Svg>
  );
};
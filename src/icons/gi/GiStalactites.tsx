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

export const GiStalactites = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M18 18v109.8l41.97 274L109.4 79.5l31.5 161.9 19.5-78 27.8 161.2 55.4-272.9 54 172.4 14.2-35.2 60.8 289.4 59.2-320.1 24.9 57.3c-2.9 6-7.1 14-5.4 21.1 1.1 4.8 4.7 11.2 9.6 11.1 4.7-.1 7.7-6.5 8.5-11.1 1.4-7.6-3.6-16.2-6.8-22.1l31.4-74.8V18zm170.1 329.2s-10.4 17.8-8.5 27c1 4.8 4.7 11.2 9.6 11.1 4.7-.1 7.8-6.5 8.5-11.1 1.5-9.4-9.6-27-9.6-27" />
      </G>
    </Svg>
  );
};
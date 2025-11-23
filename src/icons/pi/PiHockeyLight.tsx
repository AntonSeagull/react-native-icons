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

export const PiHockeyLight = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M224 154h-94L36.57 44.12a6 6 0 1 0-9.14 7.77L161 209.07a14 14 0 0 0 10.7 4.93H224a14 14 0 0 0 14-14v-32a14 14 0 0 0-14-14m-53.82 47.3-30-35.3H194v36h-22.3a2 2 0 0 1-1.52-.7M226 200a2 2 0 0 1-2 2h-18v-36h18a2 2 0 0 1 2 2Zm-115.11-18.92a6 6 0 0 0-8.46.68L85.82 201.3a2 2 0 0 1-1.52.7H62v-36h23.2a6 6 0 0 0 0-12H32a14 14 0 0 0-14 14v32a14 14 0 0 0 14 14h52.3a14 14 0 0 0 10.7-4.93l16.6-19.54a6 6 0 0 0-.71-8.45M30 200v-32a2 2 0 0 1 2-2h18v36H32a2 2 0 0 1-2-2m121.43-75.88 68-80a6 6 0 1 1 9.14 7.77l-68 80a6 6 0 0 1-9.14-7.77" />
      </G>
    </Svg>
  );
};
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

export const PiTeaBag = (props: IconProps) => {
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
        <Path d="M224 160a16 16 0 0 1-16-16V64a56 56 0 0 0-112 0v8H76.53a16.09 16.09 0 0 0-13.72 7.77L42.28 114a16.06 16.06 0 0 0-2.28 8.22V216a16 16 0 0 0 16 16h96a16 16 0 0 0 16-16v-93.78a16.06 16.06 0 0 0-2.28-8.24l-20.53-34.21A16.09 16.09 0 0 0 131.47 72H112v-8a40 40 0 0 1 80 0v80a32 32 0 0 0 32 32 8 8 0 0 0 0-16m-92.53-72L152 122.22V216H56v-93.78L76.53 88H96v48a8 8 0 0 0 16 0V88Z" />
      </G>
    </Svg>
  );
};
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

export const GiPoland = (props: IconProps) => {
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
        <Path d="m19 100.9 198.4-68.89c9.4 24.82 24.8 41.58 58.1 34.5h165.8l42.5 130.09-42.5 31.6 25.8 10.4L493 368.2l-68.5 68.4 7.4 43.4-52.3-34.5h-76l-17.2 16.7-17.4-34.1c-49.6-11.2-85-35.6-120.4-63.1l-10 28.7-24.5-34.3-59.16-28.1C31.42 248.1 24.77 174.3 19 100.9" />
      </G>
    </Svg>
  );
};
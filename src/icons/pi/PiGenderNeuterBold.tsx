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

export const PiGenderNeuterBold = (props: IconProps) => {
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
        <Path d="M212 104a84 84 0 1 0-96 83.13V232a12 12 0 0 0 24 0v-44.87A84.12 84.12 0 0 0 212 104m-84 60a60 60 0 1 1 60-60 60.07 60.07 0 0 1-60 60" />
      </G>
    </Svg>
  );
};
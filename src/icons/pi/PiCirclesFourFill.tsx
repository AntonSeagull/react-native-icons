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

export const PiCirclesFourFill = (props: IconProps) => {
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
        <Path d="M120 80a40 40 0 1 1-40-40 40 40 0 0 1 40 40m56 40a40 40 0 1 0-40-40 40 40 0 0 0 40 40m-96 16a40 40 0 1 0 40 40 40 40 0 0 0-40-40m96 0a40 40 0 1 0 40 40 40 40 0 0 0-40-40" />
      </G>
    </Svg>
  );
};
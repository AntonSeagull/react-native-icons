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

export const PiCirclesThreeLight = (props: IconProps) => {
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
        <Path d="M170 76a42 42 0 1 0-42 42 42 42 0 0 0 42-42m-42 30a30 30 0 1 1 30-30 30 30 0 0 1-30 30m60 24a42 42 0 1 0 42 42 42 42 0 0 0-42-42m0 72a30 30 0 1 1 30-30 30 30 0 0 1-30 30M68 130a42 42 0 1 0 42 42 42 42 0 0 0-42-42m0 72a30 30 0 1 1 30-30 30 30 0 0 1-30 30" />
      </G>
    </Svg>
  );
};
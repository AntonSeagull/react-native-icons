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

export const PiSmileySadBold = (props: IconProps) => {
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
        <Path d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84 84.09 84.09 0 0 1-84 84M76 108a16 16 0 1 1 16 16 16 16 0 0 1-16-16m104 0a16 16 0 1 1-16-16 16 16 0 0 1 16 16m-3.26 57a12 12 0 0 1-19.48 14 36 36 0 0 0-58.52 0 12 12 0 0 1-19.48-14 60 60 0 0 1 97.48 0" />
      </G>
    </Svg>
  );
};
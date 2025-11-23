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

export const PiFastForwardCircleBold = (props: IconProps) => {
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
        <Path d="M196 128a12 12 0 0 1-4.5 9.37l-40 32A12 12 0 0 1 132 160v-19.83l-36.5 29.2A12 12 0 0 1 76 160V96a12 12 0 0 1 19.5-9.37l36.5 29.2V96a12 12 0 0 1 19.5-9.37l40 32A12 12 0 0 1 196 128m40 0A108 108 0 1 1 128 20a108.12 108.12 0 0 1 108 108m-24 0a84 84 0 1 0-84 84 84.09 84.09 0 0 0 84-84" />
      </G>
    </Svg>
  );
};
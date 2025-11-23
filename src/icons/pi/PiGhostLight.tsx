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

export const PiGhostLight = (props: IconProps) => {
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
        <Path d="M110 116a10 10 0 1 1-10-10 10 10 0 0 1 10 10m46-10a10 10 0 1 0 10 10 10 10 0 0 0-10-10m66 14v96a6 6 0 0 1-9.8 4.64l-25.53-20.89-25.54 20.89a6 6 0 0 1-7.6 0L128 199.75l-25.53 20.89a6 6 0 0 1-7.6 0l-25.54-20.89-25.53 20.89A6 6 0 0 1 34 216v-96a94 94 0 0 1 188 0m-12 0a82 82 0 0 0-164 0v83.34l19.53-16a6 6 0 0 1 7.6 0l25.54 20.89 25.53-20.89a6 6 0 0 1 7.6 0l25.53 20.89 25.54-20.89a6 6 0 0 1 7.6 0l19.53 16Z" />
      </G>
    </Svg>
  );
};
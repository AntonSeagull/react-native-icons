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

export const PiRewindCircleBold = (props: IconProps) => {
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
        <Path d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84 84.09 84.09 0 0 1-84 84m52-116v64a12 12 0 0 1-19.5 9.37l-36.5-29.2V160a12 12 0 0 1-19.5 9.37l-40-32a12 12 0 0 1 0-18.74l40-32A12 12 0 0 1 124 96v19.83l36.5-29.2A12 12 0 0 1 180 96" />
      </G>
    </Svg>
  );
};
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

export const PiBandaidsFill = (props: IconProps) => {
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
        <Path d="M128 116a12 12 0 1 1-12 12 12 12 0 0 1 12-12m84.28 39.72a40 40 0 1 1-56.56 56.56L128 184.57l-27.72 27.71a40 40 0 1 1-56.56-56.56L71.43 128l-27.71-27.72a40 40 0 1 1 56.56-56.56L128 71.43l27.72-27.71a40 40 0 1 1 56.56 56.56L184.57 128Zm-95.59 17.53-33.94-33.94L55 167a24 24 0 1 0 34 34ZM161.94 128 128 94.06 94.06 128 128 161.94Zm39-39A24 24 0 1 0 167 55l-27.69 27.75 33.94 33.94Z" />
      </G>
    </Svg>
  );
};
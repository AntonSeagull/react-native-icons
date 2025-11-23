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

export const PiBandaids = (props: IconProps) => {
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
        <Path d="m184.57 128 27.71-27.72a40 40 0 1 0-56.56-56.56L128 71.43l-27.72-27.71a40 40 0 1 0-56.56 56.56L71.43 128l-27.71 27.72a40 40 0 1 0 56.56 56.56L128 184.57l27.72 27.71a40 40 0 1 0 56.56-56.56ZM167 55a24 24 0 1 1 34 34l-27.72 27.72-33.97-33.97Zm-5.09 73L128 161.94 94.06 128 128 94.06ZM55 89a24 24 0 1 1 34-34l27.72 27.72-33.97 33.97Zm34 112a24 24 0 1 1-34-34l27.72-27.72 33.94 33.94Zm112 0a24 24 0 0 1-34 0l-27.72-27.72 33.94-33.94L201 167a24 24 0 0 1 0 34m-85-73a12 12 0 1 1 12 12 12 12 0 0 1-12-12" />
      </G>
    </Svg>
  );
};
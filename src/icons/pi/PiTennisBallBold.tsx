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

export const PiTennisBallBold = (props: IconProps) => {
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
        <Path d="M204.4 51.6a108 108 0 1 0 0 152.8 108.16 108.16 0 0 0 0-152.8m-135.82 17a83.47 83.47 0 0 1 46.2-23.52 84.09 84.09 0 0 1-69.72 69.72 83.47 83.47 0 0 1 23.52-46.22Zm-23.84 70.47a107.27 107.27 0 0 0 63.45-30.88 107.27 107.27 0 0 0 30.88-63.45 83.84 83.84 0 0 1 72.19 72.19 108.11 108.11 0 0 0-94.33 94.32 83.82 83.82 0 0 1-72.19-72.18m142.68 48.35a83.53 83.53 0 0 1-46.2 23.52 84.09 84.09 0 0 1 69.72-69.72 83.47 83.47 0 0 1-23.52 46.2" />
      </G>
    </Svg>
  );
};
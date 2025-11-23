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

export const PiSubtractBold = (props: IconProps) => {
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
        <Path d="M178 78A84 84 0 1 0 78 178 84 84 0 1 0 178 78m42 82a61 61 0 0 1-.38 6.65l-44-44a83.6 83.6 0 0 0 4-19.39A59.83 59.83 0 0 1 220 160M36 96a60 60 0 1 1 60 60 60.07 60.07 0 0 1-60-60m67.28 83.66a83.6 83.6 0 0 0 19.39-4l44 44a61 61 0 0 1-6.67.34 59.83 59.83 0 0 1-56.72-40.34m88.53 31.18-46.73-46.73a85 85 0 0 0 19-19l46.73 46.73a60.45 60.45 0 0 1-19 19" />
      </G>
    </Svg>
  );
};
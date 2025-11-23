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

export const PiMediumLogoBold = (props: IconProps) => {
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
        <Path d="M68 60a68 68 0 1 0 68 68 68.07 68.07 0 0 0-68-68m0 112a44 44 0 1 1 44-44 44.05 44.05 0 0 1-44 44M184 60c-23.63 0-36 34.21-36 68s12.37 68 36 68 36-34.21 36-68-12.37-68-36-68m0 111.87c-3.74-2.16-12-17.09-12-43.87s8.26-41.71 12-43.87c3.74 2.16 12 17.09 12 43.87s-8.26 41.71-12 43.87M256 72v112a12 12 0 0 1-24 0V72a12 12 0 0 1 24 0" />
      </G>
    </Svg>
  );
};
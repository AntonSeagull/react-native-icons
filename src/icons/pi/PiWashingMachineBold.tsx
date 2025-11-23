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

export const PiWashingMachineBold = (props: IconProps) => {
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
        <Path d="M160 80a16 16 0 1 1 16 16 16 16 0 0 1-16-16m72-36v168a20 20 0 0 1-20 20H44a20 20 0 0 1-20-20V44a20 20 0 0 1 20-20h168a20 20 0 0 1 20 20m-24 4H48v160h160Zm-68.49 75.51-16 16a12 12 0 0 0 17 17l16-16a12 12 0 1 0-17-17m-15-16a12 12 0 0 0-17 0l-8 8a12 12 0 0 0 17 17l8-8a12 12 0 0 0-.02-17ZM128 196a68.05 68.05 0 0 0 67.19-78.52 12 12 0 0 0-23.72 3.69 44 44 0 1 1-36.64-36.64 12 12 0 0 0 3.69-23.72A68 68 0 1 0 128 196" />
      </G>
    </Svg>
  );
};
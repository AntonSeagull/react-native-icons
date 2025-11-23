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

export const PiToteSimpleBold = (props: IconProps) => {
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
        <Path d="M239 66.75A20.12 20.12 0 0 0 224 60h-44.17a52 52 0 0 0-103.66 0H32.08a20 20 0 0 0-19.94 22.35l14.25 120A20.06 20.06 0 0 0 46.33 220h163.34a20.06 20.06 0 0 0 19.94-17.65l14.25-120a20 20 0 0 0-4.86-15.6M128 36a28 28 0 0 1 27.71 24h-55.42A28 28 0 0 1 128 36m78.19 160H49.81L36.5 84h183Z" />
      </G>
    </Svg>
  );
};
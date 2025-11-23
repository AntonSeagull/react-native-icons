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

export const PiDiceSixThin = (props: IconProps) => {
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
        <Path d="M192 36H64a28 28 0 0 0-28 28v128a28 28 0 0 0 28 28h128a28 28 0 0 0 28-28V64a28 28 0 0 0-28-28m20 156a20 20 0 0 1-20 20H64a20 20 0 0 1-20-20V64a20 20 0 0 1 20-20h128a20 20 0 0 1 20 20ZM100 84a8 8 0 1 1-8-8 8 8 0 0 1 8 8m72 0a8 8 0 1 1-8-8 8 8 0 0 1 8 8m-72 44a8 8 0 1 1-8-8 8 8 0 0 1 8 8m72 0a8 8 0 1 1-8-8 8 8 0 0 1 8 8m-72 44a8 8 0 1 1-8-8 8 8 0 0 1 8 8m72 0a8 8 0 1 1-8-8 8 8 0 0 1 8 8" />
      </G>
    </Svg>
  );
};
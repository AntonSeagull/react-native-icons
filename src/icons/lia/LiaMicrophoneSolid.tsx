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

export const LiaMicrophoneSolid = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M13 4c-1.094 0-2 .906-2 2v12c0 1.094.906 2 2 2h6c1.094 0 2-.906 2-2V6c0-1.094-.906-2-2-2Zm0 2h6v12h-6Zm-6 8v4c0 3.3 2.7 6 6 6h2v2h-4v2h10v-2h-4v-2h2c3.3 0 6-2.7 6-6v-4h-2v4c0 2.219-1.781 4-4 4h-6c-2.219 0-4-1.781-4-4v-4Z" />
      </G>
    </Svg>
  );
};
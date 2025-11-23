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

export const LiaIdCardAltSolid = (props: IconProps) => {
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
        <Path d="M15 5c-1.094 0-2 .906-2 2v1H4v18h24V8h-9V7c0-1.094-.906-2-2-2Zm0 2h2v2h-2Zm-9 3h7v1h6v-1h7v14H6Zm10 2c-2.2 0-4 1.8-4 4a3.98 3.98 0 0 0 1.215 2.855A5 5 0 0 0 11 23h2c0-1.668 1.332-3 3-3s3 1.332 3 3h2a5 5 0 0 0-2.215-4.145A3.98 3.98 0 0 0 20 16c0-2.2-1.8-4-4-4m0 2c1.117 0 2 .883 2 2s-.883 2-2 2-2-.883-2-2 .883-2 2-2" />
      </G>
    </Svg>
  );
};
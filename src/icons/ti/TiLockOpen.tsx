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

export const TiLockOpen = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M18 4c-2.206 0-4 1.795-4 4v3h-4v-1H7c-1.103 0-2 .896-2 2v7c0 1.104.897 2 2 2h10c1.103 0 2-.896 2-2v-7c0-1.104-.897-2-2-2h-1V8c0-1.104.897-2 2-2s2 .896 2 2v3a1 1 0 1 0 2 0V8c0-2.205-1.794-4-4-4m-6 14.299a1.3 1.3 0 1 1 0-2.6 1.3 1.3 0 0 1 0 2.6" />
      </G>
    </Svg>
  );
};
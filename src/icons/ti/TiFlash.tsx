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

export const TiFlash = (props: IconProps) => {
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
        <Path d="m17.502 12.033-4.241-2.458 2.138-5.131A1.003 1.003 0 0 0 14.505 3a1 1 0 0 0-.622.214l-.07.06-7.5 7.1a1.002 1.002 0 0 0 .185 1.592l4.242 2.46-2.163 5.19a.999.999 0 0 0 1.611 1.11l7.5-7.102a1.002 1.002 0 0 0-.186-1.591" />
      </G>
    </Svg>
  );
};
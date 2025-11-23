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

export const SiFontawesome = (props: IconProps) => {
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
        <Path d="M4.393 4.5a2.438 2.438 0 1 0-2.8-.141V24h3v-3h17.513c.684 0 1.238-.554 1.238-1.237a1.2 1.2 0 0 0-.107-.503l-2.893-6.51 2.893-6.51a1.2 1.2 0 0 0 .107-.503c0-.683-.554-1.237-1.238-1.237Z" />
      </G>
    </Svg>
  );
};
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

export const RiArtboard2Line = (props: IconProps) => {
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
        <Path d="M8 8v8h8V8zM6 6h12v12H6zm0-4h2v3H6zm0 17h2v3H6zM2 6h3v2H2zm0 10h3v2H2zM19 6h3v2h-3zm0 10h3v2h-3zM16 2h2v3h-2zm0 17h2v3h-2z" />
      </G>
    </Svg>
  );
};
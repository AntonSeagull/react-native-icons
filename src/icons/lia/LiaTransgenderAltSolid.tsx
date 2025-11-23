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

export const LiaTransgenderAltSolid = (props: IconProps) => {
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
        <Path d="M4 4v7h2V7.406L9.063 10.5 7.28 12.281 8.72 13.72l1.781-1.781 1.313 1.312A4.92 4.92 0 0 0 11 16c0 2.406 1.727 4.438 4 4.906V23h-3v2h3v3h2v-3h3v-2h-3v-2.094c2.273-.468 4-2.5 4-4.906a4.92 4.92 0 0 0-.812-2.75L26 7.406V11h2V4h-7v2h3.594l-5.844 5.813A4.92 4.92 0 0 0 16 11a4.92 4.92 0 0 0-2.75.813L11.938 10.5l1.78-1.781-1.437-1.438L10.5 9.063 7.406 6H11V4Zm12 9c1.668 0 3 1.332 3 3s-1.332 3-3 3-3-1.332-3-3 1.332-3 3-3" />
      </G>
    </Svg>
  );
};
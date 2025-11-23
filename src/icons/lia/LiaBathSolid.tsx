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

export const LiaBathSolid = (props: IconProps) => {
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
        <Path d="M26 4c-2.21 0-4 1.79-4 4h-2v2h6V8h-2c0-1.191.809-2 2-2s2 .809 2 2v6H1v2h1.188l1.53 7.594v.031a3.06 3.06 0 0 0 2 2.219L5 28h2l.656-2h16.688L25 28h2l-.719-2.156c1.047-.32 1.86-1.16 2.094-2.219v-.031L29.813 16H31v-2h-1V8c0-2.21-1.79-4-4-4M4.219 16h23.594l-1.407 7.219c-.117.433-.484.781-1 .781H6.688c-.536 0-.899-.355-1-.812Z" />
      </G>
    </Svg>
  );
};
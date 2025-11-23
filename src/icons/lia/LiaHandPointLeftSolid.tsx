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

export const LiaHandPointLeftSolid = (props: IconProps) => {
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
        <Path d="M16.906 3C15.29 3 14 4.23 14 5.656c0 1.336.469 2.328.938 2.969.292.402.421.469.624.625l.188.75H5c-1.645 0-3 1.355-3 3s1.355 3 3 3h3.563l1.656 7.625A3.016 3.016 0 0 0 13.156 26H30V10h-5.594l-6.781-6.719L17.313 3Zm-.312 2.094L23 11.406V24h-9.844c-.476 0-.898-.312-1-.781l-1.781-8.438-.187-.781H5c-.566 0-1-.434-1-1s.434-1 1-1h13.344l-.313-1.25-.593-2.25-.125-.406-.344-.188s-.18-.086-.438-.437c-.258-.352-.531-.91-.531-1.813 0-.308.172-.48.594-.562M25 12h3v12h-3Z" />
      </G>
    </Svg>
  );
};
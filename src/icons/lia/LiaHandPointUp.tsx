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

export const LiaHandPointUp = (props: IconProps) => {
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
        <Path d="M13 2c-1.645 0-3 1.355-3 3v10.75l-.75-.187c-.156-.204-.223-.333-.625-.626C7.985 14.47 6.992 14 5.656 14 4.23 14 3 15.29 3 16.906v.407l.281.312L10 24.406V30h16V13.156c0-1.41-.996-2.64-2.375-2.937L16 8.563V5c0-1.645-1.355-3-3-3m0 2c.566 0 1 .434 1 1v5.188l.781.187 8.438 1.781c.468.102.781.524.781 1V23H11.406l-6.312-6.406c.082-.422.254-.594.562-.594.903 0 1.461.273 1.813.531s.437.438.437.438l.188.343.406.125 2.25.594 1.25.313V5c0-.566.434-1 1-1m-1 21h12v3H12Z" />
      </G>
    </Svg>
  );
};
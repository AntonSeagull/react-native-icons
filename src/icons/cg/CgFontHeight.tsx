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

export const CgFontHeight = (props: IconProps) => {
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
        <Path fill="currentColor" d="M21 5V3H3v2zM21 19v2H3v-2z" />
        <Path fill="currentColor" fillRule="evenodd" d="M12 7.376a1 1 0 0 0-.967.576l-3.381 7.25a1 1 0 1 0 1.812.846L9.953 15h4.094l.489 1.048a1 1 0 1 0 1.813-.845l-3.381-7.251A1 1 0 0 0 12 7.376M13.115 13h-2.23L12 10.61z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};
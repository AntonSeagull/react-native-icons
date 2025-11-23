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

export const CgEuro = (props: IconProps) => {
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
        <Path fill="currentColor" d="M18.554 15.536a4.999 4.999 0 0 1-7.902-1.098h2.38l.696-1.876H10.05a5 5 0 0 1 0-1.125h4.287l.696-1.874h-4.38a4.998 4.998 0 0 1 7.902-1.099l1.414-1.414A7.003 7.003 0 0 0 8.454 9.562H6.032l-.696 1.875H8.04a7 7 0 0 0 0 1.126H4.728l-.696 1.874h4.422a7.003 7.003 0 0 0 11.514 2.513z" />
      </G>
    </Svg>
  );
};
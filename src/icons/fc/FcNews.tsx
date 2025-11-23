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

export const FcNews = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 24, 24)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="#FF5722" d="M32 15v28H10c-2.2 0-4-1.8-4-4V15z" />
        <Path fill="#FFCCBC" d="M14 5v34c0 2.2-1.8 4-4 4h29c2.2 0 4-1.8 4-4V5z" />
        <Path d="M20 10h18v4H20zM20 17h8v2h-8zM30 17h8v2h-8zM20 21h8v2h-8zM30 21h8v2h-8zM20 25h8v2h-8zM30 25h8v2h-8zM20 29h8v2h-8zM30 29h8v2h-8zM20 33h8v2h-8zM30 33h8v2h-8zM20 37h8v2h-8zM30 37h8v2h-8z" />
      </G>
    </Svg>
  );
};
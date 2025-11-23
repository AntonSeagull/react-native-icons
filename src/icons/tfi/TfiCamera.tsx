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

export const TfiCamera = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M5.958 3V2H3.042v1H0v12h17V3zM16 14H1V7h6.557A3.95 3.95 0 0 0 7 9c0 2.206 1.794 4 4 4s4-1.794 4-4c0-.731-.212-1.409-.557-2H16zm-2-5c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3m-.382-3c-.704-.614-1.612-1-2.618-1s-1.914.386-2.618 1H1V4h15v2z" />
      </G>
    </Svg>
  );
};
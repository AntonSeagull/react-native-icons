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

export const TfiExchangeVertical = (props: IconProps) => {
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
        <Path d="M6 15.043V8H5v7.043l-3.646-3.646-.707.707L5.5 16.957l4.854-4.854-.707-.707zm-.512.488h.023l-.011.012zm10.158-9.927L12 1.957v7.096h-1V1.957L7.354 5.604l-.708-.708L11.5.043l4.854 4.854z" />
      </G>
    </Svg>
  );
};
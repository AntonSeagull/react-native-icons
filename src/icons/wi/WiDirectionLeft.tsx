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

export const WiDirectionLeft = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 30 30"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 15, 15)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M7.09 14.96c0 .37.12.68.37.92l3.84 3.75c.22.25.51.38.85.38.35 0 .65-.12.89-.35s.37-.53.37-.88-.12-.65-.37-.89l-1.64-1.64h10.3c.35 0 .64-.12.87-.37s.34-.55.34-.9-.11-.65-.34-.9-.52-.38-.87-.39H11.4l1.64-1.66c.24-.24.37-.53.37-.86 0-.35-.12-.65-.37-.89s-.54-.38-.9-.38c-.32 0-.61.14-.85.41l-3.84 3.75c-.24.25-.36.54-.36.9" />
      </G>
    </Svg>
  );
};
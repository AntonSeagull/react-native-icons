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

export const CgAlignRight = (props: IconProps) => {
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
        <Path fill="currentColor" fillOpacity={0.5} fillRule="evenodd" d="m16 13.004-6-.013-.01 4 6 .013z" clipRule="evenodd" />
        <Path fill="currentColor" fillRule="evenodd" d="m19.978 18.002.026-12-2-.004-.026 12zM3.996 10.985l12 .026.009-4-12-.026z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};
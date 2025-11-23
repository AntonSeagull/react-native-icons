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

export const CgCornerUpRight = (props: IconProps) => {
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
        <Path fill="currentColor" d="m13.372 14.722 1.412 1.417 6.377-6.35-6.35-6.378-1.417 1.411 3.776 3.793-10.305-.022a4 4 0 0 0-4.009 3.991l-.017 8 2 .005.017-8a2 2 0 0 1 2.004-1.996l10.636.023z" />
      </G>
    </Svg>
  );
};
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

export const CgStark = (props: IconProps) => {
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
        <Path fill="currentColor" d="M7.172 18.025a8 8 0 0 1 4.935-14.948l-.437 3.126a4.844 4.844 0 0 0-2.988 9.05l6.146-11.278 2.634 1.436a8 8 0 0 1-4.934 14.948l.436-3.126a4.844 4.844 0 0 0 2.988-9.05L9.806 19.46z" />
      </G>
    </Svg>
  );
};
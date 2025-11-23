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

export const CgShoppingCart = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M5.792 2H1v2h3.218l2.77 12.678H7V17h13v-.248l2.193-9.661L22.531 6H6.655l-.57-2.611zm14.195 6H7.092l1.529 7h9.777z" clipRule="evenodd" />
        <Path fill="currentColor" d="M10 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4M19 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
      </G>
    </Svg>
  );
};
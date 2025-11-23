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

export const CgTemplate = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M3 3v6h18V3zm16 2H5v2h14zM3 11v10h8V11zm6 2H5v6h4z" clipRule="evenodd" />
        <Path fill="currentColor" d="M21 11h-8v2h8zM13 15h8v2h-8zM21 19h-8v2h8z" />
      </G>
    </Svg>
  );
};
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

export const RiGooglePlayFill = (props: IconProps) => {
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
        <Path d="M3.61 1.814 13.793 12 3.611 22.186a1 1 0 0 1-.61-.92V2.735a1 1 0 0 1 .609-.921M14.5 12.707l2.302 2.302-10.937 6.333zm3.199-3.198 2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.207 12zM5.865 2.658 16.803 8.99 14.5 11.293z" />
      </G>
    </Svg>
  );
};
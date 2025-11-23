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

export const CgTikcode = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M9 5H5v4h4zM3 3v8h8V3zM19 5h-4v4h4zm-6-2v8h8V3zM9 15H5v4h4zm-6-2v8h8v-8z" clipRule="evenodd" />
        <Path fill="currentColor" d="M13 13h2v8h-2zM16 13h2v8h-2zM19 13h2v8h-2z" />
      </G>
    </Svg>
  );
};
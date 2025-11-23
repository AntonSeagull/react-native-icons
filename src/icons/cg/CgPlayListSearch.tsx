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

export const CgPlayListSearch = (props: IconProps) => {
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
        <Path fill="currentColor" d="M15.879 4.879h-12v2h12zM15.879 8.879h-12v2h12zM3.879 12.879h8v2h-8z" />
        <Path fill="currentColor" fillRule="evenodd" d="M13.757 12.757a3 3 0 0 0 3.415 4.83l1.535 1.534 1.414-1.414-1.535-1.535a3.001 3.001 0 0 0-4.829-3.415m1.415 2.829a1 1 0 1 0 1.414-1.415 1 1 0 0 0-1.414 1.415" clipRule="evenodd" />
      </G>
    </Svg>
  );
};
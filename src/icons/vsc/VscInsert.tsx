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

export const VscInsert = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fillRule="evenodd" d="m14 1 1 1v4l-1 1H6L5 6V2l1-1zm0 1H6v4h8zM14 9l1 1v4l-1 1H6l-1-1v-4l1-1zm0 1H6v4h8z" clipRule="evenodd" />
        <Path d="m1 6.393 1.614 1.614L1 9.62l.694.693L4 8.007 1.694 5.7z" />
      </G>
    </Svg>
  );
};
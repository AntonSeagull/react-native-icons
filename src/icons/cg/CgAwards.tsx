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

export const CgAwards = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M19 9a6.99 6.99 0 0 1-3 5.745V22h-2.586L12 20.586 10.586 22H8v-7.255A7 7 0 1 1 19 9m-2 0A5 5 0 1 1 7 9a5 5 0 0 1 10 0m-7 10.757 2-2 2 2V15.71a7 7 0 0 1-2 .29 7 7 0 0 1-2-.29z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};
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

export const CgGames = (props: IconProps) => {
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
        <Path fill="currentColor" d="M15.47 11.293a1 1 0 1 0-1.415 1.414 1 1 0 0 0 1.415-1.414M16.177 9.172a1 1 0 1 1 1.414 1.414 1 1 0 0 1-1.414-1.414M19.712 11.293a1 1 0 1 0-1.414 1.414 1 1 0 0 0 1.414-1.414M16.177 13.414a1 1 0 1 1 1.414 1.415 1 1 0 0 1-1.414-1.415M6 13H4v-2h2V9h2v2h2v2H8v2H6z" />
        <Path fill="currentColor" fillRule="evenodd" d="M7 5a7 7 0 0 0 0 14h10a7 7 0 1 0 0-14zm10 2H7a5 5 0 0 0 0 10h10a5 5 0 0 0 0-10" clipRule="evenodd" />
      </G>
    </Svg>
  );
};
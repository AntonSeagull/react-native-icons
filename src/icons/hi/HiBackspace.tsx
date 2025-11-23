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

export const HiBackspace = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 10, 10)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fillRule="evenodd" d="M6.707 4.879A3 3 0 0 1 8.828 4H15a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H8.828a3 3 0 0 1-2.12-.879l-4.415-4.414a1 1 0 0 1 0-1.414zm4 2.414a1 1 0 0 0-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 1 0 1.414 1.414L12 11.414l1.293 1.293a1 1 0 0 0 1.414-1.414L13.414 10l1.293-1.293a1 1 0 0 0-1.414-1.414L12 8.586z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};
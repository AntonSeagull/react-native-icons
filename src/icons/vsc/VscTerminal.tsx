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

export const VscTerminal = (props: IconProps) => {
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
        <Path fillRule="evenodd" d="M1.5 3 3 1.5h18L22.5 3v18L21 22.5H3L1.5 21zM3 3v18h18V3z" clipRule="evenodd" />
        <Path d="M7.06 7.5 6 8.56l4.243 4.243L6 17.046l1.06 1.06L12 13.168v-.728zM12 16.5h6V18h-6z" />
      </G>
    </Svg>
  );
};
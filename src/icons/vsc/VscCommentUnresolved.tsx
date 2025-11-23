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

export const VscCommentUnresolved = (props: IconProps) => {
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
        <Path fillRule="evenodd" d="M1.5 2h13l.5.5v6.854a4 4 0 0 0-1-.819V3H2v8h2.5l.5.5v1.793l2.146-2.147L7.5 11h.626q-.124.481-.126 1h-.293l-2.853 2.854L4 14.5V12H1.5l-.5-.5v-9z" clipRule="evenodd" />
        <Path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6" />
      </G>
    </Svg>
  );
};
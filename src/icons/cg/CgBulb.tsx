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

export const CgBulb = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M4 9a8 8 0 0 0 4 6.93V16a4 4 0 1 0 8 0v-.07A8 8 0 1 0 4 9m12 4.472a6 6 0 1 0-8 0h2V16a2 2 0 1 0 4 0V13.47z" clipRule="evenodd" />
        <Path fill="currentColor" d="M10 21.006V21c.588.34 1.271.535 2 .535s1.412-.195 2-.535v.006a2 2 0 1 1-4 0" />
      </G>
    </Svg>
  );
};
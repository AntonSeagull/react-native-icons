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

export const VscRepoPush = (props: IconProps) => {
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
        <Path fillRule="evenodd" d="M8 2.56V8h1V2.56l3.647 3.647.707-.707-4.5-4.5h-.707l-4.5 4.5.707.707zM5.035 12H2v1h3.035a3.5 3.5 0 0 0 6.93 0H15v-1h-3.035a3.501 3.501 0 0 0-6.93 0m5.965.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" clipRule="evenodd" />
      </G>
    </Svg>
  );
};
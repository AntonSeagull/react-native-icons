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

export const TfiShine = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M8.5 5C6.57 5 5 6.57 5 8.5S6.57 12 8.5 12 12 10.43 12 8.5 10.43 5 8.5 5m0 6C7.122 11 6 9.878 6 8.5S7.122 6 8.5 6 11 7.122 11 8.5 9.878 11 8.5 11M9 4H8V1h1zm-1 9h1v3H8zm8-5v1h-3V8zM4 9H1V8h3zm8.036-3.329-.707-.707 2.121-2.121.707.707zm-7.072 5.658.707.707-2.121 2.121-.707-.707zm7.072 0 2.121 2.121-.707.707-2.121-2.121zM4.964 5.671 2.843 3.55l.707-.707 2.121 2.121z" />
      </G>
    </Svg>
  );
};
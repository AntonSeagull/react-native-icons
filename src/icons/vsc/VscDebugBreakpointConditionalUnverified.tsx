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

export const VscDebugBreakpointConditionalUnverified = (props: IconProps) => {
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
        <Path fillRule="evenodd" d="M5.778 4.674a4 4 0 1 1 4.444 6.652 4 4 0 0 1-4.444-6.652m.694 5.612a2.75 2.75 0 1 0 3.056-4.572 2.75 2.75 0 0 0-3.056 4.572M9.5 6.5h-3v1h3zm0 2h-3v1h3z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};
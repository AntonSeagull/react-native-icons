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

export const GrTty = (props: IconProps) => {
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
        <Path fill="none" stroke="#000" strokeLinecap="round" strokeWidth={2} d="M7 19h10a1 1 0 0 1 1 1h0a1 1 0 0 1-1 1H7h0a1 1 0 0 1-1-1h0a1 1 0 0 1 1-1Zm0-9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0-5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5-5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0-5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5-5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0-5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
      </G>
    </Svg>
  );
};
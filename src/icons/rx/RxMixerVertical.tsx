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

export const RxMixerVertical = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 15 15"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 7.5, 7.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="currentColor" fillRule="evenodd" d="M5 1.5a.5.5 0 0 0-1 0V7q0 .025.002.05a2.5 2.5 0 0 0 0 4.9L4 12v1.5a.5.5 0 0 0 1 0V12q0-.025-.002-.05a2.5 2.5 0 0 0 0-4.9L5 7zm6 0a.5.5 0 0 0-1 0V3q0 .025.002.05a2.5 2.5 0 0 0 0 4.9L10 8v5.5a.5.5 0 0 0 1 0V8q0-.025-.002-.05a2.5 2.5 0 0 0 0-4.9L11 3zM4.5 8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M9 5.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0" clipRule="evenodd" />
      </G>
    </Svg>
  );
};
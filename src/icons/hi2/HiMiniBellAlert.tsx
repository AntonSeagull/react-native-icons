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

export const HiMiniBellAlert = (props: IconProps) => {
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
        <Path d="M4.214 3.227a.75.75 0 0 0-1.156-.955 9 9 0 0 0-1.856 3.825.75.75 0 0 0 1.466.316 7.5 7.5 0 0 1 1.546-3.186m12.728-.955a.75.75 0 0 0-1.157.955 7.5 7.5 0 0 1 1.547 3.186.75.75 0 0 0 1.466-.316 9 9 0 0 0-1.856-3.825" />
        <Path fillRule="evenodd" d="M10 2a6 6 0 0 0-6 6c0 1.887-.454 3.665-1.257 5.234a.75.75 0 0 0 .515 1.076 33 33 0 0 0 3.256.508 3.5 3.5 0 0 0 6.972 0 33 33 0 0 0 3.256-.508.75.75 0 0 0 .515-1.076A11.45 11.45 0 0 1 16 8a6 6 0 0 0-6-6m0 14.5a2 2 0 0 1-1.95-1.557 34 34 0 0 0 3.9 0A2 2 0 0 1 10 16.5" clipRule="evenodd" />
      </G>
    </Svg>
  );
};
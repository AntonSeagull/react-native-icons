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

export const FcCalendar = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 24, 24)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="#CFD8DC" d="M5 38V14h38v24c0 2.2-1.8 4-4 4H9c-2.2 0-4-1.8-4-4" />
        <Path fill="#F44336" d="M43 10v6H5v-6c0-2.2 1.8-4 4-4h30c2.2 0 4 1.8 4 4" />
        <Circle cx={33} cy={10} r={3} />
        <Circle cx={15} cy={10} r={3} />
        <Path d="M33 3c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2s2-.9 2-2V5c0-1.1-.9-2-2-2M15 3c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2s2-.9 2-2V5c0-1.1-.9-2-2-2" />
        <Path d="M13 20h4v4h-4zM19 20h4v4h-4zM25 20h4v4h-4zM31 20h4v4h-4zM13 26h4v4h-4zM19 26h4v4h-4zM25 26h4v4h-4zM31 26h4v4h-4zM13 32h4v4h-4zM19 32h4v4h-4zM25 32h4v4h-4zM31 32h4v4h-4z" />
      </G>
    </Svg>
  );
};
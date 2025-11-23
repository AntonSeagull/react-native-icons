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

export const FcLibrary = (props: IconProps) => {
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
        <Path d="M1 38h46v2H1zM25 18h4v16h-4zM31 18h4v16h-4zM37 18h4v16h-4zM19 18h4v16h-4zM13 18h4v16h-4zM7 18h4v16H7zM43 16H5v-3l19-9 19 9zM5 34h38v2H5z" />
        <Path d="M25 16h4v2h-4zM31 16h4v2h-4zM37 16h4v2h-4zM19 16h4v2h-4zM13 16h4v2h-4zM7 16h4v2H7zM3 36h42v2H3z" />
        <Circle cx={24} cy={11} r={2} />
      </G>
    </Svg>
  );
};
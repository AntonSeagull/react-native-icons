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

export const LiaSimplybuilt = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M6 7c-1.094 0-2 .906-2 2v14c0 1.094.906 2 2 2h20c1.094 0 2-.906 2-2V9c0-1.094-.906-2-2-2h-4c-1.094 0-2 .906-2 2v1h-8V9c0-1.094-.906-2-2-2Zm0 2h4v3h12V9h4v14H6Zm6 5.5a3 3 0 1 0 .002 6.002A3 3 0 0 0 12 14.5m8 0a3 3 0 1 0 .002 6.002A3 3 0 0 0 20 14.5" />
      </G>
    </Svg>
  );
};
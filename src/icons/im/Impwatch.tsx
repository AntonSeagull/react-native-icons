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

export const Impwatch = (props: IconProps) => {
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
        <Path d="M8 3.019V2h2V1a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v1h2v1.019a6.5 6.5 0 1 0 1 0m3.036 10.017c-.944.944-2.2 1.464-3.536 1.464s-2.591-.52-3.536-1.464S2.5 10.836 2.5 9.5s.52-2.591 1.464-3.536a4.97 4.97 0 0 1 3.377-1.462l-.339 4.907c-.029.411.195.591.497.591s.527-.18.497-.591l-.339-4.907c1.276.04 2.47.555 3.377 1.462.944.944 1.464 2.2 1.464 3.536s-.52 2.591-1.464 3.536z" />
      </G>
    </Svg>
  );
};
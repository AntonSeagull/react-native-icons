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

export const SiGocd = (props: IconProps) => {
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
        <Path d="m18.043 13.237-8.907 5.935a1.47 1.47 0 0 1-.823.25 1.45 1.45 0 0 1-.696-.173 1.48 1.48 0 0 1-.784-1.308V12a1.482 1.482 0 1 1 2.957 0v3.163L14.537 12 7.478 7.304A1.49 1.49 0 1 1 9.13 4.823l8.913 5.94a1.492 1.492 0 0 1 0 2.474M12 0a12 12 0 1 0 12 12A12.01 12.01 0 0 0 12 0" />
      </G>
    </Svg>
  );
};
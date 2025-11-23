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

export const TiWeatherSunny = (props: IconProps) => {
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
        <Path d="m13 4-1 2.934L11 4a1.056 1.056 0 1 1 2 0m-9 7 2.934 1L4 13a1.056 1.056 0 1 1 0-2m7 9 1-2.934L13 20a1.056 1.056 0 1 1-2 0m9-7.002-2.934-1 2.934-1a1.056 1.056 0 1 1 0 2M7.05 5.636l1.367 2.781L5.636 7.05A1.057 1.057 0 1 1 7.05 5.636M5.636 16.949l2.781-1.367-1.367 2.781a1.057 1.057 0 1 1-1.414-1.414m11.313 1.414-1.367-2.781 2.781 1.367a1.057 1.057 0 1 1-1.414 1.414m1.413-11.315L15.58 8.416l1.368-2.782a1.057 1.057 0 1 1 1.414 1.414M12 16.5c-2.481 0-4.5-2.019-4.5-4.5S9.519 7.5 12 7.5s4.5 2.019 4.5 4.5-2.019 4.5-4.5 4.5m0-7c-1.379 0-2.5 1.121-2.5 2.5s1.121 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.121-2.5-2.5-2.5" />
      </G>
    </Svg>
  );
};
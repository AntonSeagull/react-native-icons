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

export const SiSlickpic = (props: IconProps) => {
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
        <Path d="M21.483 18.308 6.056 14.085l2.52-9.201L24 9.104zm-13.414-5.37 12.263 3.354 1.654-6.033L9.72 6.9l-1.65 6.034zm.457 2.857-4.891 1.311-1.625-6.045 4.146-1.11.501-1.835L0 9.902l2.478 9.215 9.178-2.467" />
      </G>
    </Svg>
  );
};
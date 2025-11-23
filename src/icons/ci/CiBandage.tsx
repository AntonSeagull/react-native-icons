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

export const CiBandage = (props: IconProps) => {
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
        <Path d="M17.435 7.5H6.565a4.5 4.5 0 0 0 0 9h10.87a4.5 4.5 0 0 0 0-9m-9.93 8h-.94a3.5 3.5 0 0 1 0-7h.94Zm8 0h-7v-7h7Zm1.93 0h-.93v-7h.93a3.5 3.5 0 0 1 0 7" />
        <Circle cx={10.252} cy={10.501} r={0.625} />
        <Circle cx={10.252} cy={13.501} r={0.625} />
        <Circle cx={13.752} cy={10.5} r={0.625} />
        <Circle cx={13.752} cy={13.5} r={0.625} />
      </G>
    </Svg>
  );
};
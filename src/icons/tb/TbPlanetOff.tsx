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

export const TbPlanetOff = (props: IconProps) => {
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
        <Path d="M18.816 13.58c1.956 1.825 3.157 3.449 3.184 4.445m-3.428.593c-2.098-.634-4.944-2.03-7.919-3.976-5.47-3.579-9.304-7.664-8.56-9.123.32-.628 1.591-.6 3.294-.113" />
        <Path d="M7.042 7.059a7 7 0 0 0 9.908 9.89m1.581-2.425A7 7 0 0 0 9.474 5.47M3 3l18 18" />
      </G>
    </Svg>
  );
};
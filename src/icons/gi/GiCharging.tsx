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

export const GiCharging = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m322 25-10 30h103l-10-30zM66.5 32v55h-23v18h128V87h-23V32h-18v55h-46V32zm210 41v302h174V73zm-208 48v51.3L95.23 199h24.57l26.7-26.7V121zm222 62h146v50h-146zm-192 34v167c0 31.4 18.6 55.7 44.5 70.8 25.8 15.1 59.2 22.2 92.5 22.2s66.7-7.1 92.5-22.2c23.4-13.6 40.8-34.7 44-61.8h-18.1c-2.9 20-15.6 34.9-34.9 46.2-22.2 12.9-52.8 19.8-83.5 19.8s-61.3-6.9-83.5-19.8c-22.1-12.9-35.5-30.6-35.5-55.2V217zm192 30h146v50h-146zm0 64h146v50h-146z" />
      </G>
    </Svg>
  );
};
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

export const GiGps = (props: IconProps) => {
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
        <Path d="M25 57v398h462V57zm30 30h306v338H55zm78.94 18 10.042 27.62L73 122.48v18.182l77.957 11.14 36.223 99.612 24.806-37.12L172.244 105zM278 105v18h64v-18zm0 32v18h64v-18zm106 39h82v48h-82zm18 18v12h46v-12zm-59 28.666-115.803 22.107 7.26 16.936L343 240.99zM384 240h82v48h-82zm-174.178 9.928-57.314 85.77 48.18-11.243 49.18 18.893zM402 258v12h46v-12zm23.646 53c22.538 0 41 18.463 41 41s-18.462 41-41 41c-22.537 0-41-18.463-41-41s18.463-41 41-41m0 18c-12.81 0-23 10.19-23 23s10.19 23 23 23 23-10.19 23-23-10.19-23-23-23m-226.25 14.24-17.777 4.15L176.2 407h36.146l5.164-56.8-18.115-6.96z" />
      </G>
    </Svg>
  );
};
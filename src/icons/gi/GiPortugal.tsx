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

export const GiPortugal = (props: IconProps) => {
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
        <Path d="m182.6 55.13 66-34.5-7.5 30.75 117.8-10.07-14 39.94 33.1-2.34c-47 52.19-45.7 119.19-60.8 178.49l-39.8-.7 40.5 57c-14.5 61.6-21 113.2-27.7 165-35.8 10.6-74.9 15.9-120.7 10.5 24.6-43 19.6-86 26.2-129l-33 .7-25.5-33.7c30.1-84.1 76-176.6 45.4-272.07" />
      </G>
    </Svg>
  );
};
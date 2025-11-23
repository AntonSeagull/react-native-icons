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

export const GiWindsock = (props: IconProps) => {
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
        <Path d="M63.6 33c-17.23 0-31 13.77-31 31s13.77 31 31 31 31-13.77 31-31-13.77-31-31-31m171.7 6.74-122.7 25.6c-.4 14.13-6.9 26.86-16.83 35.56l42.83 114.5 11.5-20.8-41.2-110.1 115-24 9.4-17.15zm8.5 21.9L161.7 210.8l53.6 16.9 71.4-129.9zM48.6 110.6V479h30V110.6c-4.73 1.6-9.77 2.4-15 2.4s-10.27-.8-15-2.4m288 29.3-59.2 107.4 62.3 19.6 46.8-85zm99.9 84.1-34.4 62.5 53.5 16.9 23.8-43.2z" />
      </G>
    </Svg>
  );
};
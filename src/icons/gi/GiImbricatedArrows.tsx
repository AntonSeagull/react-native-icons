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

export const GiImbricatedArrows = (props: IconProps) => {
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
        <Path d="M24.41 26.84 111.1 180.8l52.1-19 17.2-47.1c-52-29.28-104.02-58.56-155.99-87.86M219.1 63.09l-36.3 99.51 60 70.9 14-38.1c-12.6-44.1-25.2-88.2-37.7-132.31m84.3 59.11-43.1 118.1 65.3 77.2 18.7-51.3c-13.6-48-27.2-96-40.9-144m94.4 52-55.3 151.5 102.4 120.9-122.5-103.8-146.8 53.5 310.6 88.5c-29.5-103.6-59-207.1-88.4-310.6m-233.2 7L64.56 217.7l132.24 37.6 38.7-14.1c-23.7-20-47.3-40-70.9-60m77.7 77.4L123.5 302l144.1 40.9 51.9-18.9c-25.7-21.8-51.5-43.6-77.2-65.4" />
      </G>
    </Svg>
  );
};
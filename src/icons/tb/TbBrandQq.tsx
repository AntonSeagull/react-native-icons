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

export const TbBrandQq = (props: IconProps) => {
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
        <Path d="M6 9.748a14.72 14.72 0 0 0 11.995-.052C18.27.46 6.891-1.56 6 9.748M18 10c.984 2.762 1.949 4.765 2 7.153.014.688-.664 1.346-1.184.303Q18.296 16.412 17 16M17 16c.031 1.831.147 3.102-1 4M8 20c-1.099-.87-.914-2.24-1-4M6 10c-.783 2.338-1.742 4.12-1.968 6.43-.217 2.227.716 1.644 1.16.917Q5.636 16.618 7 16M15.898 13l-.476-2M8 20l-1.5 1c-.5.5-.5 1 .5 1h10c1 0 1-.5.5-1L16 20" />
        <Path d="M12.75 7a1 1 0 1 0 2 0 1 1 0 1 0-2 0M9.25 7a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
      </G>
    </Svg>
  );
};
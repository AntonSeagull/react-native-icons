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

export const GiGavel = (props: IconProps) => {
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
        <Path d="M129.75 24.47 21.625 211.655l55.78 32.188L185.532 56.656zm55.97 69.25-75.626 130.874L326.47 349.47l75.592-130.876zm83.468.686-11.22 19.438 84.97 49.03 11.25-19.468zM434.25 200.22 326.156 387.405l55.78 32.188 108.095-187.188-55.78-32.187zm-270.53 76.905-11.282 19.53 84.968 49 11.25-19.5-84.937-49.03zm-3.095 45.844L61.312 494.81h67.157l82.28-142.968-50.125-28.875z" />
      </G>
    </Svg>
  );
};
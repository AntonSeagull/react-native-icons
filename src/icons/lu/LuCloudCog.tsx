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

export const LuCloudCog = (props: IconProps) => {
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
        <Path d="m10.852 19.772-.383.924M13.148 14.228l.383-.923M13.148 19.772a3 3 0 1 0-2.296-5.544l-.383-.923" />
        <Path d="m13.53 20.696-.382-.924a3 3 0 1 1-2.296-5.544M14.772 15.852l.923-.383M14.772 18.148l.923.383" />
        <Path d="M4.2 15.1a7 7 0 1 1 9.93-9.858A7 7 0 0 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2M9.228 15.852l-.923-.383M9.228 18.148l-.923.383" />
      </G>
    </Svg>
  );
};
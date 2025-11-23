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

export const GiSubmarine = (props: IconProps) => {
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
        <Path d="M315 144v21.75L292 160l-16 80H164c-49.154 16.385-81.254 27.1-102.578 34.846L52 256l-16-16v44.918C20.047 292.31 20 296.316 20 304c0 7.712.05 11.717 16 19.162V368l16-16 9.352-18.703c21.094 7.734 52.752 18.418 101.072 34.703H372c160-16 160-128 0-128h-16v-64l-23-5.75V144zM148 263h256v18H148z" />
      </G>
    </Svg>
  );
};
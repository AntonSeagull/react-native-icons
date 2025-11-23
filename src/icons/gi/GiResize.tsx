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

export const GiResize = (props: IconProps) => {
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
        <Path d="m29 30 1 90h36V66h26V30zm99 0v36h72V30zm108 0v36h72V30zm108 0v36h72V30zm102 0v78h36V30zm-206 80v36h100.543l-118 118H30v218h218V289.457l118-118V272h36V110zm206 34v72h36v-72zM30 156v72h36v-72zm416 96v72h36v-72zm0 108v72h36v-72zm-166 86v36h72v-36zm108 0v36h72v-36z" />
      </G>
    </Svg>
  );
};
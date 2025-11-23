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

export const CiMedicalCase = (props: IconProps) => {
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
        <Path d="M18.435 6.465h-1.43v-.9a2.5 2.5 0 0 0-2.5-2.5h-5a2.5 2.5 0 0 0-2.5 2.5v.9h-1.44a2.5 2.5 0 0 0-2.5 2.5v9.47a2.5 2.5 0 0 0 2.5 2.5h12.87a2.5 2.5 0 0 0 2.5-2.5v-9.47a2.5 2.5 0 0 0-2.5-2.5m-10.43-.9a1.5 1.5 0 0 1 1.5-1.5h5a1.5 1.5 0 0 1 1.5 1.5v.9h-8Zm11.93 12.87a1.5 1.5 0 0 1-1.5 1.5H5.565a1.5 1.5 0 0 1-1.5-1.5v-9.47a1.5 1.5 0 0 1 1.5-1.5h12.87a1.5 1.5 0 0 1 1.5 1.5Z" />
        <Path d="M14.505 13.675a.5.5 0 0 1-.5.5h-1.5v1.5a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5v-1.5h-1.5a.5.5 0 0 1-.5-.5.5.5 0 0 1 .5-.5h1.5v-1.5a.5.5 0 0 1 .5-.5.51.51 0 0 1 .5.5v1.5h1.5a.51.51 0 0 1 .5.5" />
      </G>
    </Svg>
  );
};
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

export const VscCompass = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m9.009 6.991 2.024 4.042L6.991 9.01 4.967 4.967zm.426 2.444L8.481 7.52l-1.916-.955.954 1.917z" />
        <Path fillRule="evenodd" d="M13.98 8.5a6 6 0 0 1-5.48 5.48V13h-1v.98a6 6 0 0 1-5.482-5.518H3v-1h-.976A6 6 0 0 1 7.5 2.02V3h1v-.98a6 6 0 0 1 5.48 5.48H13v1zM8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14" clipRule="evenodd" />
      </G>
    </Svg>
  );
};
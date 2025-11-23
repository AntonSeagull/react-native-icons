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

export const SiAppium = (props: IconProps) => {
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
        <Path d="M11.923 0C5.937 0 .976 4.384.07 10.115a11.94 11.94 0 0 1 7.645-2.754 11.98 11.98 0 0 1 9.43 4.58 11.94 11.94 0 0 0 1.015-8.769 12 12 0 0 0-.626-1.772l-.003-.008A12 12 0 0 0 11.923 0m7.721 2.754A12 12 0 0 1 9.398 16.521a12.08 12.08 0 0 0 9.02 5.617c.24-.119.766-.51 1.224-.89A11.97 11.97 0 0 0 23.995 12a11.98 11.98 0 0 0-4.35-9.247zM9.33 7.557a12 12 0 0 0-2.647.401A11.94 11.94 0 0 0 .01 12.595l-.005.006q.032.641.131 1.275C1.037 19.61 6 24 11.991 24c1.45 0 2.887-.26 4.243-.773a12 12 0 0 1-6.905-15.67z" />
      </G>
    </Svg>
  );
};
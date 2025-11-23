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

export const SiTransmission = (props: IconProps) => {
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
        <Path d="M1.696 9.46v12.794c0 .945.884 1.709 1.715 1.709H20.57c.878 0 1.715-.61 1.715-1.709V9.467a73 73 0 0 1-6.863.77v5.147h3.432l-6.863 6.863-6.863-6.863H8.56v-5.086a47.5 47.5 0 0 1-6.843-.831h-.02zM15.42.037v8.417c2.246-.147 4.531-.167 6.863-.542C23.223 7.764 24 7.1 24 6.089v-3.8c0-1.012-.784-1.662-1.716-1.83C19.945.03 17.667.164 15.421.037zM8.56.05C6.239.191 3.96.077 1.716.46.777.619 0 1.277 0 2.289v3.8C0 7.1.784 7.73 1.716 7.912c2.218.442 4.504.476 6.843.603z" />
      </G>
    </Svg>
  );
};
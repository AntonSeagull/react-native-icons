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

export const DiMarkdown = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="#444" d="M25.674 9.221H6.326c-.899 0-1.63.731-1.63 1.63V21.72c0 .899.731 1.63 1.63 1.63h19.348c.899 0 1.63-.731 1.63-1.63V10.851c0-.899-.731-1.63-1.63-1.63m-8.261 11.301-2.826.003v-4.239l-2.12 2.717-2.12-2.717v4.239H7.521v-8.478h2.826l2.12 2.826 2.12-2.826 2.826-.003zm4.219.707-3.512-4.943h2.119v-4.239h2.826v4.239h2.119l-3.553 4.943z" />
      </G>
    </Svg>
  );
};
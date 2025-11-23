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

export const SlControlStart = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 1024 1024"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 512, 512)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M974.944 65.392c0-23.232-12.592-44.654-32.912-55.935a63.77 63.77 0 0 0-31.088-8.063 63.96 63.96 0 0 0-33.775 9.648L141.44 457.634c-15.952 9.905-26.512 26.208-29.376 44.4V32.004c0-17.664-14.336-32-32-32s-32 14.336-32 32v960c0 17.664 14.336 32 32 32s32-14.336 32-32V521.939c2.88 18.208 13.44 34.511 29.375 44.384l736.72 446.64a63.9 63.9 0 0 0 33.776 9.664 63.94 63.94 0 0 0 31.088-8.065 63.96 63.96 0 0 0 32.912-55.936zM175.2 511.985 910.944 65.393l1.008 893.216z" />
      </G>
    </Svg>
  );
};
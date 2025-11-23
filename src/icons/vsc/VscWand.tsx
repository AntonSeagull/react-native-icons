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

export const VscWand = (props: IconProps) => {
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
        <Path d="M4.38 5h1V4h1V3h-1V2h-1v1h-1v1h1zm8 4h-1v1h-1v1h1v1h1v-1h1v-1h-1zM14 2V1h-1v1h-1v1h1v1h1V3h1V2zm-2.947 2.442a1.49 1.49 0 0 0-2.12 0l-7.49 7.49a1.49 1.49 0 0 0 0 2.12c.59.59 1.54.59 2.12 0l7.49-7.49c.58-.58.58-1.53 0-2.12m-8.2 8.9c-.2.2-.51.2-.71 0s-.2-.51 0-.71l6.46-6.46.71.71zm7.49-7.49-.32.32-.71-.71.32-.32c.2-.2.51-.2.71 0 .19.2.19.52 0 .71" />
      </G>
    </Svg>
  );
};
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

export const TbBrandVimeo = (props: IconProps) => {
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
        <Path d="m3 8.5 1 1S5.5 8.398 6 9c.509.609 1.863 7.65 2.5 9 .556 1.184 1.978 2.89 4 1.5C14.5 18 20 14 21 8c.444-2.661-1-4-2.5-4-2 0-4.047 1.202-4.5 4 2.05-1.254 2.551 1 1.5 3s-2 3-2.5 3c-.49 0-.924-1.165-1.5-3.5-.59-2.42-.5-6.5-3-6.5S3 8.5 3 8.5" />
      </G>
    </Svg>
  );
};
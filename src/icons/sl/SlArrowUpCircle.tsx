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

export const SlArrowUpCircle = (props: IconProps) => {
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
        <Path d="M1024 512C1024 229.216 794.768 0 512 0 229.216 0 0 229.216 0 512c0 282.768 229.216 512 512 512 282.768 0 512-229.232 512-512m-960.992 0C63.008 264.976 264.976 64 512 64s448 200.976 448 448-200.976 448-448 448S63.008 759.024 63.008 512m481.328 224.32V375.856l115.76 115.76c12.496 12.496 32.752 12.496 45.248 0s12.496-32.752 0-45.248l-194-189.008-194 189.008c-6.256 6.256-9.376 14.432-9.376 22.624s3.12 16.368 9.376 22.624c12.496 12.496 32.752 12.496 45.248 0l117.744-117.76V736.32c0 17.68 14.336 32 32 32s32-14.32 32-32" />
      </G>
    </Svg>
  );
};
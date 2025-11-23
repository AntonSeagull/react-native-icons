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

export const LiaVolumeUpSolid = (props: IconProps) => {
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
        <Path d="M17 3.594 15.281 5.28 9.562 11H5v10h4.563l5.718 5.719L17 28.406Zm6.813 4.594-1.407 1.406a8.943 8.943 0 0 1 0 12.687l1.407 1.438c4.28-4.282 4.28-11.25 0-15.532M15 8.438v15.125l-4.281-4.282-.313-.281H7v-6h3.406l.313-.281Zm5.906 2.656L19.5 12.5c1.91 1.91 1.902 5.074-.031 7.094L20.937 21c2.665-2.781 2.657-7.219-.03-9.906" />
      </G>
    </Svg>
  );
};
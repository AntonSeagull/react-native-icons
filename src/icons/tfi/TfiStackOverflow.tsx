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

export const TfiStackOverflow = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M12.66 16.179c0 .312-.009.312-.009.312v.009H2.545c-.313 0-.313-.009-.313-.009h-.009V9.919h1.081v5.519h8.286V9.919h1.07zm-2.151-1.823-6.312.009v-1.348l6.312-.009zm.152-3.07-.116 1.339-6.295-.58.125-1.339zm.42-1.768-.349 1.305-6.098-1.635.348-1.304zm.794-1.536-.688 1.16L5.75 5.929l.687-1.161zm1.33-.946-1.106.759-3.564-5.214 1.116-.769zm1.572-.312-1.331.232-1.08-6.224L13.696.5z" />
      </G>
    </Svg>
  );
};
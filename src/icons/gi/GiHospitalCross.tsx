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

export const GiHospitalCross = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M174.688 28.063v71.625h-80.75v81.374H22.313v160.094h71.625v80.72h80.75v71.655H334.75v-71.655h81.375v-80.72h71.656V181.063h-71.655V99.688H334.75V28.064H174.688zm18.687 18.687h122.688v153h153.03v122.72H316.062v152.373H193.375V322.47H41V199.75h152.375z" />
      </G>
    </Svg>
  );
};
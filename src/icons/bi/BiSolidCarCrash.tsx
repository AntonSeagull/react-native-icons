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

export const BiSolidCarCrash = (props: IconProps) => {
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
        <Path d="M2.634 17.918a1.77 1.77 0 0 0 1.201 1.291l.18.791H4v2h16v-2H6.683a.8.8 0 0 0-.007-.278l-.196-.863 10.357-2.356.196.863a.886.886 0 0 0 1.06.667l.863-.197a.885.885 0 0 0 .667-1.06l-.251-1.103c.446-.416.67-1.046.525-1.683l-.59-2.59a1.76 1.76 0 0 0-1.262-1.307l-2.049-3.378a2.77 2.77 0 0 0-2.982-1.263l-7.868 1.79a2.77 2.77 0 0 0-2.144 2.43l-.387 3.932a1.76 1.76 0 0 0-.57 1.724zm3.02-.688a1.327 1.327 0 1 1-.59-2.589 1.327 1.327 0 0 1 .59 2.589m11.222-2.552a1.328 1.328 0 1 1-.59-2.587 1.328 1.328 0 0 1 .59 2.587M5.589 9.192l7.869-1.791a.77.77 0 0 1 .83.351l1.585 2.613-.566.129-10.046 2.287-.568.129.299-3.042a.77.77 0 0 1 .597-.676M18.405 4 17 2l-.5 3L19 9l3 1-2-2.539 2-.933-2-.933L22 2z" />
      </G>
    </Svg>
  );
};
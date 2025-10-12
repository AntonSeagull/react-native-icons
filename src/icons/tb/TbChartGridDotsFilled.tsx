

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbChartGridDotsFilled = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
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
        <G fill={color} stroke={color}>
          <Path  d="M18 2a1 1 0 0 1 1 1v.171a3.008 3.008 0 0 1 1.83 1.83l.17 -.001a1 1 0 0 1 0 2h-.171a3.008 3.008 0 0 1 -1.828 1.829l-.001 2.171h2a1 1 0 0 1 0 2h-2v2.171a3.008 3.008 0 0 1 1.83 1.83l.17 -.001a1 1 0 0 1 0 2h-.171a3.008 3.008 0 0 1 -1.828 1.829l-.001 .171a1 1 0 0 1 -2 0v-.17a3.008 3.008 0 0 1 -1.829 -1.83h-2.171v2a1 1 0 0 1 -2 0v-2h-2.171a3.008 3.008 0 0 1 -1.828 1.829l-.001 .171a1 1 0 0 1 -2 0v-.17a3.008 3.008 0 0 1 -1.829 -1.83h-.171a1 1 0 0 1 0 -2h.17a3.008 3.008 0 0 1 1.83 -1.83v-.34a3.008 3.008 0 0 1 -1.829 -1.83h-.171a1 1 0 0 1 0 -2h.17a3.008 3.008 0 0 1 1.83 -1.83v-2.17h-2a1 1 0 1 1 0 -2h2v-2a1 1 0 1 1 2 0v2h4v-2a1 1 0 0 1 2 0v2h2.17a3.008 3.008 0 0 1 1.83 -1.83v-.17a1 1 0 0 1 1 -1zm-7 11h-2.171a3.008 3.008 0 0 1 -1.828 1.829v.342a3.008 3.008 0 0 1 1.828 1.829h2.171v-4zm6 0h-4v4h2.17a3.008 3.008 0 0 1 1.83 -1.83v-2.17zm-6 -6h-4v2.171a3.008 3.008 0 0 1 1.83 1.83l2.17 -.001v-4zm4.171 0h-2.171v4h4v-2.17a3.008 3.008 0 0 1 -1.829 -1.83z" />
        </G>
      </Svg>
    );
  }


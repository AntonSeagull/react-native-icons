

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrCurrency = (props: IconProps) => {

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
          <Path  fill="none" d="M1,5 L23,5 L23,19 L1,19 L1,5 Z M2,9 L2,9 C3.65685425,9 5,7.65685425 5,6 M2,15 L2,15 C3.65685425,15 5,16.3431458 5,18 M22,9 L22,9 C20.3431458,9 19,7.65685425 19,6 M22,15 L22,15 C20.3431458,15 19,16.3431458 19,18 M12,16 C13.6568542,16 15,14.209139 15,12 C15,9.790861 13.6568542,8 12,8 C10.3431458,8 9,9.790861 9,12 C9,14.209139 10.3431458,16 12,16 Z" strokeWidth="2" />
        </G>
      </Svg>
    );
  }


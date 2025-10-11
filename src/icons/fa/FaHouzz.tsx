

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FaHouzz = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 448 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M275.9 330.7H171.3V480H17V32h109.5v104.5l305.1 85.6V480H275.9z" />
        </G>
      </Svg>
    );
  }


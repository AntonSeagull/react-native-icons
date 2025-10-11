

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiOverhead = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M37.368 144.56c97.187 0 101.127 1.314 101.127 1.314C263.844-57.842 363.082 219.342 375.947 319.62l-36.72.16 71.834 125.393 68.982-125.01-35.724-1.472c-82.41-287.54-303.28-300.208-406.95-174.13z" fill="#000" />
        </G>
      </Svg>
    );
  }


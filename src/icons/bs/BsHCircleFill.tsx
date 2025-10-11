

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BsHCircleFill = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-5-3.998H9.67v3.322H6.33V4.002H5V12h1.33V8.455h3.34V12H11z" />
        </G>
      </Svg>
    );
  }


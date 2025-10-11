

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrContract = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M2,14 L10,14 L10,22 M1,23 L10,14 M23,1 L14,10 M22,10 L14,10 L14,2" fill="none" />
        </G>
      </Svg>
    );
  }


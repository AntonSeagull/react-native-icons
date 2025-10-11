

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrStatusUnknownSmall = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 12 12"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          
        </G>
      </Svg>
    );
  }


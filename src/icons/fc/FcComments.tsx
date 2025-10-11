

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcComments = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M37,39H11l-6,6V11c0-3.3,2.7-6,6-6h26c3.3,0,6,2.7,6,6v22C43,36.3,40.3,39,37,39z" fill="#8BC34A" />
        </G>
      </Svg>
    );
  }




  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiGiphy = (props: IconProps) => {

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
          <Path d="M2.666 0v24h18.668V8.666l-2.668 2.668v10H5.334V2.668H10L12.666 0zm10.668 0v8h8V5.334h-2.668V2.668H16V0" />
        </G>
      </Svg>
    );
  }


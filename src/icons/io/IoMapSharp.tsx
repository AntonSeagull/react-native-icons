

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoMapSharp = (props: IconProps) => {

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
          <Path d="M327.71,130.93,184,39,32,144V480l152.29-98.93L328,473,480,368V32ZM312,421,200,349V91l112,72Z" />
        </G>
      </Svg>
    );
  }


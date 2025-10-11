

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiControlEject = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M8.474 2.719l-6.038 7.281h12.135l-6.097-7.281zM8.478 4.281l3.951 4.719h-7.865l3.914-4.719zM15 13v1h-13v-1h13z" fill="#000000" />
        </G>
      </Svg>
    );
  }


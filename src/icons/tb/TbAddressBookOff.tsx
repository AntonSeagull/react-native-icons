

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbAddressBookOff = (props: IconProps) => {

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
          <Path d="M8 4h10a2 2 0 0 1 2 2v10m-.57 3.399c-.363 .37 -.87 .601 -1.43 .601h-10a2 2 0 0 1 -2 -2v-12" />
          <Path d="M10 16h6" />
          <Path d="M11 11a2 2 0 0 0 2 2m2 -2a2 2 0 0 0 -2 -2" />
          <Path d="M4 8h3" />
          <Path d="M4 12h3" />
          <Path d="M4 16h3" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }


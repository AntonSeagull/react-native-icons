

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoPhonePortraitSharp = (props: IconProps) => {

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
          <Path d="M382,0H130a18,18,0,0,0-18,18V494a18,18,0,0,0,18,18H382a18,18,0,0,0,18-18V18A18,18,0,0,0,382,0ZM148,448V64H364V448Z" />
        </G>
      </Svg>
    );
  }


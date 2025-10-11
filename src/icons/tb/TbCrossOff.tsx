

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCrossOff = (props: IconProps) => {

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
          <Path d="M16 12h3v-4h-5v-5h-4v3m-2 2h-3v4h5v9h4v-7" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }


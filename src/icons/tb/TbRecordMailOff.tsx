

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbRecordMailOff = (props: IconProps) => {

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
          <Path d="M7 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <Path d="M18.569 14.557a3 3 0 1 0 -4.113 -4.149" />
          <Path d="M7 15h8" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }


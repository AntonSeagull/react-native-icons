

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbFlask2Off = (props: IconProps) => {

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
          <Path d="M6.1 15h8.9" />
          <Path d="M17.742 17.741a6 6 0 0 1 -2.424 3.259h-6.635a6 6 0 0 1 1.317 -10.66v-.326m0 -4.014v-3h4v7m.613 .598a6 6 0 0 1 2.801 2.817" />
          <Path d="M9 3h6" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }


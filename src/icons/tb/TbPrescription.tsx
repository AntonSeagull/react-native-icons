

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPrescription = (props: IconProps) => {

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
          <Path d="M6 19v-16h4.5a4.5 4.5 0 1 1 0 9h-4.5" />
          <Path d="M19 21l-9 -9" />
          <Path d="M13 21l6 -6" />
        </G>
      </Svg>
    );
  }


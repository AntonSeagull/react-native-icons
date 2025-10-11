

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiMacbookFill = (props: IconProps) => {

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
          <Path d="M2 4.00685C2 3.45078 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44995 22 4.00685V17H2V4.00685ZM1 19H23V21H1V19Z" />
        </G>
      </Svg>
    );
  }


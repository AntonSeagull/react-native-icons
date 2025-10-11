

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuBeaker = (props: IconProps) => {

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
          <Path d="M4.5 3h15" />
          <Path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" />
          <Path d="M6 14h12" />
        </G>
      </Svg>
    );
  }


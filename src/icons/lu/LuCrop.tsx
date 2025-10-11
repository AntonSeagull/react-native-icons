

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuCrop = (props: IconProps) => {

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
          <Path d="M6 2v14a2 2 0 0 0 2 2h14" />
          <Path d="M18 22V8a2 2 0 0 0-2-2H2" />
        </G>
      </Svg>
    );
  }


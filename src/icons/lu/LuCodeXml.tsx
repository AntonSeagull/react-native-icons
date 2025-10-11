

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuCodeXml = (props: IconProps) => {

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
          <Path d="m18 16 4-4-4-4" />
          <Path d="m6 8-4 4 4 4" />
          <Path d="m14.5 4-5 16" />
        </G>
      </Svg>
    );
  }


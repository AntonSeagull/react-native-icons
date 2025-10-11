

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiSolidDuplicate = (props: IconProps) => {

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
          <Path d="M4 22h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2zm2-9h3v-3h2v3h3v2h-3v3H9v-3H6v-2z" />
          <Path d="M20 2H8v2h12v12h2V4c0-1.103-.897-2-2-2z" />
        </G>
      </Svg>
    );
  }


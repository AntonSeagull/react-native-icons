

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuLibrary = (props: IconProps) => {

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
          <Path d="m16 6 4 14" />
          <Path d="M12 6v14" />
          <Path d="M8 8v12" />
          <Path d="M4 4v16" />
        </G>
      </Svg>
    );
  }


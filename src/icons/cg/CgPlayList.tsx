

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgPlayList = (props: IconProps) => {

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
          <Path d="M16 5H4V7H16V5Z" fill="currentColor" />
          <Path d="M16 9H4V11H16V9Z" fill="currentColor" />
          <Path d="M4 13H12V15H4V13Z" fill="currentColor" />
          <Path d="M20 16L14 13V19L20 16Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }


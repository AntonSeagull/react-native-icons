

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgDisplayGrid = (props: IconProps) => {

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
          <Path d="M7 7V11H11V7H7Z" fill="currentColor" />
          <Path d="M13 7H17V11H13V7Z" fill="currentColor" />
          <Path d="M13 13V17H17V13H13Z" fill="currentColor" />
          <Path d="M7 13H11V17H7V13Z" fill="currentColor" />
          <Path d="M3 3H21V21H3V3ZM5 5V19H19V5H5Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

